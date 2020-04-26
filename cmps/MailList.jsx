

// mail-prev

export default class MailList extends React.Component {
    state = {
        isExpanded: false,
        dateDescription: ''
    }

    componentDidMount() {
        this.getDateDescription()
    }

    getDateDescription = () => {
        const dateDescription = this.props.mail.sentAt
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
                        <button>froward</button>
                        <button>answer</button>

                    </td>
                </tr>
            </React.Fragment>
        )
    }
}