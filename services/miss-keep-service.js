export default {
    getNotes,
    createTxt
}

var gNotes = []

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

function getNotes(isPinned) {
    if (isPinned) {
        return gNotes.filter(note => (note.isPinned));
    } else {
        return gNotes.filter(note => !note.isPinned);
    }
}

function createTxt(type, isPinned, txt, backgroundColor) {
    let note = {
        type,
        isPinned,
        content: {
            txt
        },
        style: {

        }
    };
    (!backgroundColor) ? note.style.backgroundColor = 'green' : note.style.backgroundColor = backgroundColor
    gNotes.push(note);
}
