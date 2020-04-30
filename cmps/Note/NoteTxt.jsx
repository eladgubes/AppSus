const { Link } = ReactRouterDOM
import NoteTools from './NoteTools.jsx'
export default class NoteTxt extends React.Component {

    state = {
        isEditShow: 'hide',
        isButtonShow: '',
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
        const filed = { inputTitle, inputNote }
        console.log(inputNote, inputTitle);

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
        if (this.state.isEditShow === 'hide') this.setState({ isEditShow: '' })
        this.setState({ isButtonShow: 'hide' })
    }
    
    onCloseInput = () => {
        if (this.state.isButtonShow === 'hide') this.setState({ isButtonShow: '' })
        this.setState({ isEditShow: 'hide' })
    }

    render() {
        return (
            <div className="note-txt" style={{ backgroundColor: this.props.note.style.backgroundColor }}>
                <div className="note-content">
                    <h1>{this.props.note.content.title}</h1>
                    <p>{this.props.note.content.text}</p>
                </div>
                <div className={`note-edit ${this.state.isEditShow}`}>
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder="Note" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button className="note-close-edit-button" onClick={this.onCloseInput}>Close</button>
                </div>
                <button className={`note-edit-button ${this.state.isButtonShow}`} onClick={this.onOpenInput}>Edit</button>
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                    onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
                <Link to={`/mail?title=${this.state.filed.inputTitle}&text=${this.state.filed.inputNote}`}>Send as mail</Link>
            </div>
        )
    }
}