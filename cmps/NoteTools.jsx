export default function NoteTools (props) {
    
    return (
        <div className="noteTools">
            <button onClick={() => props.onSetPin(true)}>Pin</button>
            <button onClick={() => props.onSetNoteType('text')}>text</button>
            <button onClick={() => props.onSetNoteType('img')}>img</button>
            <button onClick={() => props.onSetNoteType('todos')}>todos</button>
        </div>
    )
}