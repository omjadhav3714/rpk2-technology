import React from 'react'
import Resizer from 'react-image-file-resizer';
import { useSelector } from 'react-redux';
import { Avatar, Badge } from 'antd';
import './../../admin/adminnav.css';
require("dotenv").config();

// const cloudinary = require('cloudinary');
const cloudinary = require('cloudinary/lib/cloudinary');
cloudinary.config({
    cloud_name:'dtwkfae0p',
    api_key: '459219175487354',
    api_secret: 'Dfy10-XcsTTB2JSrPZiPaF4qCW8',
});
const Uploadedit=({ values, setValues, setLoading })=> {

    var result;
    var image_id;
//config


//to upload images to cloudinary
const upload=async(uri)=>{
     result = await cloudinary.uploader.upload(uri, {
        public_id: `${Date.now()}`,
        resource_type: 'auto',
    })
    // alert({
    //     public_id: result.public_id,
    //     url: result.secure_url,
    // });
}
//to remove uploaded images to cloudinary
const remove=async(public_id)=>{
     image_id = public_id;
    cloudinary.uploader.destroy(image_id, (err, result) => {
        if (err) return 
        // alert( err );
        alert("ok");
    })
}
    const { user } = useSelector((state) => ({ ...state }));

    const fileUploadAndResize = (e) => {
        let files = e.target.files;
        let allUploadedFiles = values.image;


        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    'JPEG',
                    100,
                    0,
                    (uri) => {
                        upload(uri)
                            .then((res) => {
                                setLoading(false);
                                allUploadedFiles.push(result);
                                setValues({ ...values, image: allUploadedFiles });
                            })
                            .catch((err) => {
                                setLoading(false);
                                console.log('UPLOAD EROR', err);
                            });
                    },
                    "base64");
            }
        }
    };
    const handleImageRemove = (public_id) => {
        setLoading(true);
        remove(public_id)
            .then((res) => {
                setLoading(false);
                const { images } = values;
                let filteredImages = images.filter((item) => {
                    return item.public_id !== public_id;
                });
                setValues({ ...values, image: filteredImages });
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };



    return (
        <>
        <div className="row">
                {values.image &&
                    values.image.map((image) => (
                        <Badge
                            count="X"
                            key={image.public_id}
                            onClick={() => handleImageRemove(image.public_id)}
                            style={{ cursor: "pointer" }}
                        >
                            <Avatar
                                src={image.url}
                                size={100}
                                shape="square"
                                className="ml-3"
                            />
                        </Badge>
                    ))}
            </div>
            <br/>
            <div className="row">
                <label className="btn btn-primary btn-raised">Choose Files
                    <input
                        type="file"
                        hidden
                        multiple
                        accept="images/*"
                        onChange={fileUploadAndResize}
                    />
                </label>
            </div>
        </>
    )
}

export default Uploadedit
