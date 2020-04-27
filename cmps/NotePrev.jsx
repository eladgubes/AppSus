export default class NotePrev extends React.Component {

    state = {
        
    }
    
    render(){
        return (
                <div className="note-prev flex center-center">
                    <h1>{this.props.note.type}</h1>
                    <div className="buttons">
                        <button></button>
                    </div>
                </div>
        )
    }
}