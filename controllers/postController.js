const Post = require('../models/postModel')

const createPost = async(req,res) =>{

    try{
        const post = new Post({
            title: req.body.title,
            date: req.body.date,
            image: req.file.filename
        });
        
        const postData = await post.save();

        res.status(200).send({ success:true, mas:'Post Data', date: postData });
        
    } catch(error) {
        res.status(400).send({ success:false, mas:error.message});
    }
}

module.exports = {
    createPost
}