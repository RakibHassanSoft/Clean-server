const mongoose = require('mongoose');

const CertificatesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        
    },
    templateId: {
        type: String,
        required: true,
    },
    certificates: [
        {
            title: {
                type: String,

            },
            institution: {
                type: String,
            },
        },
    ]
    
}, { timestamps: true });

const Certificates = mongoose.model('Certificates', CertificatesSchema);

module.exports = Certificates;
