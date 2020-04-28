
var gNextId = 103

var gMailsToDisplay = []

var gInboxMails = [
    { id: 101, from: 'elad', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, isStarred: true },
    { id: 102, from: 'omrit', subject: 'hello', body: 'im here', isRead: true, sentAt: 1587898990594, isStarred: false }
];

var gSentMails = []

export default {
    getMailsForDisplay,
    filterMail,
    sendMail,
    removeMail,
    sortByText,
    sortByNumber,
    getDateStr,
    unReadToggle,
    getReadCount,
    starToggle
}

function getMailsForDisplay(mailBox) {
    if (mailBox === 'inbox') gMailsToDisplay = gInboxMails
    else if (mailBox === 'sent') gMailsToDisplay = gSentMails
    else if (mailBox === 'starred') gMailsToDisplay = _getStaredMails()
    return Promise.resolve(gMailsToDisplay)
}


function filterMail(filter) {
    var checkRead = 'all'
    if (filter.mailCategory === 'Read') checkRead = true
    else if (filter.mailCategory === 'UnRead') checkRead = false

    var filterMails = gMailsToDisplay.filter(mail => {
        if (checkRead === 'all') {
            if (mail.from.toUpperCase().includes(filter.mailSearchWord.toUpperCase())) return mail
            if (mail.subject.toUpperCase().includes(filter.mailSearchWord.toUpperCase())) return mail
            return
        }
        if (mail.from.toUpperCase().includes(filter.mailSearchWord.toUpperCase())
            && checkRead === mail.isRead) return mail
        if (mail.subject.toUpperCase().includes(filter.mailSearchWord.toUpperCase())
            && checkRead === mail.isRead) return mail
    })
    return Promise.resolve(filterMails)
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
    gInboxMails.unshift(mail)
    gSentMails.unshift(mail)
}

function removeMail(mailId) {
    const mailIdx = gInboxMails.findIndex(mail => mail.id === mailId)
    gMailsToDisplay.splice(mailIdx, 1)
}

function sortByText(key) {
    gMailsToDisplay.sort((mailA, mailB) => {
        if (mailA[key].toUpperCase() > mailB[key].toUpperCase()) return 1
        if (mailA[key].toUpperCase() < mailB[key].toUpperCase()) return -1
        else return 0
    })

}

function sortByNumber(key) {
    gMailsToDisplay.sort((mailA, mailB) => {
        if (mailA[key] - mailB[key] < 1) return 1
        return -1
    })

}

function getDateStr(description) {
    const timeNow = Date.now()
    let timeStr;
    const timeDiff = (timeNow - description) / 1000 / 60 / 60 / 24
    if (timeDiff < 1) timeStr = ` ${parseInt(timeDiff * 24)} hours ago`
    else if (timeDiff <= 7) timeStr = ` ${parseInt(timeDiff)} days ago`
    else if (timeDiff > 7) timeStr = ` ${parseInt(timeDiff / 7)} weeks ago`
    return Promise.resolve(timeStr)
}

function unReadToggle(mailId) {
    let mail = gInboxMails.find(mail => mail.id === mailId)
    mail.isRead = !mail.isRead
    return Promise.resolve(mail)
}

function starToggle(mailId){
    let mail = gMailsToDisplay.find(mail => mail.id === mailId)
    mail.isStarred = !mail.isStarred
}

function getReadCount() {
    var readCount = 0;
    gInboxMails.forEach(mail => { if (mail.isRead) readCount++ })
    return Promise.resolve(readCount / gInboxMails.length * 100)
}

function _getStaredMails(){
    var staredMails = gInboxMails.filter(mail=>{if (mail.isStarred) return mail})
    staredMails.concat(gSentMails.filter(mail=>{if (mail.isStarred) return mail}))
    return staredMails;
}