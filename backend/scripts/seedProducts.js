const mongoose = require("mongoose");
const Product = require("../models/Product");
const User = require("../models/User");
require("dotenv").config();

const sampleProducts = [
  {
    name: "Etíope Yirgacheffe",
    description: "Notas brillantes y florales con toques cítricos. Perfecto para preparaciones de filtro.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "beans",
    origin: "Etiopía",
    roastLevel: "light",
    featured: true,
  },
  {
    name: "Colombiano Supremo",
    description: "Café de cuerpo pleno y rico con notas de chocolate y caramelo.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1504627298434-2119d9b9a75e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "beans",
    origin: "Colombia",
    roastLevel: "medium",
    featured: true,
  },
  {
    name: "Tueste Francés",
    description: "Sabor audaz y ahumado con un final rico e intenso.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "beans",
    origin: "Brasil",
    roastLevel: "dark",
  },
  {
    name: "Mezcla de la Casa Molido",
    description: "Nuestra mezcla característica, perfectamente molida para cafeteras de goteo.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1611564000670-d99d5e8c8b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "ground",
    roastLevel: "medium",
    featured: true,
  },
  {
    name: "Mezcla para Espresso",
    description: "Sabor rico y concentrado, perfecto para máquinas de espresso.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "ground",
    roastLevel: "dark",
  },
  {
    name: "Gotero Pour Over",
    description: "Gotero de cerámica premium para la experiencia perfecta de pour-over.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "equipment",
  },
  {
    name: "Prensa Francesa",
    description: "Prensa francesa clásica de vidrio para café de cuerpo completo.",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1611564637167-25d8a31dc1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "equipment",
  },
  {
    name: "Molino de Café",
    description: "Molino de fresas para café molido consistente y fresco.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "equipment",
  },
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/thiscoffee");
    console.log("✅ Conectado a MongoDB");

    // Find or create a default seller user
    let seller = await User.findOne({ Usertype: "seller" });
    
    if (!seller) {
      console.log("No se encontró vendedor, creando usuario de prueba...");
      seller = new User({
        firstName: "Admin",
        lastName: "Seller",
        email: "seller@thiscoffee.com",
        password: "123456",
        company: "thiscoffee",
        role: "Vendedor",
        Usertype: "seller",
        agreeToTerms: true,
        subscribeNewsletter: false,
      });
      await seller.save();
      console.log("✅ Usuario vendedor creado: seller@thiscoffee.com / 123456");
    }

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Productos existentes eliminados");

    // Create products with seller ID
    const productsWithSeller = sampleProducts.map(product => ({
      ...product,
      sellerId: seller._id,
    }));

    await Product.insertMany(productsWithSeller);
    console.log(`✅ ${sampleProducts.length} productos creados exitosamente`);

    console.log("\n📦 Productos creados:");
    sampleProducts.forEach((product, index) => {
      console.log(`   ${index + 1}. ${product.name} - $${product.price}`);
    });

    console.log("\n🎉 Seed completado exitosamente!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error en seed:", error);
    process.exit(1);
  }
};

seedProducts();
