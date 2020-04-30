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
                <button onClick={() => this.props.onEditPin(this.props.note.id)}>Pin</button>
                <button onClick={() => this.props.onRemoveNote(this.props.note.id)}>X</button>
                <select onChange={() => this.props.setNoteColor(event, this.props.note.id)} name="" id="">
                    <option style={{backgroundColor: '#ffa1c5'}} value="#ffa1c5"></option>
                    <option style={{backgroundColor: '#a1a4ff'}} value="#a1a4ff"></option>
                    <option style={{backgroundColor: '#76f57c'}} value="#76f57c"></option>
                    <option style={{backgroundColor: '#eaf576'}} value="#eaf576"></option>
                    <option style={{backgroundColor: '#f57e76'}} value="#f57e76"></option>
                </select>
            </div>
        )
    }
}