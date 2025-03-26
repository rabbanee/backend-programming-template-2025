const booksRepository = require('./books-repository');

async function getBooks(offset, limit) {
  return booksRepository.getBooks(offset, limit);
}

async function getBook(id) {
  return booksRepository.getBook(id);
}

async function create(title) {
  return booksRepository.create(title);
}

async function updateBook(id, title) {
  return booksRepository.updateBook(id, title);
}

async function deleteBook(id) {
  return booksRepository.deleteBook(id);
}

module.exports = {
  getBooks,
  getBook,
  create,
  updateBook,
  deleteBook,
};
