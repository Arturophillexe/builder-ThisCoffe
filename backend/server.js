const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/eventos', require('./routes/eventRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ mensaje: 'Backend de thiscoffee funcionando correctamente' });
});

// Conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/thiscoffee', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Conectado a MongoDB');
    } catch (err) {
        console.error('❌ Error de conexión a MongoDB:', err);
        process.exit(1);
    }
};

// Iniciar servidor
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
        console.log(`📡 API disponible en: http://localhost:${PORT}/api`);
    });
};

startServer();

module.exports = app;
