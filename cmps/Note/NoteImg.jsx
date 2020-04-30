import NoteTools from './NoteTools.jsx'
export default class NoteImg extends React.Component {

    state = {
        isShow: 'hide',
        filed: {
            inputTitle: '',
            inputNote: ''
        }
    }

    componentDidMount() {
        const inputTitle = this.props.note.content.title
        let inputNote = this.props.note.content.url
        if (!inputNote) inputNote = ''
        let filed = { inputTitle, inputNote }
        this.setState({ filed })
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filed: { ...prevState.filed, [field]: value } }))
    }

    onOpenInput = () => {
        if (this.state.isShow === 'hide') this.setState({ isShow: '' })
    }

    onCloseInput = () => {
        this.setState({ isShow: 'hide' })
    }

    render() {
        return (
            <div className="note-txt" style={{ backgroundColor: this.props.note.style.backgroundColor }}>
                <div className="note-content">
                    <h1>{this.props.note.content.title}</h1>
                </div>
                <img src={this.props.note.content.url} alt="" />
                {/* <div className={`note-edit ${this.state.isShow}`}>
                    <input type="text" placeholder="Title" onChange={this.handleInput} value={this.state.filed.inputTitle} name="inputTitle" />
                    <input type="text" placeholder="url" onChange={this.handleInput} value={this.state.filed.inputNote} name="inputNote" />
                    <button onClick={() => this.props.onSetUrl(this.props.note.id, this.state.filed.inputNote, this.state.filed.inputTitle)}>OK</button>
                    <button onClick={this.onCloseInput}>Close</button>
                </div> */}
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                    onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
                {/* <button onClick={this.onOpenInput}>Edit</button> */}
            </div>
        )
    }
}