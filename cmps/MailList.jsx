
import MailPrev from "./MailPrev.jsx"

// mail-prev

export default class MailList extends React.Component {
    state = {
        read: '',
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
        this.checkRead()

    }

    checkRead = () => {
        if(!this.props.mail.isRead) this.setState({read:'unread'})
    }

    getDateDescription = () => {
        let dateDescription = this.props.mail.sentAt
        this.props.showDateStr(dateDescription)
            .then(dateDescription => this.setState({ dateDescription }))
    }

    setContact = () => {
        const from = this.props.mail.from
        const subject = this.props.mail.subject
        const body = this.props.mail.body
        this.setState({ mailContact: { from, subject, body } })
    }

    expandRow = (ev) => {
        // ev.stopPropagation()
        ev.preventDefault()
        const isExpanded = !this.state.isExpanded
        this.setState({ isExpanded })
    }


    render() {
        const { mail } = this.props
        return (
            <React.Fragment>
                <tr onClick={() => { this.expandRow(event) }} className={this.state.read}>
                    <td>{mail.from}</td>
                    <td>{mail.subject}</td>
                    <td>{mail.body}</td>
                    <td>{this.state.dateDescription}</td>
                    <td><button onClick={() => this.props.onUnReadToggle(mail.id)}>read/unread</button></td>
                    <td><button onClick={() => this.props.onStarToggle(mail.id)}>star</button></td>
                </tr>
                <tr hidden={!this.state.isExpanded}>
                    {/* <MailPrev/> */}
                    <td colSpan="5">
                        <h2>from: {mail.from}</h2>
                        <h3>subject: {mail.subject}</h3>
                        <p>body: {mail.body}</p>
                        <button onClick={() => this.props.noRemoveMail(mail.id)}>delete</button>
                        <button onClick={() => this.props.onReplyMail('froward', this.state.mailContact)}>froward</button>
                        <button onClick={() => this.props.onReplyMail('answer', this.state.mailContact)}>answer</button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}