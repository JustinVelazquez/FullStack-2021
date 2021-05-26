const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  //   return blogs.forEach((blog) => blog.likes.reduce((a, c) => a + c));
  return blogs.reduce(function (a, c) {
    return a + c.likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  return blogs.reduce((a, c) => (a.likes > c.likes ? a : c));
};

const MostBlogs = (blogs) => {
  return blogs.reduce((a,c,i) => (a.blogs > c.blogs ? a.author && a.blogs : c.author && c.blogs ) )
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
