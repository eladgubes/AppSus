import bookService from "../services/bookService.js"
import AddReview from "../cmps/AddReview.jsx"
const { Link } = ReactRouterDOM
export default class BookDetails extends React.Component {

    state = {
        book: null,
        nextBookId: null,
        prevBookId: null,
        isReview: false
    }

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.bookId !== this.props.match.params.bookId){
            this.loadBook()
        }
    }

    loadBook(){
        const id = this.props.match.params.bookId;
        const book = bookService.getBookByKey('id', id);
        this.setState({ book }, () => {
            const nextBookId = bookService.getAnotherBook(this.state.book.id, +1);
            const prevBookId = bookService.getAnotherBook(this.state.book.id, -1);
            this.setState({ nextBookId, prevBookId })
        });
    }

    onSetReview = (review) => {
        bookService.createReview(this.state.book.id, review.fullName, review.rate)
    }

    onOpenReview = () => {
        this.setState({isReview: !this.state.isReview})
        setTimeout(() => {
            this.setState({isReview: !this.state.isReview})
        }, 3000)
    }

    render() {
        const book = this.state.book
        return (
            <section>
                {book && <div>
                    <img src={book.thumbnail} />
                    <h1>{book.title}</h1>
                    <p>{book.subtitle}</p>
                    <button><Link to={`/gallery/${this.state.nextBookId}`}>Next</Link></button>
                    <button><Link to={`/gallery/${this.state.prevBookId}`}>Prev</Link></button>
                    <button onClick={this.onOpenReview}>Add Review</button>
                    {this.state.isReview && <AddReview onSetReview={this.onSetReview}/>}
                </div>}
            </section>
        )
    }
}