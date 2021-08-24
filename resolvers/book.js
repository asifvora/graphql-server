const { books } = require("../models");

// Resolvers define the technique for fetching the types defined in the
// schema.
const book = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (arg, book) => {
      books.push(book);
      return book;
    },
  },
};

module.exports = book;
