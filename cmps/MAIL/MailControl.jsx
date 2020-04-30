
export default function MailControl(props) {

    return (
        <div className="mail-control flex ">
            <a onClick={props.onToggleNewMail}><img src="assets/icons/new-mail.png" alt=""/></a>
            <ul className="mail-nav clean-list">
                <li onClick={() => props.onChangeMailBox('inbox')}>Inbox</li>
                <li onClick={() => props.onChangeMailBox('sent')}>Sent</li>
                <li onClick={() => props.onChangeMailBox('starred')}>Favorites</li>
            </ul>
            <h3>{props.readCount}% unread</h3>
        </div>
    )
}