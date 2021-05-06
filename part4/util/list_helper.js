const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  //   return blogs.forEach((blog) => blog.likes.reduce((a, c) => a + c));
  return blogs.reduce(function (a, c) {
    return a + c.likes;
  }, 0);
};

module.exports = {
  dummy,
  totalLikes,
};
