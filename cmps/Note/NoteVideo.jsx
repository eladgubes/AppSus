import NoteTools from './NoteTools.jsx'
export default class NoteVideo extends React.Component {

    state = {
        id: null,
        color: null,
        url: null,
        input: null
    }

    componentDidMount() {
        const id = this.props.note.id
        const color = this.props.note.style.backgroundColor;
        const url = this.props.note.content.videoUrl;
        console.log('url', url);
        const input = this.props.note.content.title;
        this.setState({ id, color, url, input })
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{ backgroundColor: this.props.note.style.backgroundColor }}>
                <h1>{this.props.note.content.title}</h1>
                <div className="video">
                    <iframe width="560" height="315" src={`${this.props.note.content.videoUrl}`}
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
                <NoteTools setNoteColor={this.props.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                    onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
            </div >
        )
    }
}