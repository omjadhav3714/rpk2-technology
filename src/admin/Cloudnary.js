// const cloudinary = require('cloudinary')

// //config
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// //to upload images to cloudinary
// const upload=async()=>{
//     let result = await cloudinary.uploader.upload(req.body.image, {
//         public_id: `${Date.now()}`,
//         resource_type: 'auto',
//     });
//     res.json({
//         public_id: result.public_id,
//         url: result.secure_url,
//     });
// }
// //to remove uploaded images to cloudinary
// exports.remove = (req, res) => {
//     let image_id = req.body.public_id;
//     cloudinary.uploader.destroy(image_id, (err, result) => {
//         if (err) return res.json({ success: false, err });
//         res.send("ok");
//     })
// };
