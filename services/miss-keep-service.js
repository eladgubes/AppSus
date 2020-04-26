export default {
    getNotes,
    createNote
}

var gNotes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

function getNotes(isPinned) {
    if(isPinned){
        return gNotes.filter(note => (note.isPinned));
    }else{
        return gNotes.filter(note => !note.isPinned);
    }
}

function createNote(type, isPinned, info, style, todos) {
    let note = {
        type,
        isPinned,
        info,
    };
    if(todos) note.todos = todos
    (!style) ? note.style = 'green' : note.style = style

    gNotes.push(note)
}