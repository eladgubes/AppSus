export default class NewMail extends React.Component {

    state = {
        mailContact: {
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
            <div className="reviewModal">
                <button onClick={this.props.onToggleNewMail}>X</button>
                <h2>Enter Your mail</h2>
                <form action="">
                    <label htmlFor="">to</label>
                    <input type="text" onChange={this.handleInput} value={this.state.mailContact.from} name="from" />
                    <label htmlFor="">subject</label>
                    <input type="text" onChange={this.handleInput} value={this.state.mailContact.subject} name="subject" />
                    <label htmlFor="">body</label>
                    <input type="text" onChange={this.handleInput} value={this.state.mailContact.body} name="body" />
                    <button onClick={() => { this.onSendMailForm(event) }}>send</button>
                </form>
            </div>
        )
    }
}