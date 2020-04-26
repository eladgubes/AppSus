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
        this.setState(prevState => ({ review: { ...prevState.filter, [field]: value } }))
    }

    // onSubmit = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetReview(this.state.review)

    // }

    render() {
        const mailSearchWord =  this.state.filter.mailSearchWord
        return (
            <div className="mail-search flex">
                <form action="">
                    <button>Submit</button>
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