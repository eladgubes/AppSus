
export default class Confirm extends React.Component {

    state = {
        confirm: false
    }

    onAccept = () => {
        this.props.onAccept()
        this.setState({ confirm: true })
    }


    render() {
        return (

            <div className="confirm-modal">
                <h2>{this.props.question}</h2>

                <div className="Confirm-modal-btn">
                    <button onClick={this.onAccept}>confirm</button>
                    <button onClick={this.props.onCloseConfirmModal}>cancel</button>
                </div>
                {/* {this.state.confirm && <ApproveModal />} */}
            </div>
        )
    }
}