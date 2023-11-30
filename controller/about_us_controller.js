module.exports.about = function (req, res) {
  return res.end("<h1>we are a social media app</h1>");
};

module.exports.new = function (req, res) {
  return res.end("<h1>this is a new response</h1>");
};
