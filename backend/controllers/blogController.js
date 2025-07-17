const BlogPost = require('../models/BlogPost');


const createBlog = async(req, res) => {
    try{
        res.status(200).json({message: "Blog creation endpoint reached"});
    }catch(err){
        console.log("error creating blog:", err.message);
        res.json(500).json({ error: "Internal server error"})
    }
}

module.exports = {
    createBlog,
}