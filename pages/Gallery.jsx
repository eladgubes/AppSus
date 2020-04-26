import bookService from "../services/bookService.js"
import BookPrev from "../cmps/BookPrev.jsx"

export default class Gallery extends React.Component{
    
    state = {
        books: null    
    }

    componentDidMount() {
        this.booksForDisplay()    
    }

    booksForDisplay = () => {
        const books = bookService.getBooks()
        this.setState({books})
    }
    
    render(){
        {console.log('books',this.state.books)}
        return (
            <section className="books-galley flex center-center">
                {this.state.books && this.state.books.map((book,idx) => <BookPrev key={idx} book={book}/>)}
            </section>
        )
    }

}