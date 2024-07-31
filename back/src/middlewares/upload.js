const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '/src/public/images/')
	},

	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname))
	},
})

const imageFilter = function (req, file, cb) {
	if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
		req.fileValidationError = 'Only image files are allowed!'
		return cb(new Error('Only image files are allowed!'), false)
	}
	cb(null, true)
}

let uploadMd = multer({ storage: storage, fileFilter: imageFilter })

const upload = (req, res, next) => {
	uploadMd(req, res, async (err) => {
		if (req.fileValidationError) {
			return json({ code: 1, message: req.fileValidationError })
		} else if (!req.file) {
			return res.json({ code: 1, message: 'Please select an image to upload' })
		} else if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
		} else if (err) {
			return res.status(500).json(err)
		}
		req.body.image = 'http://localhost:8000/images/' + req.file.filename
		next()
	})
}

module.exports = { uploadMd, upload, storage }