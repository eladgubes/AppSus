export default {
    getNotes,
    createTxt,
    createImg,
    createTodo,
    createVideo,
    editNote,
    editNoteInContent,
    setTodo,
    removeNote,
    filterNotes,
    togglePin
}


var gId = 101;

var gNotes = [
    {
        id: 97,
        type: "text",
        isPinned: true,
        content: {
            title: 'My title',
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#008000"
        }
    },
    {
        id: 98,
        type: "img",
        isPinned: false,
        content: {
            url: "../assets/img/1.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: '#008000'
        }
    },
    {
        id: 99,
        type: "video",
        isPinned: false,
        content: {
            url: " ",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: '#008000'
        }
    },
    {
        id: 100,
        type: "todos",
        isPinned: false,
        content: {
            title: 'i am todo title',
            // label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#008000"
        }
    }
];

function getNotes() {
    return Promise.resolve(gNotes)
}

// one switch function
function createTxt(type, isPinned, text, title, backgroundColor) {
    let note = {
        id: gId++,
        type,
        isPinned,
        content: {
            title,
            text
        },
        style: {
            
        }
    };
    (!backgroundColor) ? note.style.backgroundColor = '#008000' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}

function createImg(type, isPinned, url, title, backgroundColor) {
    let note = {
        id: gId++,
        type,
        isPinned,
        content: {
            url,
            title
        },
        style: {

        }
    };
    (!backgroundColor) ? note.style.backgroundColor = '#008000' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}

function createVideo(type, isPinned, url, backgroundColor) {
    let note = {
        id: gId++,
        type,
        isPinned,
        content: {
            url,
            title
        },
        style: {

        }
    };
    (!backgroundColor) ? note.style.backgroundColor = '#008000' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}

function createTodo(type, isPinned, title, todos, backgroundColor) {
    let note = {
        id: gId++,
        type,
        isPinned,
        content: {
            title,
            todos
        },
        style: {
            
        }
    };
    (!backgroundColor) ? note.style.backgroundColor = '#008000' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}

function togglePin(id){
    let noteToEdit = _getNoteByKey('id', id)
    noteToEdit.isPinned = !noteToEdit.isPinned
}

function editNote(id, key, value) {
    let noteToEdit = _getNoteByKey('id', id)
    noteToEdit[key] = value
}

function editNoteInContent(id, key, value) {
    let noteToEdit = _getNoteByKey('id', id)
    noteToEdit.content[key] = value
}

function setTodo(id, todo){
    let noteToEdit = _getNoteByKey('id', id);
    noteToEdit.content.todos.push({txt: todo})
}

function removeNote(id) {
    const idx = gNotes.findIndex(note => note.id === id)
    gNotes.splice(idx, 1)
}

function _getNoteByKey(key, value) {
    const note = gNotes.find(note => note[key] === value);
    return note
}

function getFromNote(key, id){
    
}

function getFromInNote(firstsKey, secondKey, id){

}

function filterNotes(noteSearchWord) {
    var filterNote = gNotes.filter(note => {
        console.log(noteSearchWord,note);
        if (note.content.title.toUpperCase().includes(noteSearchWord.toUpperCase())) return note
    })
    return filterNote
}