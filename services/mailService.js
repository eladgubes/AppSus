
var gNextId = 103

var gMails = [
    { id: 101, from: 'elad', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, isImportant: false },
    { id: 102, from: 'omrit', subject: 'hello', body: 'im here', isRead: false, sentAt: 1551133930594, isImportant: false }
];

export default {
    getMails,
    filterMail,
    sendMail,
    removeMail,
    sortByText,
    sortByNumber
}

function getMails() {
    return gMails
}

function filterMail(filter) {
    var filterMails = gMails.filter(mail => {
        if (mail.from.toUpperCase().includes(filter.mailSearchWord.toUpperCase())) return mail
        if (mail.subject.toUpperCase().includes(filter.mailSearchWord.toUpperCase())) return mail
    })
    return filterMails
}

function sendMail(mailContact) {
    const time = Date.now()
    var mail = {
        id: gNextId++,
        from: mailContact.from,
        subject: mailContact.subject,
        body: mailContact.body,
        isRead: false,
        sentAt: time
    }
    gMails.unshift(mail)
}

function removeMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId)
    gMails.splice(mailIdx, 1)
}

function sortByText(key) {
    gMails.sort((mailA, mailB) => {
        if (mailA[key].toUpperCase() > mailB[key].toUpperCase()) return 1
        if (mailA[key].toUpperCase() < mailB[key].toUpperCase()) return -1
        else return 0
    })

}

function sortByNumber(key) {
    gMails.sort((mailA, mailB) => {
        return mailA[key] - mailB[key]
    })

}