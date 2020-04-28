import noteService from '../../services/noteServices/noteService.js'
import NoteTools from './NoteTools.jsx'
export default class NoteImg extends React.Component {

    state = {
        id: null,
        color: null,
        url: null,
        input: null
    }

    componentDidMount() {
        // if(!id){
            const color = this.props.note.style.backgroundColor;
            const id = this.props.note.id
            const input = this.props.note.content.title;
            const url = this.props.note.content.url;
        // }else{
        //     const color = this.props.note.style.backgroundColor;
        //     const id = this.props.note.id
        //     const input = this.props.note.content.title;
        //     const url = this.props.note.content.url;
        // }
        console.log('name',color, id, input, url);
        this.setState({ id, color, url, input })
    }

    setNoteColor = (ev) => {
        const color = ev.target.value;
        console.log('color', color);
        noteService.editNote(this.state.id, 'style', color)
        this.setState({ color })
    }

    render() {
        return (
            <div className="note-txt flex center-center" style={{ backgroundColor: this.state.color }}>
                <h1>{this.props.note.content.title}</h1>
                <img src={this.state.url} alt=""/>
                <NoteTools setNoteColor={this.setNoteColor} note={this.props.note} onRemoveNote={this.props.onRemoveNote}
                onEditPin={this.props.onEditPin} onSetNoteType={this.props.onSetNoteType} />
            </div>
        )
    }
}