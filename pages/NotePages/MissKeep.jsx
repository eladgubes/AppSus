import noteService from '../../services/noteServices/noteService.js'
import AddNote from "../../cmps/Note/AddNote.jsx"
import NotePrev from "../../cmps/Note/NotePrev.jsx"
import NoteFilter from "../../cmps/Note/NoteFilter.jsx"

export default class MissKeep extends React.Component {

    state = {
        isMailToNote: false, 
        mailUrl: '',
        notes: null,
        type: null,
        isPinned: false,
        url: '',
        color: null,
        title: '',
        field: null
    }

    componentDidMount() {
        this.notesToDisplay();
    }
    
    componentDidUpdate(prevProps){
        this.createNewNoteFromMail(prevProps)
    }

    createNewNoteFromMail = (prevProps) => {
        if(this.state.isMailToNote) return
        if(prevProps.location.search === '' || !prevProps.location.search || prevProps.location.search === ' ')return
        this.setState({isMailToNote: true})
        const t = prevProps.location.search.split('=')
        console.log('i',t);
        let title = t[1].split('&')
        const text = t[2]
        title = title[0]
        noteService.createTxt('text',true,text,title)
    }

    onNoteEdit = (id, title, inputTitle, txt, inputNote) => {
        noteService.editNoteInContent(id, title, inputTitle)
        noteService.editNoteInContent(id, txt, inputNote)
        this.notesToDisplay();
    }

    notesToDisplay = () => {
        noteService.getNotes()
            .then(res => this.setState({ notes: res }))
            .catch(console.log('Err!: notesToDisplay didn\'t got gNotes'))
    }

    onSetNote = (ev, field) => {
        ev.preventDefault();
        if (!this.state.type || this.state.type === 'text') this.setState({ type: 'text',field }, () => {
            noteService.createTxt('text', this.state.isPinned, this.state.field.inputNote, this.state.field.inputTitle, this.state.color)
            this.notesToDisplay()
        })
        else if (this.state.type === 'img') this.setState({ type: 'img',field }, () => {
            noteService.createImg('img', this.state.isPinned, this.state.field.inputNote, this.state.field.inputTitle, this.state.color)
            this.notesToDisplay()
        })
        else if (this.state.type === 'todos') this.setState({ type: 'todos',field }, () => {
            noteService.createTodo('todos', this.state.isPinned, this.state.field.inputNote, this.state.field.inputTitle, this.state.color)
            this.notesToDisplay()
        })
        this.notesToDisplay();
    }

    onSetPin = () => {
        let isPinned = !this.state.isPinned
        this.notesToDisplay()
        this.setState({ isPinned })
    }

    onEditPin = (id) => {
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

    onSetColor = ({ target }) => {
        this.setState({ color: target.value })
    }

    onSetFilter = (noteSearchWord) => {
        const notes = noteService.filterNotes(noteSearchWord)
        this.setState({ notes })
    }

    onSetTodo = (id, inputNote, key, inputTitle) => {
        noteService.setTodo(id, inputNote)
        noteService.editNoteInContent(id, key, inputTitle)
        this.notesToDisplay()
    }

    onSetUrl = (id, inputNote, inputTitle) => {
        noteService.editNoteInContent(id, 'url', inputNote)
        noteService.editNoteInContent(id, 'title', inputTitle)
        this.notesToDisplay()
    }

    setNoteColor = (ev, id) => {
        const color = ev.target.value;
        noteService.setBackgroundColor(id, color)
        this.notesToDisplay()
    }

    onToggleTodoState = (timeStamp) => {
        noteService.toggleTodo(timeStamp)
        this.notesToDisplay()
    }

    render() {
        const notes = this.state.notes
        return (
            <section className="miss-keep flex">
                <NoteFilter onSetFilter={this.onSetFilter} />
                <AddNote onSetColor={this.onSetColor} onSetNoteType={this.onSetNoteType} onSetTodo={this.onSetTodo}
                    onSetNote={this.onSetNote} onSetPin={this.onSetPin} />
                <div className="pinned flex">
                    {notes && notes.map((note) => {
                        if (note.isPinned) return <NotePrev key={note.id} note={note} onNoteEdit={this.onNoteEdit}
                            setNoteColor={this.setNoteColor} onSetNoteType={this.onSetNoteType} onSetTodo={this.onSetTodo}
                            onSetNote={this.onSetNote} onEditPin={this.onEditPin} onRemoveNote={this.onRemoveNote} 
                            onToggleTodoState={this.onToggleTodoState} onSetUrl={this.onSetUrl}/>

                    })}
                </div>
                <br />
                <div className="unPinned grid">
                    {notes && notes.map((note) => {
                        if (!note.isPinned) return <NotePrev key={note.id} note={note} onNoteEdit={this.onNoteEdit}
                            setNoteColor={this.setNoteColor} onSetNoteType={this.onSetNoteType} onSetTodo={this.onSetTodo}
                            onSetNote={this.onSetNote} onEditPin={this.onEditPin} onRemoveNote={this.onRemoveNote} 
                            onToggleTodoState={this.onToggleTodoState} onSetUrl={this.onSetUrl}/>
                    })}
                </div>
            </section>
        )
    }
}