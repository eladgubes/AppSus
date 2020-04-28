export default class NoteSet extends React.Component  {
    
        state = {
            filed: {
                inputTitle: '',
                inputNote: ''
            }
        }
    
    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }))
    }



    render(){
        return (
            <div className="note-inputs">
                <form action="">
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder="Note" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button onClick={() => this.props.onSetNote(event,this.state.filed)}>Create</button>
                </form>
                <div className="note-tools">
                <button onClick={() => this.props.onSetPin()}>Pin</button>
                <button onClick={() => this.props.onSetNoteType('text')}>text</button>
                <button onClick={() => this.props.onSetNoteType('img')}>img</button>
                <button onClick={() => this.props.onSetNoteType('todos')}>todos</button>
                <select onChange={() => this.props.onSetColor(event)} name="" id="">
                    <option style={{backgroundColor: '#0000ff'}} value="#0000ff"></option>
                    <option style={{backgroundColor: '#ff0000'}} value="#ff0000"></option>
                    <option style={{backgroundColor: '#008000'}} value="#008000"></option>
                    <option style={{backgroundColor: '#ffff00'}} value="#ffff00"></option>
                    <option style={{backgroundColor: '#ffa500'}} value="#ffa500"></option>
                </select>
            </div>
            </div>
        )
    }
}