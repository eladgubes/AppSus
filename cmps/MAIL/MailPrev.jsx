import MailBody from "./MailBody.jsx";


const { Link } = ReactRouterDOM
export default function MailPrev(props) {

    return (

        <td colSpan="5">
            <h2>to: {props.mail.to}</h2>
            <p>from: {props.mail.from}</p>
            <p>subject: {props.mail.subject}</p>
            <p>body:</p>
            {(typeof props.mail.body != 'string') ? props.mail.body.map(sentence => <MailBody sentence={sentence} key={sentence} />)
                : <p>{props.mail.body}</p>}

            {/* {props.mail.body.map(sentence => <MailBody sentence={sentence} key={sentence} />)} */}

            {/* <p>body: {props.mail.body}</p> */}
            < button onClick={() => props.onRemoveMail(props.mail.id)}>delete</button>
            <button onClick={() => props.onReplyMail('froward', props.mailContact)}>froward</button>
            <button onClick={() => props.onReplyMail('answer', props.mailContact)}>answer</button>
            <Link to={`/missKeep?title=${props.mail.subject}&text=${props.mail.body}`}>Create Note</Link>
        </td>
    )

}