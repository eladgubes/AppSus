export default class NoteFilter extends React.Component {

    state = {
        noteSearchWord: ''
    }

    handleInput = ({ target }) => {
        const noteSearchWord = target.value;
        this.setState({noteSearchWord})
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.noteSearchWord)
    }

    render() {
        return (
            <div className="note-search flex">
                <form action="">
                    <button className="dark-prime-bgc" onClick={() => { this.onSubmit(event)}}>Submit</button>
                    <input type="text" onChange={this.handleInput} value={this.state.noteSearchWord} name="noteSearchWord" />
                </form>
            </div>
        )
    }
}