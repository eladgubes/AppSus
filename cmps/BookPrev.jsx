const { Link } = ReactRouterDOM
export default function BookPrev(props) {

    return (
        <Link to={`/gallery/${props.book.id}`}>
            <div className="book-prev">
                <img src={props.book.thumbnail} />
                <h1>{props.book.title}</h1>
                <p>{props.book.subtitle}</p>
            </div>
        </Link>
    )
}