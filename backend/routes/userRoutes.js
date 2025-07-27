const express = require('express');
const router = express.Router();
const { 
    registrarUsuario, 
    loginUsuario, 
    obtenerPerfil 
} = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route   POST /api/users/register
// @desc    Registrar nuevo usuario
// @access  Public
router.post('/register', registrarUsuario);

// @route   POST /api/users/login
// @desc    Login usuario
// @access  Public
router.post('/login', loginUsuario);

// @route   GET /api/users/profile
// @desc    Obtener perfil de usuario
// @access  Private
router.get('/profile', auth, obtenerPerfil);

module.exports = router;
