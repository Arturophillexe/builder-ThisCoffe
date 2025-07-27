const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generar JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'tu_jwt_secret', {
        expiresIn: '30d',
    });
};

exports.registrarUsuario = async (req, res) => {
    try {
        const { firstName, lastName, email, password, company, role, agreeToTerms, subscribeNewsletter } = req.body;

        // Verificar si el usuario ya existe
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        // Crear nuevo usuario
        const nuevoUsuario = new User({
            firstName,
            lastName,
            email,
            password,
            company,
            role,
            agreeToTerms,
            subscribeNewsletter
        });

        await nuevoUsuario.save();

        // Generar token
        const token = generateToken(nuevoUsuario._id);

        res.status(201).json({
            mensaje: 'Usuario registrado con éxito',
            token,
            usuario: {
                id: nuevoUsuario._id,
                firstName: nuevoUsuario.firstName,
                lastName: nuevoUsuario.lastName,
                email: nuevoUsuario.email,
                company: nuevoUsuario.company,
                role: nuevoUsuario.role
            }
        });
    } catch (err) {
        console.error('Error al registrar usuario:', err);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

exports.loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario
        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Verificar contraseña
        const esPasswordCorrecta = await usuario.comparePassword(password);
        if (!esPasswordCorrecta) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar token
        const token = generateToken(usuario._id);

        res.json({
            mensaje: 'Login exitoso',
            token,
            usuario: {
                id: usuario._id,
                firstName: usuario.firstName,
                lastName: usuario.lastName,
                email: usuario.email,
                company: usuario.company,
                role: usuario.role
            }
        });
    } catch (err) {
        console.error('Error al hacer login:', err);
        res.status(500).json({ error: 'Error al hacer login' });
    }
};

exports.obtenerPerfil = async (req, res) => {
    try {
        const usuario = await User.findById(req.usuario.id).select('-password');
        res.json(usuario);
    } catch (err) {
        console.error('Error al obtener perfil:', err);
        res.status(500).json({ error: 'Error al obtener perfil' });
    }
};
