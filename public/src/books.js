function findAuthorById(authors, id) {

  //Iterate through the authors array, return the first author to match the given ID
  const authorsId = authors.find((author) => {
    if (author.id === id) {
      return author;
    }
  });
  return authorsId;
}

function findBookById(books, id) {

  //Iterate through the books array, return the first book to match the given ID.
  const booksId = books.find((book) => {
    if (book.id === id) {
      return book;
    }
  });
  return booksId;
}

function partitionBooksByBorrowedStatus(books) {

  const returned = books.filter((book) => book.borrows[0].returned === true); //Create an array of books that have a status of 'returned'.
  const notReturned = books.filter((book) => book.borrows[0].returned === false); //Create an array of books that do not have a status of 'returned'.
  //Return both arrays within a single array:
  return ([notReturned, returned])

}

function getBorrowersForBook(book, accounts) {

  const borrows = book.borrows; //Array of every transaction within book object

  borrowsFixed = borrows.map((transaction) => {
    const account = accounts.find((account) => account.id === transaction.id);
    return {
      ...transaction,
      ...account
    }; //Return an object that includes both the transaction and the account information.
  })

  const removed = borrowsFixed.splice(10); //Reduce borrowsFixed down to 10 or less elements.
  return borrowsFixed;

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};