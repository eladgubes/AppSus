import missKeepService from '../services/miss-keep-service.js'
import NotePrev from "../cmps/NotePrev.jsx"

export default class MissKeep extends React.Component {

    state = {
        pinnedNotes: null,
        unPinnedNotes: null
    }

    componentDidMount() {
        this.notesToDisplay()
    }

    notesToDisplay = () => {
        const pinnedNotes = missKeepService.getNotes(true);
        const unPinnedNotes = missKeepService.getNotes(false);
        console.log('pinnedNotes',pinnedNotes);
        console.log('unPinnedNotes',unPinnedNotes);
        this.setState({pinnedNotes , unPinnedNotes })
    }

    render() {
        const pinnedNotes = this.state.pinnedNotes;
        const unPinnedNotes = this.state.unPinnedNotes;
        return (
            <section className="miss-keep">
                <div className="pinned grid">
                    {pinnedNotes && pinnedNotes.map((note, idx) => <NotePrev key={idx} note={note} />)}
                </div>
                <br/>
                <div className="unPinned grid">
                    {unPinnedNotes && unPinnedNotes.map((note, idx) => <NotePrev key={idx} note={note} />)}
                </div>
            </section>
        )
    }
}