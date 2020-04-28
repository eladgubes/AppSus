

export default function MailPrev(props) {

    return (

        <td colSpan="5">
            <h2>from: {props.mail.from}</h2>
            <h3>subject: {props.mail.subject}</h3>
            <p>body: {props.mail.body}</p>
            <button onClick={() => props.onRemoveMail(props.mail.id)}>delete</button>
            <button onClick={() => props.onReplyMail('froward', props.mailContact)}>froward</button>
            <button onClick={() => props.onReplyMail('answer', props.mailContact)}>answer</button>
        </td>
    )

}