export default class NewMail extends React.Component {

    state = {
        mailContact: {
            to: '',
            from: '',
            subject: '',
            body: ''
        }
    }

    componentDidMount = () => {
        const mailContact = this.props.mailContact
        this.setState({ mailContact })
    }

    handleInput = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ mailContact: { ...prevState.mailContact, [field]: value } }))
    }

    onSendMailForm = (ev) => {
        ev.preventDefault()
        this.props.onSendMail(this.state.mailContact)
    }

    render() {
        return (
            <div className="new-mail flex">
                <div className="new-mail-head flex space-between">
                    <h2>Enter Your mail</h2>
                    <div className="new-mail-btn flex space-between">
                        <a onClick={() => { this.onSendMailForm(event) }}><img src="assets/icons/send.png" alt=""/></a>
                        <a onClick={this.props.onToggleNewMail}><img src="assets/icons/close.png" alt=""/></a>
                    </div>
                </div>
                <form action="">
                    <div className="new-mail-input flex">
                        <label htmlFor="">to:</label>
                        <input type="text" onChange={this.handleInput} value={this.state.mailContact.to} name="to" />
                    </div>
                    <div className="new-mail-input flex">
                        <label htmlFor="">from:</label>
                        <input type="text" onChange={this.handleInput} value={this.state.mailContact.from} name="from" />
                    </div>
                    <div className="new-mail-input flex">
                        <label htmlFor="">subject:</label>
                        <input type="text" onChange={this.handleInput} value={this.state.mailContact.subject} name="subject" />
                    </div>
                    <div className="new-mail-input-body flex">
                    <label htmlFor="">body:</label>
                    {/* <input type="text"  onChange={this.handleInput} value={this.state.mailContact.body} name="body" /> */}
                    <textarea name="" id="" cols="5" rows="15" onChange={this.handleInput} value={this.state.mailContact.body} name="body"></textarea>
                    </div>
                </form>
            </div >
        )
    }
}