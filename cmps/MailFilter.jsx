export default class MailFilter extends React.Component {

    state = {
        filter: {
            mailSearchWord: '',
            mailCategory: ''
        }
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }))
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)

    }

    render() {
        const mailSearchWord = this.state.filter.mailSearchWord
        return (
            <div className="mail-search flex">
                <form action="">
                    <button onClick={() => { this.onSubmit(event)}}>Submit</button>
                    <input type="text" onChange={this.handleInput} value={mailSearchWord} name="mailSearchWord" />
                    <select name="" id="" onChange={this.handleInput} name="mailCategory">
                        <option value="all">all</option>
                        <option value="Mark">Mark</option>
                        <option value="UnMark">UnMark</option>
                    </select>
                </form>
            </div>
        )
    }
}