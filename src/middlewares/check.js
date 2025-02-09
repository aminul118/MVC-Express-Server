const check = async (req, res, next) => {
  console.log("MIDDLEWARE CHECKED");
  next();
};

module.exports = check;
