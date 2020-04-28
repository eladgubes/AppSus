import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteVideo from './NoteVideo.jsx'
export default function NotePrev(props) {


    function setNote() {
        switch (props.note.type) {
            case 'text':
                return <NoteTxt note={props.note} onRemoveNote={props.onRemoveNote}
                    onSetColor={props.onSetColor} onSetNoteType={props.onSetNoteType} onSetNote={props.onSetNote} onEditPin={props.onEditPin} />
            case 'img':
                return <NoteImg note={props.note} onRemoveNote={props.onRemoveNote}
                    onSetColor={props.onSetColor} onSetNoteType={props.onSetNoteType} onSetNote={props.onSetNote} onEditPin={props.onEditPin} />
            case 'todos':
                return <NoteTodos note={props.note} onRemoveNote={props.onRemoveNote}
                    onSetColor={props.onSetColor} onSetNoteType={props.onSetNoteType} onSetNote={props.onSetNote} onEditPin={props.onEditPin} />
            case 'video':
                return <NoteVideo note={props.note} onRemoveNote={props.onRemoveNote}
                    onSetColor={props.onSetColor} onSetNoteType={props.onSetNoteType} onSetNote={props.onSetNote} onEditPin={props.onEditPin} />
            default:
                console.error('Err: in \'NotePrev\' cmp > setNote(), type err');
                break;
        }
    }

    return (
        <React.Fragment>
            {setNote()}
        </React.Fragment>
    )
}


/*
Done:
<NoteTxt/>
<NoteImg/>
<NoteTodos/>
<NoteVideo/>

Not Done:

//Bonus
<NoteAudio/>
<NoteMap/>
*/