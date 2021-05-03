const Blog = require('../models/blog');

module.exports = {
  getHome: (req, res) => {
    res.json('This is the home route of API Route');
  },
  getBlogs: async (req, res) => {
    const blogs = await Blog.find()
    res.json(blogs)
  },
  postBlog: async (req, res) => {
    try {
      const blog = await req.body;
      console.log(blog);

      await Blog.create({
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes,
      });
      console.log('Blog Post Added!');
    } catch (err) {
      console.log(err);
    }
  },
};
