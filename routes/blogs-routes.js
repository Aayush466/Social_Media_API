import  express from 'express';
const blogrouter = express.Router();

router.get('/',getAllBlogs);
blogrouter.post("/add",addBlog)
blogrouter.put('/update/:id',updateBlog,)
export default blogrouter;
