
export default function MailControl(props) {

    return (
        <div className="mail-control flex ">
            <button onClick={props.onToggleNewMail}>New Mail</button>
            <ul className="mail-nav clean-list">
                <li onClick={() => props.onChangeMailBox('inbox')}>inbox</li>
                <li onClick={() => props.onChangeMailBox('sent')}>sent</li>
                <li onClick={() => props.onChangeMailBox('starred')}>starred</li>
            </ul>
            <h3>{props.readCount}% unread</h3>
        </div>
    )
}