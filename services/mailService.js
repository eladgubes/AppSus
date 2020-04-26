export default{
    getMails
}

var gMails = [
    {from: 'elad',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594,isImportant: false},
    {from: 'omrit',subject: 'hello', body: 'im here', isRead: false, sentAt : 1551133930594,isImportant: false} 
]

function getMails(){
    return gMails
}