import NoteTools from './NoteTools.jsx'
export default class NoteTxt extends React.Component {

    state = {
        isEditShow: 'hide',
        isButtonShow: '',
        // isShow: 'hide',
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

    // onOpenInput = () => {
    //     if(this.state.isShow === 'hide') this.setState({isShow: ''}) 
    // }

    // onCloseInput= () => {
    //     this.setState({isShow: 'hide'})
    // }

    
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
                    {this.props.note.content.todos.map((todo) => {
                        let todoState = (todo.isComplete) ? 'completed-todo' : 'uncompleted-todo'
                        return (
                                <p onClick={()=>{this.props.onToggleTodoState(todo.doneAt)}} key={todo.doneAt} className={`todo ${todoState}`}>{todo.txt}</p>
                        )
                    })}
                </div>
                <div className={`note-edit ${this.state.isEditShow}`}>
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input  type="text" placeholder="Todo" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button className="add-todo-button" onClick={()=> this.props.onSetTodo(this.props.note.id, this.state.filed.inputNote, 'title', this.state.filed.inputTitle)}>OK</button>
                    <button className="note-close-edit-button" onClick={this.onCloseInput}>Close</button>
                </div>
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} 
                onRemoveNote={this.props.onRemoveNote} onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType}
                onSetTodo={this.onSetTodo} />
                <button className={`note-edit-button ${this.state.isButtonShow}`} onClick={this.onOpenInput}>Edit</button>
                
            </div>
        )
    }
}