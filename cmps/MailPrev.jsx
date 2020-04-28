

export default function MailPrev(props) {

    const { mail } = this.props
    return (

        <td colSpan="5">
            <h2>from: {mail.from}</h2>
            <h3>subject: {mail.subject}</h3>
            <p>body: {mail.body}</p>
            <button onClick={() => this.props.noRemoveMail(mail.id)}>delete</button>
            <button onClick={() => this.props.onReplyMail('froward', this.state.mailContact)}>froward</button>
            <button onClick={() => this.props.onReplyMail('answer', this.state.mailContact)}>answer</button>
        </td>
    )

}