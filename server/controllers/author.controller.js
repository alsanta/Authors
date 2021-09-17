const Author = require("../models/author.model")

module.exports.getAll=(req,res)=>{
    Author.find()
    .then(allAuthors=>{
        res.json({results:allAuthors})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.createNew=(req,res)=>{
    Author.create(req.body)
    .then(author=>{
        res.json({results:author})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.deleteById=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.getById=(req,res)=>{
    Author.find({_id:req.params.id})
    .then(singleProduct=>{
        res.json({result:singleProduct})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.updateById= (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}