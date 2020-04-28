import noteService from '../../services/noteServices/noteService.js'
import AddNote from "../../cmps/Note/AddNote.jsx"
import NotePrev from "../../cmps/Note/NotePrev.jsx"
import NoteFilter from "../../cmps/Note/NoteFilter.jsx"

export default class MissKeep extends React.Component {

    state = {
        notes: null,
        type: null,
        isPinned: false,
        url: '',
        color: null,
        title: ''
    }

    componentDidMount() {
        this.notesToDisplay();
    }

    notesToDisplay = () => {
        noteService.getNotes()
            .then(res => this.setState({ notes: res }))
            .catch(console.log('Err!: notesToDisplay didn\'t got gNotes'))
    }

    onSetNote = (ev) => {
        ev.preventDefault();
        if (!this.state.type || this.state.type === 'text') this.setState({ type: 'text' }, () => {
            noteService.createTxt('text', this.state.isPinned,'im a new note', 'im a new note', this.state.color)
            this.notesToDisplay()
        })
        else if (this.state.type === 'img') this.setState({ type: 'img' }, () => {
            noteService.createImg('img', this.state.isPinned, this.state.url, this.state.title, this.state.color)
            this.notesToDisplay()
        })
        else if (this.state.type === 'todos') this.setState({ type: 'todos' }, () => {
            noteService.createTodo('todos', this.state.isPinned, this.state.title, ['nothing on mind'], this.state.color)
            this.notesToDisplay()
        })
    }

    onSetPin = () => {
        let isPinned = !this.state.isPinned
        // noteService.editNote(id, 'id', isPinned)   ***// moved to onEditPin()
        this.notesToDisplay()
        this.setState({ isPinned })
    }
    
    // new function
    onEditPin = (id) => {
        // noteService.editNote(id, 'isPinned', !isPinned)
        noteService.togglePin(id)
        this.notesToDisplay()
    }

    onRemoveNote = (id) => {
        noteService.removeNote(id)
        this.notesToDisplay()
    }

    onSetNoteType = (type) => {
        this.setState({ type })
    }

    onSetColor = ({target}) => {
            this.setState({ color: target.value })
    }

    onSetFilter = (noteSearchWord) => {
        const notes = noteService.filterNotes(noteSearchWord)
        this.setState({ notes })
    }

    render() {
        const notes = this.state.notes
        return (
            <section className="miss-keep">
                <NoteFilter onSetFilter={this.onSetFilter}/>
                <AddNote onSetColor={this.onSetColor} onSetNoteType={this.onSetNoteType} 
                onSetNote={this.onSetNote} onSetPin={this.onSetPin} />
                <div className="pinned grid">
                    {/* check if the note is pinned in the map */}
                    {notes && notes.map((note) => {
                        if (note.isPinned) return <NotePrev key={note.id} note={note} 
                        onSetColor={this.onSetColor} onSetNoteType={this.onSetNoteType} 
                        onSetNote={this.onSetNote} onEditPin={this.onEditPin} onRemoveNote={this.onRemoveNote}/>

                    })}
                </div>
                <br />
                <div className="unPinned grid">
                    {/* check if the note is not pinned in the map */}
                    {notes && notes.map((note) => {
                        if (!note.isPinned) return <NotePrev key={note.id} note={note} 
                        onSetColor={this.onSetColor} onSetNoteType={this.onSetNoteType} 
                        onSetNote={this.onSetNote} onEditPin={this.onEditPin} onRemoveNote={this.onRemoveNote}/>
                    })}
                </div>
            </section>
        )
    }
}