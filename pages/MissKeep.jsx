import missKeepService from '../services/miss-keep-service.js'
import NoteSet from "../cmps/NoteSet.jsx"
import NotePrev from "../cmps/NotePrev.jsx"

export default class MissKeep extends React.Component {

    state = {
        pinnedNotes: null,
        unPinnedNotes: null,
        type: null,
        isPinned: false
    }

    componentDidMount() {
        this.notesToDisplay();
    }

    notesToDisplay = () => {
        const pinnedNotes = missKeepService.getNotes(true);
        const unPinnedNotes = missKeepService.getNotes(false);
        this.setState({ pinnedNotes, unPinnedNotes })
    }

    onSetNote = (ev, filed) => {
        ev.preventDefault();
        if (!this.state.type || this.state.type === 'text' ) this.setState({ type: 'text' }, () => {
            missKeepService.createTxt('text',this.state.isPinned,'im a new note','green')
            this.notesToDisplay()
        })
        else {
            console.log('this.state.type', this.state.type);
        }
    }

    onSetPin = () => {
        let isPinned = !this.state.isPinned
        this.setState({ isPinned })
    }

    onSetNoteType = (type) => {
        this.setState({ type })
    }

    render() {
        const pinnedNotes = this.state.pinnedNotes;
        const unPinnedNotes = this.state.unPinnedNotes;
        return (
            <section className="miss-keep">
                <NoteSet onSetNoteType={this.onSetNoteType} onSetNote={this.onSetNote}
                    onSetNote={this.onSetNote} onSetPin={this.onSetPin} />
                <div className="pinned grid">
                    {pinnedNotes && pinnedNotes.map((note, idx) => <NotePrev key={idx} note={note} />)}
                </div>
                <br />
                <div className="unPinned grid">
                    {unPinnedNotes && unPinnedNotes.map((note, idx) => <NotePrev key={idx} note={note} />)}
                </div>
            </section>
        )
    }
}