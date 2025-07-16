import fs from 'fs';
import imageKit from '../config/imageKit.js';

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, image, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        //Check if all fields are present
        if (!title || !description || !category || !imageFile) {
            return res.status({success: false, message: "Missing required fields"});
        }

        const fileBuffer = fs.redFileSync(imageFile.path);
        const resposne = await imageKit.upload ({
            
        })
    } catch (error) {

    }
}