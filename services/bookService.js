export default {
    getBooks,
    getBookByKey,
    getAnotherBook,
    createReview
}

function getBookByKey(key,value){
    const book = gBooks.find(book => book[key] === value);
    return book
}

function getAnotherBook(bookId,moveTo){
    const idx = gBooks.findIndex(book => book.id === bookId)
    if(idx+moveTo >= gBooks.length) return gBooks[0].id 
    if(idx+moveTo < 0) return gBooks[gBooks.length-1].id 
    return gBooks[idx+moveTo].id
}

function createReview(bookId, fullName, rate){
    console.log('bookId',bookId);
    console.log('fullName',fullName);
    console.log('rate',rate);
    let book = getBookByKey('id',bookId)
    if(!book.reviews) book.reviews = []
    book.reviews.push({
        fullName,
        rate
    })
    console.log('gBooks',gBooks);
}

var gBooks = [{
    "id": "OXeMG8wNskc",
    "title": "metus hendrerit",
    "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
    "authors": [
        "Barbara Cartland"
    ],
    "publishedDate": 1999,
    "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
    "pageCount": 713,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
    "language": "en",
    "listPrice": {
        "amount": 109,
        "currencyCode": "EUR",
        "isOnSale": false
    }
},
{
    "id": "JYOJa2NpSCq",
    "title": "morbi",
    "subtitle": "lorem euismod dictumst inceptos mi",
    "authors": [
        "Barbara Cartland"
    ],
    "publishedDate": 1978,
    "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
    "pageCount": 129,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
    "language": "sp",
    "listPrice": {
        "amount": 44,
        "currencyCode": "EUR",
        "isOnSale": true
    },    
},
{
    "id": "1y0Oqts35DQ",
    "title": "at viverra venenatis",
    "subtitle": "gravida libero facilisis rhoncus urna etiam",
    "authors": [
        "Dr. Seuss"
    ],
    "publishedDate": 1999,
    "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
    "pageCount": 972,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
    "language": "he",
    "listPrice": {
        "amount": 108,
        "currencyCode": "ILS",
        "isOnSale": false
    }
},
{
    "id": "kSnfIJyikTP",
    "title": "dictum",
    "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
    "authors": [
        "Danielle Steel"
    ],
    "publishedDate": 1978,
    "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
    "pageCount": 303,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
    "language": "en",
    "listPrice": {
        "amount": 30,
        "currencyCode": "EUR",
        "isOnSale": true
    }
},
{
    "id": "f4iuVmbuKCC",
    "title": "sem himenaeos aptent",
    "subtitle": "interdum per habitasse luctus purus est",
    "authors": [
        "Dr. Seuss"
    ],
    "publishedDate": 2011,
    "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
    "pageCount": 337,
    "categories": [
        "Computers",
        "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
    "language": "sp",
    "listPrice": {
        "amount": 19,
        "currencyCode": "USD",
        "isOnSale": false
    }
},
]


function getBooks(){
    return gBooks;
}