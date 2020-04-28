import NoteTools from './NoteTools.jsx'
export default class NoteImg extends React.Component {

    state = {
        id: null,
        color: null,
        url: null,
        input: null
    }

    componentDidMount() {
        const color = this.props.note.style.backgroundColor;
        const id = this.props.note.id
        const input = this.props.note.content.title;
        const url = this.props.note.content.url;
        this.setState({ id, color, url, input })
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{ backgroundColor: this.props.note.style.backgroundColor }}>
                <h1>{this.props.note.content.title}</h1>
                <img src={this.props.note.content.url} alt="" />
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                    onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
            </div>
        )
    }
}