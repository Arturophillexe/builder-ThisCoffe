const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  obtenerProductos,
  obtenerProductosPorVendedor,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  buscarProductos,
} = require("../controllers/productController");

// Public routes
router.get("/", obtenerProductos); // Get all active products with filters
router.get("/search", buscarProductos); // Search products
router.get("/:id", obtenerProductoPorId); // Get single product

// Protected routes (require authentication)
router.get("/seller/my-products", auth, obtenerProductosPorVendedor); // Get seller's products
router.post("/", auth, crearProducto); // Create product (sellers only)
router.put("/:id", auth, actualizarProducto); // Update product (owner only)
router.delete("/:id", auth, eliminarProducto); // Delete product (owner only)

module.exports = router;
