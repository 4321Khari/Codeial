module.exports.profile = function (req, res) {
  return res.end("<h1>User profile</h1>");
};

module.exports.photos = function (req, res) {
  return res.end("<h1>there are many photos</h1>");
};
