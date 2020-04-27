

// mail-prev

export default class MailList extends React.Component {
    state = {
        isExpanded: false,
        dateDescription: '',
        mailContact: {
            from: '',
            subject: '',
            body: ''
        }
    }

    componentDidMount() {
        this.getDateDescription()
        this.setContact()

    }

    getDateDescription = () => {
        const dateDescription = this.props.mail.sentAt
    }

    setContact = () => {
        const from = this.props.mail.from
        const subject = this.props.mail.subject
        const body = this.props.mail.body
        this.setState({ mailContact: { from, subject, body } })
    }


    render() {
        const { mail } = this.props
        return (
            <React.Fragment>
                <tr onClick={() => {
                    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }))
                }}>
                    <td>{mail.from}</td>
                    <td>{mail.subject}</td>
                    <td>{mail.body}</td>
                    <td>{mail.sentAt}</td>
                    <td><button onClick={() => this.props.unReadToggle(event)}>read/unread</button></td>
                </tr>
                <tr hidden={!this.state.isExpanded}>
                    <td colSpan="5">
                        <h2>from: {mail.from}</h2>
                        <h3>subject: {mail.subject}</h3>
                        <p>body: {mail.body}</p>
                        <button onClick={() => this.props.noRemoveMail(mail.id)}>delete</button>
                        <button onClick={()=> this.props.onReplyMail('froward',this.state.mailContact)}>froward</button>
                        <button onClick={()=> this.props.onReplyMail('answer',this.state.mailContact)}>answer</button>

                    </td>
                </tr>
            </React.Fragment>
        )
    }
}