var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/posts_database');

var postSchema = mongoose.Schema({
    title: 'string',
    author: 'string',
    body: 'string',
    created: Date,
    updated: Date,
});

var Post = mongoose.model('Post', postSchema);

exports.posts = function(req, res) {
  Post.find({}, function(err, obj) {
    res.json(obj)
  });
};

exports.post = function(req, res) {
  Post.findOne({ _id: req.params.id }, function(err, obj) {
    res.json(obj);
  });
};

exports.addPost = function(req, res) {
    var b = req.body;
    Post({
        title: b.title,
        author: b.author,
        body: b.body,
        created: new Date(),
        updated: new Date()
    }).save(function (err, docs){
        if(err) {res.json(err);}
        res.json(true);
    });
};


exports.editPost = function (req, res) {
  return Post.findById(req.params.id, function (err, post) {
    post.title = req.body.title;
    post.author = req.body.author;
    post.body = req.body.body;
    post.updated= new Date();
    post.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
       res.send(post);
    });
  });
}

exports.deletePost = function(req, res) {
  Post.remove({ _id: req.params.id }, function(err) {
    res.json(true);
  });
};