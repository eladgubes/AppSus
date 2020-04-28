
import MailPrev from "./MailPrev.jsx"


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
        if (!this.props.mail.isRead) this.setState({ read: 'unread' })
        else if (this.props.mail.isRead) this.setState({ read: '' })

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
        const readClass = (mail.isRead) ? '' : 'unread'
        return (
            <React.Fragment>
                <tr onClick={() => { this.expandRow(event) }} className={`${readClass}`} >
                    <td>{mail.from}</td>
                    <td>{mail.subject}</td>
                    <td>{mail.body}</td>
                    <td>{this.state.dateDescription}</td>
                    <td><button onClick={(event) => this.props.onUnReadToggle(mail.id, event)}>read/unread</button></td>
                    <td><button onClick={(event) => this.props.onStarToggle(mail.id, event)}>star</button></td>
                </tr>
                <tr hidden={!this.state.isExpanded}>
                    <MailPrev mail={mail} onRemoveMail={this.props.onRemoveMail} mailContact={this.state.mailContact}
                   onReplyMail= {this.props.onReplyMail} />
                </tr>
            </React.Fragment>
        )
    }
}