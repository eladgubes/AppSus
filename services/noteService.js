export default {
    getNotes,
    createTxt,
    createImg,
    createTodo
}

//create notes
// var gNotes = []

var gNotes = [
    {
        type: "text",
        isPinned: true,
        content: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "img",
        content: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "todos",
        content: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

function getNotes() {
    return Promise.resolve(gNotes)
}

// one switch function
function createTxt(type, isPinned, text, title, backgroundColor) {
    let note = {
        type,
        isPinned,
        content: {
            text,
            title
        },
        style: {

        }
    };
    (!backgroundColor) ? note.style.backgroundColor = 'green' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}

function createImg(type, isPinned, url, backgroundColor) {
    let note = {
        type,
        isPinned,
        content: {
            url
        },
        style: {

        }
    };
    (!backgroundColor) ? note.style.backgroundColor = 'red' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}

function createTodo(type, isPinned, label, todos, backgroundColor) {
    let note = {
        type,
        isPinned,
        content: {
            label,
            todos
        },
        style: {

        }
    };
    (!backgroundColor) ? note.style.backgroundColor = 'blue' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}
