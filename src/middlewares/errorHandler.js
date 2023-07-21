const errorHandler = (err, req, res, next) => {
  // console.log(err, " ERROR=======");
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "NOTFOUND":
      res.status(404).json({ message: "Data notfound" });
      break;
    case "ALREADY_BOOK_LOAN":
      res.status(404).json({ message: "You already loan a book" });
      break;

    default:
      res.status(500).json({ message: "internal server error" });
      break;
  }
};

module.exports = errorHandler;
