const { Books } = require('../../../models');

async function getBooks(offset, limit) {
  return Books.find({}).skip(offset).limit(limit);
}

async function getBook(id) {
  return Books.findById(id);
}

async function create(title) {
  return Books.create({ title });
}

async function updateBook(id, title) {
  return Books.updateOne({ _id: id }, { $set: { title } });
}

async function deleteBook(id) {
  return Books.deleteOne({ _id: id });
}

module.exports = {
  getBooks,
  getBook,
  create,
  updateBook,
  deleteBook,
};
