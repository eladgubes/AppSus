export default class NoteSet extends React.Component {

    state = {
        placeHolder: 'Text',
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

    handleState = (type, placeHolder) => {
        this.props.onSetNoteType(type);
        this.setState(placeHolder);
    }

    onCreate = () => {
        this.props.onSetNote(event, this.state.filed);
    }

    render() {
        return (
            <div className="note-inputs flex">
                <form action="">
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder={this.state.placeHolder} onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button onClick={this.onCreate}>Create</button>
                </form>
                <div className="note-tools">
                    <button onClick={() => this.props.onSetPin()}>Pin</button>
                    <button onClick={() => this.handleState('text', { placeHolder: 'Text' })}>text</button>
                    <button onClick={() => this.handleState('img', { placeHolder: 'Img Url' })}>img</button>
                    <button onClick={() => this.handleState('todos', { placeHolder: 'Todo' })}>todos</button>
                    <button onClick={() => this.handleState('video', { placeHolder: 'Video Url' })}>Video</button>
                    <select onChange={() => this.props.onSetColor(event)} name="" id="">
                        <option style={{ backgroundColor: '#0000ff' }} value="#0000ff"></option>
                        <option style={{ backgroundColor: '#ff0000' }} value="#ff0000"></option>
                        <option style={{ backgroundColor: '#008000' }} value="#008000"></option>
                        <option style={{ backgroundColor: '#ffff00' }} value="#ffff00"></option>
                        <option style={{ backgroundColor: '#ffa500' }} value="#ffa500"></option>
                    </select>
                </div>
            </div>
        )
    }
}