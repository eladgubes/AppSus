import MailList from "../cmps/Mail/MailList.jsx"
import MailFilter from "../cmps/Mail/MailFilter.jsx"
import NewMail from "../cmps/Mail/NewMail.jsx"
import MailControl from "../cmps/Mail/MailControl.jsx"
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

    }

    loadMails = () => {
        mailService.getMailsForDisplay(this.state.mailBox)
            .then(mails => this.setState({ mails }))
        this.ReadCount()
    }

    onSetFilter = (filter) => {
        mailService.filterMail(filter)
            .then(mails => this.setState({ mails }))

    }
    onUnReadToggle = (mailId, ev) => {
        ev.stopPropagation()
        mailService.unReadToggle(mailId)
            .then(mail => this.loadMails())
    }

    onReadMail = (mailId) => {
        mailService.readMail(mailId)
        this.loadMails
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

    onRemoveMail = (mailId) => {
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
        // this.setState({ mailBox })
        // this.loadMails()
        console.log(this.state.mailBox);

    }

    onStarToggle = (mailId, ev) => {
        ev.stopPropagation()
        mailService.starToggle(mailId);
        this.loadMails()
    }

    onSaveAsNote = (mail) => {
        console.log(mail);
        var mailtoNoteStr = `http://127.0.0.1:5501/index.html?from=elad&subject=dd&body=dcddcdc#/missKeep?title=${mail.subject}&text=${mail.body}`
        console.log(mailtoNoteStr);

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

                    <MailControl onToggleNewMail={this.onToggleNewMail} onChangeMailBox={this.onChangeMailBox}
                        readCount={this.state.readCount} />
                    <div className="mail-box">
                        <table className="mails-table">
                            <thead>
                                <tr>
                                    <th onClick={() => { this.onSortByText('to') }}>to</th>
                                    <th onClick={() => { this.onSortByText('from') }}>from</th>
                                    <th colSpan="2" onClick={() => { this.onSortByText('subject') }}>contact</th>
                                    <th onClick={() => { this.onSortByNumber('sentAt') }}>time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.mails && this.state.mails.map((mail, idx) =>
                                    <MailList key={mail.id} mail={mail} onUnReadToggle={this.onUnReadToggle}
                                        onRemoveMail={this.onRemoveMail} onReplyMail={this.onReplyMail}
                                        showDateStr={this.showDateStr} onStarToggle={this.onStarToggle}
                                        onSaveAsNote={this.onSaveAsNote} onReadMail={this.onReadMail}
                                        mailBox={this.state.mailBox} />)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}