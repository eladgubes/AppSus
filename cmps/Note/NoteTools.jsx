export default class NoteTools extends React.Component {

    state = {
        color: '#555555'
    }

    componentDidMount(){
        this.setState({color: this.props.note.style.backgroundColor})
    }

    render() {
        return (
            <div className="note-tools">
                {/* <button onClick={() => this.props.onEditPin(this.props.note.id)}>Pin</button> */}
                <button onClick={() => this.props.onEditPin(this.props.note.id)}>Pin</button>
                <button onClick={() => this.props.onRemoveNote(this.props.note.id)}>X</button>
                <select onChange={() => this.props.setNoteColor(event, this.props.note.id)} name="" id="">
                    <option style={{backgroundColor: '#0000ff'}} value="#0000ff"></option>
                    <option style={{backgroundColor: '#ff0000'}} value="#ff0000"></option>
                    <option style={{backgroundColor: '#008000'}} value="#008000"></option>
                    <option style={{backgroundColor: '#ffff00'}} value="#ffff00"></option>
                    <option style={{backgroundColor: '#ffa500'}} value="#ffa500"></option>
                </select>
            </div>
        )
    }
}