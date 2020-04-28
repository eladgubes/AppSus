import noteService from '../../services/noteServices/noteService.js'
import NoteTools from './NoteTools.jsx'
export default class NoteTxt extends React.Component {

    state = {
        id: null,
        color: null,
        filed: {
            inputTitle: '',
            inputNote: ''
        },
    }

    componentDidMount(){
        const color = this.props.note.style.backgroundColor;
        const id = this.props.note.id
        this.setState({color,id})
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }))
        this.onNoteEdit()
    }

    setNoteColor = (ev) => {
        const color = ev.target;
        noteService.editNote(this.state.id, style.backgroundColor, color)
        setState({color})
    }

    onNoteEdit = () => {
        // this.props.note.content.title = this.state.filed.inputTitle
        // this.props.note.content.txt = this.state.filed.inputNote
        // noteService.editNote(this.props.note)

        noteService.editNoteInContent(this.state.id,title, this.state.filed.inputTitle)
        noteService.editNoteInContent(this.state.id,txt, this.state.filed.inputNote)
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{backgroundColor: this.state.color}}>
                <div>
                    <h1>{this.props.note.content.title}</h1>
                    <p>{this.props.note.content.txt}</p>
                </div>
                <div className="note-edit-input">
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder="Note" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                </div>
                <NoteTools setNoteColor={this.setNoteColor} note={this.props.note} onSetPin={this.props.onSetPin} onSetNoteType={this.props.onSetNoteType} />
            </div>
        )
    }
}