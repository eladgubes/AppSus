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
                    <a onClick={() => { this.onSubmit(event)}}className="search-mail"><img src="/assets/icons/search.png" alt=""/></a>
                    <input type="text" onChange={this.handleInput} value={mailSearchWord} name="mailSearchWord" />
                    <select name="" id="" onChange={this.handleInput} name="mailCategory">
                        <option value="all">all</option>
                        <option value="Read">Read</option>
                        <option value="UnRead">UnRead</option>
                    </select>
                </form>
            </div>
        )
    }
}