import NoteTools from './NoteTools.jsx'
export default class NoteTxt extends React.Component {

    state = {
        filed: {
            inputTitle: '',
            inputNote: ''
        }
    }

    componentDidMount(){
        const inputTitle = this.props.note.content.title
        let inputNote = this.props.note.content.txt
        if (!inputNote) inputNote = ''
        let filed = {inputTitle,inputNote}
        this.setState({ filed })
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }))
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{ backgroundColor: this.props.note.style.backgroundColor }}>
                <div>
                    <h1>{this.props.note.content.title}</h1>
                    {this.props.note.content.todos.map((todo) => {
                        let todoState = (todo.isComplete) ? 'completed-todo' : 'uncompleted-todo'
                        return (
                                <p onClick={()=>{this.props.onToggleTodoState(todo.doneAt)}} key={todo.doneAt} className={`todo ${todoState}`}>{todo.txt}</p>
                        )
                    })}
                </div>
                <div className="note-todo">
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input  type="text" placeholder="Todo" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button onClick={()=> this.props.onSetTodo(this.props.note.id, this.state.filed.inputNote, 'title', this.state.filed.inputTitle)}>OK</button>
                </div>
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} 
                onRemoveNote={this.props.onRemoveNote} onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType}
                onSetTodo={this.onSetTodo} />
                
            </div>
        )
    }
}