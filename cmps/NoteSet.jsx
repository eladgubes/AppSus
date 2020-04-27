import NoteTools from "../cmps/NoteTools.jsx"
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
                <NoteTools onSetPin={this.props.onSetPin} onSetNoteType={this.props.onSetNoteType}/>
            </div>
        )
    }
}