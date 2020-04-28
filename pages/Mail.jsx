import MailList from "../cmps/MailList.jsx"
import MailFilter from "../cmps/MailFilter.jsx"
import NewMail from "../cmps/NewMail.jsx"
import mailService from "../services/mailService.js"



export default class Mail extends React.Component {

    state = {
        mailBox: 'inbox',
        readCount: null,
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
        this.ReadCount()
    }

    loadMails = () => {
        mailService.getMailsForDisplay(this.state.mailBox)
            .then(mails => this.setState({ mails }))

    }

    onSetFilter = (filter) => {
        mailService.filterMail(filter)
            .then(mails => this.setState({ mails }))

    }
    onUnReadToggle = (mailId) => {
        // ev.stopPropagation()
        // ev.preventDefault()
        mailService.unReadToggle(mailId)
        this.loadMails()
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

    noRemoveMail = (mailId) => {
        mailService.removeMail(mailId)
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
        this.setState({ isNewMail: true })
    }

    showDateStr = (description) => {
        return mailService.getDateStr(description)
    }

    ReadCount = () => {
        mailService.getReadCount()
            .then(readCount => this.setState({ readCount }))
    }

    onChangeMailBox = (mailBox) => {
        this.setState({ mailBox }, () => this.loadMails())
    }

    onStarToggle = (mailId) => {
        mailService.starToggle(mailId);
        this.loadMails()
    }

    render() {
        return (
            <section className="mail-section flex">
                <div className="mail-filter">
                    {this.state.isNewMail && <NewMail onToggleNewMail={this.onToggleNewMail}
                        onSendMail={this.onSendMail} mailContact={this.state.mailContact} />}
                    <MailFilter onSetFilter={this.onSetFilter} />
                </div>
                <div className="mail-container flex">
                    <div className="mail-control flex ">
                        <button onClick={this.onToggleNewMail}>New Mail</button>
                        <ul className="mail-nav clean-list">
                            <li onClick={() => this.onChangeMailBox('inbox')}>inbox</li>
                            <li onClick={() => this.onChangeMailBox('sent')}>sent</li>
                            <li onClick={() => this.onChangeMailBox('starred')}>starred</li>
                        </ul>
                        <h3>{this.state.readCount}% unread</h3>
                    </div>
                    <div className="mail-box">
                        <table className="mails-table">
                            <thead>
                                <tr>
                                    <th onClick={() => { this.onSortByText('from') }}>from</th>
                                    <th colSpan="2" onClick={() => { this.onSortByText('subject') }}>contact</th>
                                    <th onClick={() => { this.onSortByNumber('sentAt') }}>time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.mails && this.state.mails.map((mail, idx) =>
                                    <MailList key={idx} mail={mail} onUnReadToggle={this.onUnReadToggle}
                                        noRemoveMail={this.noRemoveMail} onReplyMail={this.onReplyMail}
                                        showDateStr={this.showDateStr} onStarToggle={this.onStarToggle} />)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}