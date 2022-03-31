const busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.formData = (req, res, next) => {
  const bus = busboy({ headers: req.headers });
  req.body = {};

  let uploadingImage = false;
  let uploadingCount = 0;

  function done() {
    if(uploadingImage) return;
    if(uploadingCount > 0) return;

    next();
  }

  bus.on('field', (key, value) => {
    req.body[key] = value;
  });

  bus.on('file', (key, file, _filename) => {
    uploadingImage = true;
    uploadingCount++;

    const stream = cloudinary.uploader.upload_stream({
      upload_preset: 'makeitreal-top',
    }, (err, res) => {
        if(err) {
          throw new Error('Invalid image');
        }

        req.body[key] = res.secure_url;
        uploadingImage = false;
        uploadingCount--;

        done();
    });

    file.on('data', buffer => {
      stream.write(buffer);
    })

    file.on('end', () => {
      stream.end();
    })
  });

  bus.on('finish', () => {
    done();
  });

  req.pipe(bus);
}
