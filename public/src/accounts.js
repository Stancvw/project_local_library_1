function findAccountById(accounts, id) {
  //Use the find method to iterate through the accounts array and find an account that matches given ID.
  const accountsId = accounts.find((account) => {
    if (id === account.id) {
      return account;
    }
  })
  return accountsId;
}

function sortAccountsByLastName(accounts) {

  //Sort the accounts based on lower case version of last name.
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  const bookArray = [];

  for (let i = 0; i < books.length; i++) {
    let borrows = books[i].borrows;
    let sum = 0;
    for (let j = 0; j < borrows.length; j++) {
      if (account.id === borrows[j].id) {
        sum ++;
      }
    }
    bookArray.push (sum);
  }

  const result = bookArray.reduce ((acc, sum) => acc + sum);
  return result;

  
}

function getBooksPossessedByAccount(account, books, authors) {

  const borrowed = books.filter((book) => book.borrows[0].id === account.id && book.borrows[0].returned === false);
  //Creates an array of only the books that were borrowed by the account most recently AND never returned.


  //This maps to a new array where the book object includes the author object
  const notReturned = borrowed.map((book) => {
    let author = authors.find((auth) => auth.id === book.authorId)
    return {
      ...book,
      "author": {
        ...author
      }
    }; //Uses spread operator to combine the book object with the other object, which now has a key of "author".
  })

  return notReturned;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};