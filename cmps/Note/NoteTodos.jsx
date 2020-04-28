import noteService from '../../services/noteServices/noteService.js'
import NoteTools from './NoteTools.jsx'
export default class NoteTxt extends React.Component {

    state = {
        id: null,
        color: null,
        filed: {
            inputTitle: '',
            inputNote: ''
        }
    }

    componentDidMount(){
        const color = this.props.note.style.backgroundColor;
        const id = this.props.note.id
        const inputTitle = this.props.note.content.title
        let inputNote = this.props.note.content.txt
        if (!inputNote) inputNote = ''
        let filed = {inputTitle,inputNote}
        console.log('filed',filed);
        this.setState({ color, id, filed })
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }))
    }

    onSetTodo = () => {
        noteService.setTodo(this.state.id, this.state.filed.inputNote)
        noteService.editNoteInContent(this.state.id, 'title', this.state.filed.inputTitle)
        this.setState({inputTitle: this.state.filed.inputTitle})
    }

    setNoteColor = (ev) => {
        const color = ev.target.value;
        console.log('color', color);
        noteService.editNote(this.state.id, 'style', color)
        this.setState({ color })
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{ backgroundColor: this.state.color }}>
                <div>
                    <h1>{this.props.note.content.title}</h1>
                    {this.props.note.content.todos.map((todo,idx) => {
                        return (
                            <div key={idx} className={`todo todo${idx}`}>
                                <p >{todo.txt}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="note-todo">
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input  type="text" placeholder="Todo" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button onClick={this.onSetTodo}>OK</button>
                </div>
                <NoteTools setNoteColor={this.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
                
            </div>
        )
    }
}