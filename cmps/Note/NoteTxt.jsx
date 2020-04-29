const {Link} = ReactRouterDOM
import NoteTools from './NoteTools.jsx'
export default class NoteTxt extends React.Component {

    state = {
        isShow: 'hide',
        id: null,
        color: null,
        filed: {
            inputTitle: '',
            inputNote: ''
        },
    }

    componentDidMount() {
        const color = this.props.note.style.backgroundColor;
        const id = this.props.note.id
        const inputTitle = this.props.note.content.title
        const inputNote = this.props.note.content.txt
        const filed = {inputTitle , inputNote}
        console.log(inputNote,inputTitle);
        
        this.setState({ color, id, filed })
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }), () => {
            this.editNote()
        })
    }

    editNote() {
        this.props.onNoteEdit(this.state.id, 'title', this.state.filed.inputTitle, 'txt', this.state.filed.inputNote)
    }

    onOpenInput = () => {
        if (this.state.isShow === 'hide') this.setState({ isShow: '' })
    }

    onCloseInput = () => {
        this.setState({ isShow: 'hide' })
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{ backgroundColor: this.props.note.style.backgroundColor }}>
                <div>
                    <h1>{this.props.note.content.title}</h1>
                    <p>{this.props.note.content.txt}</p>
                </div>
                <div className={`note-edit ${this.state.isShow}`}>
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder="Note" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button onClick={this.onCloseInput}>Close</button>
                </div>
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
                <button onClick={this.onOpenInput}>Edit</button>
                <Link to={`/mail?title=${this.state.filed.inputTitle}&text=${this.state.filed.inputNote}`}>Send as mail</Link>
            </div>
        )
    }
}