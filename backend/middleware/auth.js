const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ error: 'No hay token, acceso denegado' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'tu_jwt_secret');
        const usuario = await User.findById(decoded.id).select('-password');
        
        if (!usuario) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.usuario = usuario;
        next();
    } catch (err) {
        console.error('Error en middleware de auth:', err);
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = auth;
