const multer = require('multer');
const { v4: uuidv4 } = require('uuid')

const MIME_TYPE_MAP = {   //epitrepta arxeia
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};

const fileUpload = multer({
    limit: 512000,   //max size of 512kb
    storage: multer.diskStorage({
        destination: (req, file, cb) => { 
            cb(null,'uploads/images')
        },
        filename: (req, file, cb) => {
            const extension = MIME_TYPE_MAP[file.mimetype];
            cb(null, uuidv4() + '.' + extension);
        }
    }),
        fileFilter: (req, file, cb) => {
            const isValid=!!MIME_TYPE_MAP[file.mimetype];
            let error=isValid?null:new Error('Invalid mime type!');
            cb(error,isValid);
        }
});

module.exports = fileUpload;