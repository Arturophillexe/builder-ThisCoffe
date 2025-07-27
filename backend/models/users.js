const mongoose = require('mongoose');
const { string } = require('zod');

const usuarioSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    correo: { type: String, unique: true },
    empresa:String,
    rol:String,
    contraseña:String
});
module.exports = mongoose.model('User', userSchema);
