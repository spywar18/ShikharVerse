import express from 'express';
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogController.js";
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish); 
blogRouter.post('/comments', auth, getBlogComments); // Fetch comments for a blog
blogRouter.post('/add-comment', auth, addComment);
blogRouter.get('/:blogId/comments', getBlogComments);




export default blogRouter;
