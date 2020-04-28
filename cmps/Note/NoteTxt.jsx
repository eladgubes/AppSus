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
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }),()=>{
            this.editNote()
        })
    }

    editNote(){
        this.props.onNoteEdit(this.state.id,'title', this.state.filed.inputTitle,'txt', this.state.filed.inputNote)
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{backgroundColor: this.props.note.style.backgroundColor}}>
                <div>
                    <h1>{this.props.note.content.title}</h1>
                    <p>{this.props.note.content.txt}</p>
                </div>
                <div className="note-edit-input">
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder="Note" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                </div>
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} onSetPin={this.props.onSetPin} onSetNoteType={this.props.onSetNoteType} />
            </div>
        )
    }
}