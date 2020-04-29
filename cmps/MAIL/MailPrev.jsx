import MailBody from "./MailBody.jsx";


const { Link } = ReactRouterDOM
export default function MailPrev(props) {

    return (

        <td colSpan="7">
            <h2>to: {props.mail.to}</h2>
            <p>from: {props.mail.from}</p>
            <p>subject: {props.mail.subject}</p>
            <p>body:</p>
            {(typeof props.mail.body != 'string') ? props.mail.body.map(sentence => <MailBody sentence={sentence} key={sentence} />)
                : <p>{props.mail.body}</p>}

            {/* {props.mail.body.map(sentence => <MailBody sentence={sentence} key={sentence} />)} */}

            {/* <p>body: {props.mail.body}</p> */}
            <a onClick={() => props.onRemoveMail(props.mail.id)}><img src="/assets/icons/trash.png" alt=""/></a>
            <a onClick={() => props.onReplyMail('froward', props.mailContact)}><img src="/assets/icons/for.png" alt=""/></a>
            <a onClick={() => props.onReplyMail('answer', props.mailContact)}><img src="/assets/icons/answer.png" alt=""/></a>
            <Link to={`/missKeep?title=${props.mail.subject}&text=${props.mail.body}`}><img src="/assets/icons/note.png" alt=""/></Link>
        </td>
    )

}