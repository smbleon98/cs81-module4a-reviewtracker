// Weekly reading log
/*
Function summary
This is a readingLog array containing of log entry objects. 
Each object has 3 property names: day the book was read, the title of the book, 
and how many minutes the book was read for.
*/
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
/*
Function summary
This is function addReadBook, which has 3 parameters that matches the property names
of the readingLog object: day, book, minutes. This function creates a new readingLog 
entry and adds it to the readingLog using the .push() array method.
*/
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
/*
Function summary
This function calculates how much total time the student spent reading.
Its input must be a readingLog object, and it loops through each entry to retrieve
and add up the time spent on each book. It returns the total time in minutes.
*/
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
/*
Function summary
This function identifies which book was read the most frequently.
Its input must be a readingLog object, and it creates a count for how often each book
appears. It returns the name of the book with the highest read count.
*/
function mostReadBook(log) {
  const bookCounts = {};                    // Create an empty object called 
  for (let entry of log) {                  // Begins going through each book in the existing readingLog object
    if (!bookCounts[entry.book]) {          // If this book does not exist in the bookCounts list, 
      bookCounts[entry.book] = 1;           // then the count for that book is set to 1 because it'll be the first time that the book will be added to the readingLog
    } else {                                // Otherwise, if that book exists already,      
      bookCounts[entry.book]++;             // Then this will be another instance, so increase count by 1 
    }
  }

  let maxBook = null;                       // maxBook representing the most frequently read book
  let maxCount = 0;     
  for (let book in bookCounts) {            // This goes through all the counts for each book
    if (bookCounts[book] > maxCount) {      // If the read count for this book is greater than the read count of the running most read book
      maxBook = book;                       // Update the most frequently read book with the correct name
      maxCount = bookCounts[book];          // Update the highest read count with the read count of that book
    }
  }
  return maxBook;                           // Return the name of the book with the highest read count
}

/*
Area for improvement: To make this function's code more efficient,
we could use array methods like Math.max.apply instead 
so that the code is more readable. 

const maxCount = Math.max.apply(null, Object.values(bookCounts));
for (let book in bookCounts) {
  if (bookCounts[book] === maxCount) {
    return book;

*/

// Prints a summary of minutes read per day
/*
Function summary
This function prints to the console the reading log entries.
Each entry is its own line.
*/
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));


// Adding a test case
addReadBook("Sunday", "Heartland", 120);