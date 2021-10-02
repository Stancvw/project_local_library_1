function getTotalBooksCount(books) {
  return books.length; //returns the total books
}

function getTotalAccountsCount(accounts) {
  return accounts.length //returns the total accounts
}

function getBooksBorrowedCount(books) {

  let stillOut = 0;

  for (i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) { //counts which books show not returned
      stillOut++;
    }
  }

  return stillOut;

}

function getMostCommonGenres(books) {

  const total = []


  books.forEach((book) => {

    if (total.find((element) =>
        element.name === book.genre
      )) {
      const match = total.find((element) =>
        element.name === book.genre
      )
      match.count += 1;

    } else {
      const count = {
        "name": book.genre,
        "count": 1
      };
      total.push(count);
    }
  })

  total.sort((genreA, genreB) =>
    genreB.count - genreA.count
  )

  total.splice(5);

  return total;
}

function getMostPopularBooks(books) {
  const finalAnswer = [];

  books.forEach((book) => {
    const bookCount = {
      "name": book.title,
      "count": book.borrows.length
    }
    finalAnswer.push(bookCount);
  })

  finalAnswer.sort((bookA, bookB) => bookB.count - bookA.count)

  finalAnswer.splice(5);

  return finalAnswer;

}

function getMostPopularAuthors(books, authors) {

  //Iterate through the books list and count up all the books made by a specific authors
  //Create an object in the form of {name: authorsName, count: total amount any of their books have been borrowed.}

  const authorsArray = [];
  authors.forEach((author) => {
    if (!(authorsArray.find((writer) => writer.id === author.id))) {
      authorsArray.push(author);
    } //authorsArray now has a single object for every Author


  })
  authorsArray.forEach((author) => {
    books.forEach((book) => {
      let total = 0;
      if (book.authorId === author.id) {
        total += book.borrows.length;
        author["count"] = total;
      }
    })
  })

  

  finalAnswer = final(authorsArray);

  finalAnswer.sort((authorA, authorB) => authorB.count - authorA.count)
  finalAnswer.splice(5);
  return finalAnswer;
}

//Here is my helper function:
function final(array) {
  const finalArray = array.map((element) => {
    let name = `${element.name.first} ${element.name.last}`
    let count = element.count;
    return {
      name,
      count
    }
  })
  return finalArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};