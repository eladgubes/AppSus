import MailList from "../cmps/MailList.jsx"
import MailFilter from "../cmps/MailFilter.jsx"
import NewMail from "../cmps/NewMail.jsx"
import mailService from "../services/mailService.js"



export default class Mail extends React.Component {

    state = {
        mails: null,
        isNewMail: false,
        mailContact: {
            from: '',
            subject: '',
            body: ''
        }

    }

    componentDidMount = () => {
        this.loadMails()
    }

    loadMails = () => {
        var mails = mailService.getMails()
        this.setState({ mails })
    }

    onSetFilter = (filter) => {
        const mails = mailService.filterMail(filter)
        this.setState({ mails })

    }
    unReadToggle = (ev) => {
        ev.preventDefault()
        //todo - prevent open mail

    }

    onToggleNewMail = () => {
        const isNewMail = !this.state.isNewMail
        this.setState({ isNewMail })
    }
    onSendMail = (mailContact) => {
        this.onToggleNewMail()
        mailService.sendMail(mailContact)
        this.loadMails()
    }

    noRemoveMail = (MailId) => {
        mailService.removeMail(MailId)
        this.loadMails()
    }

    onSortByText = (key) => {
        mailService.sortByText(key)
        this.loadMails()
    }

    onSortByNumber = (key) => {
        mailService.sortByNumber(key)
        this.loadMails()
    }

    onReplyMail = (key, mailContact) => {
        const from = (key === 'answer') ? mailContact.from : ''
        const subject = (key === 'answer') ? 'Re:' + mailContact.subject : 'Fw:' + mailContact.subject
        const body = mailContact.body
        this.setState({ mailContact: { from, subject, body } })
        this.setState({isNewMail: true})
    }


    render() {
        return (
            <section>
                {this.state.isNewMail && <NewMail onToggleNewMail={this.onOpenNewMail}
                    onSendMail={this.onSendMail} mailContact={this.state.mailContact} />}
                <MailFilter onSetFilter={this.onSetFilter} />
                <div className="flex">
                    <div className="mail-control">
                        <button onClick={this.onToggleNewMail}>New Mail</button>
                        <ul className="mail-nav">
                            <li>inbox</li>
                            <li>starred</li>
                            <li>sent</li>
                        </ul>
                        <h3>read/unread</h3>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => { this.onSortByText('from') }}>from</th>
                                <th colSpan="2" onClick={() => { this.onSortByText('subject') }}>contact</th>
                                <th onClick={() => { this.onSortByNumber('sentAt') }}>time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mails && this.state.mails.map((mail, idx) =>
                                <MailList key={idx} mail={mail} unReadToggle={this.unReadToggle}
                                    noRemoveMail={this.noRemoveMail} onReplyMail={this.onReplyMail} />)}
                        </tbody>
                    </table>
                </div>

            </section>
        )
    }
}