const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        unique: true,
        required: true
    },
    company: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    agreeToTerms: {
        type: Boolean,
        required: true
    },
    subscribeNewsletter: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Hash password before saving
usuarioSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
usuarioSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', usuarioSchema);
