import mailService from "../services/mailService.js"
import MailList from "../cmps/MailList.jsx"
import MailFilter from "../cmps/MailFilter.jsx"


export default class Mail extends React.Component {

    state = {
        mails: null
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        const mails = mailService.getMails()
        this.setState({ mails })
    }
    render() {
        return (
            <section>
                <MailFilter />
                <div className="flex">
                    <div className="mail-control">
                        <button>New Mail</button>
                        <ul className="mail-nav">
                            <li>inbox</li>
                            <li>starred</li>
                            <li>sent</li>
                            <li>drafts</li>
                        </ul>
                        <h3>read/unread</h3>
                    </div>
                    <table>
                        <tbody>
                            {this.state.mails && this.state.mails.map((mail, idx) => <MailList key={idx} mail={mail} />)}
                        </tbody>
                    </table>
                </div>

            </section>
        )
    }
}