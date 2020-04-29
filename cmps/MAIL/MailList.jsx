
import MailPrev from "./MailPrev.jsx"


export default class MailList extends React.Component {
    state = {
        isSentBox: false,
        isExpanded: false,
        dateDescription: '',
        mailContact: {
            from: '',
            subject: '',
            body: ''
        }
    }

    componentDidMount() {
        this.checkMailBox()
        this.getDateDescription()
        this.setContact()
        console.log(this.state.mail);
        
    }

    checkMailBox = () => {
        const mailBox = this.props.mailBox
        if (this.props.mailBox === 'sent')
            this.setState({ isSentBox: true })
       

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
        console.log(from, subject, body );
    }

    expandRow = (ev) => {
        console.log(ev);

        ev.preventDefault()
        const isExpanded = !this.state.isExpanded
        this.setState({ isExpanded })
    }


    render() {
        const { mail } = this.props
        const favoriteImg = (mail.isStarred)?'/assets/icons/full-heart.png' : '/assets/icons/heart.png'
        const readImg = (mail.isRead)?'/assets/icons/read.png' : '/assets/icons/unread.png'
        const readClass = (mail.isRead && !this.state.isSentBox) ? '' : 'unread'
        return (
            <React.Fragment>
                <tr className="mail-list" onClick={() => { this.expandRow(event), this.props.onReadMail(mail.id) }} className={`${readClass}`} >
                    <td>{mail.to}</td>
                    <td>{mail.from}</td>
                    <td>{mail.subject}</td>
                    <td>{mail.body}</td>
                    <td>{this.state.dateDescription}</td>
                    {!this.state.isSentBox && <td><a onClick={(event) => this.props.onUnReadToggle(mail.id, event)}><img src={readImg}/></a></td>}
                    <td><a  onClick={(event) => this.props.onStarToggle(mail.id, event)}><img src={favoriteImg}/></a></td>
                </tr>
                <tr hidden={!this.state.isExpanded}>
                    <MailPrev mail={mail} onRemoveMail={this.props.onRemoveMail} mailContact={this.state.mailContact}
                        onReplyMail={this.props.onReplyMail} onSaveAsNote={this.props.onSaveAsNote} />
                </tr>
            </React.Fragment>
        )
    }
}