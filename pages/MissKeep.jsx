import noteService from '../services/noteService.js'
import NoteSet from "../cmps/NoteSet.jsx"
import NotePrev from "../cmps/NotePrev.jsx"

export default class MissKeep extends React.Component {

    state = {
        notes: null,
        type: null,
        isPinned: false,
        url: null
    }

    componentDidMount() {
        this.notesToDisplay();
    }

    notesToDisplay = () => {
        noteService.getNotes()
            .then(res => this.setState({ notes: res }, () => { this.resetState() }))
            .catch(console.log('Err!: notesToDisplay didn\'t got gNotes'))
    }

    resetState = () => {
        this.state = {
            notes: null,
            type: null,
            isPinned: false,
            url: null
        }
    }

    onSetNote = (ev, filed) => {
        ev.preventDefault();
        if (!this.state.type || this.state.type === 'text') this.setState({ type: 'text' }, () => {
            noteService.createTxt('text', this.state.isPinned, 'im a new note', 'green')
            this.notesToDisplay()
        })
        else if (this.state.type === 'img') this.setState({ type: 'img' }, () => {
            noteService.createImg('img', this.state.isPinned, this.state.url)
            this.notesToDisplay()
        })
        else if (this.state.type === 'todos') this.setState({ type: 'todos' }, () => {
            noteService.createTodo('todos', this.state.isPinned, this.state.url)
            this.notesToDisplay()
        })
    }

    onSetPin = () => {
        let isPinned = !this.state.isPinned
        this.setState({ isPinned })
    }

    onSetNoteType = (type) => {
        this.setState({ type })
    }

    render() {
        const notes = this.state.notes
        return (
            <section className="miss-keep">
                {/* AddNote */}
                <NoteSet onSetNoteType={this.onSetNoteType} onSetNote={this.onSetNote} onSetPin={this.onSetPin} />
                <div className="pinned grid">
                    {/* check if the note is pinned in the map */}
                    {notes && notes.map((note, idx) => {
                        if (note.isPinned) return <NotePrev key={idx} note={note} />
                    })}
                </div>
                <br />
                <div className="unPinned grid">
                    {/* check if the note is not pinned in the map */}
                    {notes && notes.map((note, idx) => {
                        if (!note.isPinned) return <NotePrev key={idx} note={note} />
                    })}
                </div>
            </section>
        )
    }
}