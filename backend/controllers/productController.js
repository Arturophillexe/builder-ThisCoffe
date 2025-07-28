const Product = require("../models/Product");

// Get all products
exports.obtenerProductos = async (req, res) => {
  try {
    const { category, featured, sellerId } = req.query;
    let filter = { active: true };

    // Apply filters
    if (category) {
      filter.category = category;
    }
    if (featured === "true") {
      filter.featured = true;
    }
    if (sellerId) {
      filter.sellerId = sellerId;
    }

    const productos = await Product.find(filter)
      .populate("sellerId", "firstName lastName email")
      .sort({ createdAt: -1 });

    res.json(productos);
  } catch (err) {
    console.error("Error al obtener productos:", err);
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Get products by seller (for seller dashboard)
exports.obtenerProductosPorVendedor = async (req, res) => {
  try {
    const productos = await Product.find({
      sellerId: req.usuario.id,
      active: true,
    }).sort({ createdAt: -1 });

    res.json(productos);
  } catch (err) {
    console.error("Error al obtener productos del vendedor:", err);
    res.status(500).json({ error: "Error al obtener productos del vendedor" });
  }
};

// Get single product by ID
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id).populate(
      "sellerId",
      "firstName lastName email",
    );

    if (!producto || !producto.active) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (err) {
    console.error("Error al obtener producto:", err);
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

// Create new product (sellers only)
exports.crearProducto = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      origin,
      roastLevel,
      featured,
    } = req.body;

    // Validate seller permission
    if (req.usuario.Usertype !== "seller") {
      return res
        .status(403)
        .json({ error: "Solo los vendedores pueden crear productos" });
    }

    const nuevoProducto = new Product({
      name,
      description,
      price,
      image,
      category,
      origin,
      roastLevel,
      featured: featured || false,
      sellerId: req.usuario.id,
    });

    await nuevoProducto.save();

    // Populate seller info before sending response
    await nuevoProducto.populate("sellerId", "firstName lastName email");

    res.status(201).json({
      mensaje: "Producto creado con éxito",
      producto: nuevoProducto,
    });
  } catch (err) {
    console.error("Error al crear producto:", err);
    res.status(500).json({ error: "Error al crear producto" });
  }
};

// Update product (seller must own the product)
exports.actualizarProducto = async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);

    if (!producto || !producto.active) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Check if user owns this product
    if (producto.sellerId.toString() !== req.usuario.id) {
      return res.status(403).json({
        error: "No tienes permisos para editar este producto",
      });
    }

    const {
      name,
      description,
      price,
      image,
      category,
      origin,
      roastLevel,
      featured,
    } = req.body;

    // Update fields
    producto.name = name || producto.name;
    producto.description = description || producto.description;
    producto.price = price || producto.price;
    producto.image = image || producto.image;
    producto.category = category || producto.category;
    producto.origin = origin || producto.origin;
    producto.roastLevel = roastLevel || producto.roastLevel;
    producto.featured = featured !== undefined ? featured : producto.featured;

    await producto.save();
    await producto.populate("sellerId", "firstName lastName email");

    res.json({
      mensaje: "Producto actualizado con éxito",
      producto,
    });
  } catch (err) {
    console.error("Error al actualizar producto:", err);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

// Delete product (soft delete - seller must own the product)
exports.eliminarProducto = async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);

    if (!producto || !producto.active) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Check if user owns this product
    if (producto.sellerId.toString() !== req.usuario.id) {
      return res.status(403).json({
        error: "No tienes permisos para eliminar este producto",
      });
    }

    // Soft delete
    producto.active = false;
    await producto.save();

    res.json({
      mensaje: "Producto eliminado con éxito",
    });
  } catch (err) {
    console.error("Error al eliminar producto:", err);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

// Search products
exports.buscarProductos = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Término de búsqueda requerido" });
    }

    const productos = await Product.find({
      $and: [
        { active: true },
        {
          $or: [
            { name: { $regex: q, $options: "i" } },
            { description: { $regex: q, $options: "i" } },
            { origin: { $regex: q, $options: "i" } },
          ],
        },
      ],
    })
      .populate("sellerId", "firstName lastName email")
      .sort({ featured: -1, createdAt: -1 });

    res.json(productos);
  } catch (err) {
    console.error("Error al buscar productos:", err);
    res.status(500).json({ error: "Error al buscar productos" });
  }
};
