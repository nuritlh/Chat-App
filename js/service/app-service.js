import utils from './utils.js'
export default {
    query,
    addNewMsg
}
var msgFromSrorage = utils.loadFromStorage('messages')
var messages = (msgFromSrorage) ? msgFromSrorage :
    [
        {
            userdetails: {
                id: '5b608ce064922242d83a08d9',
                img: 'img/profile-pics/Anonymous-Whatsapp-profile-picture.jpg',
                fullName: 'Ilay Skutelsky'
            },
            id: '5b728bf84f45b1001426945f',
            room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
            users: [
                '5b58aa7616f42101ded3362a',
                '5b608ce064922242d83a08d9'
            ],
            msgs: [
                {
                    txt: 'Hey Nurit!',
                    room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
                    at: 1534233600956,
                    isRead: false,
                    creator: {
                        id: '5b608ce064922242d83a08d9',
                        img: 'img/profile-pics/Anonymous-Whatsapp-profile-picture.jpg',
                        fullName: 'Ilay Skutelsky'
                    }
                },
                {
                    txt: 'Nuritttttt',
                    room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
                    at: 1534328456606,
                    isRead: false,
                    creator: {
                        id: '5b608ce064922242d83a08d9',
                        img: 'img/profile-pics/Anonymous-Whatsapp-profile-picture.jpg',
                        fullName: 'Ilay Skutelsky'
                    }
                },
                {
                    txt: 'Nurit!',
                    room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
                    at: 1534328468020,
                    isRead: false,
                    creator: {
                        id: '5b608ce064922242d83a08d9',
                        img: 'img/profile-pics/Anonymous-Whatsapp-profile-picture.jpg',
                        fullName: 'Ilay Skutelsky'
                    }
                },
                {
                    txt: 'Hi',
                    room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
                    at: 1534331530033,
                    isRead: false,
                    creator: {
                        id: '5b608ce064922242d83a08d9',
                        img: 'img/profile-pics/Anonymous-Whatsapp-profile-picture.jpg',
                        fullName: 'Ilay Skutelsky'
                    }
                },
                {
                    txt: 'Hi Ilay',
                    room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
                    at: 1534331533154,
                    isRead: false,
                    creator: {
                        id: '5b58aa7616f42101ded3362a',
                        img: 'img/profile-pics/Buttercup_pic.jpg',
                        fullName: 'Nurit Levi'
                    }
                },
                {
                    txt: 'Sorry i was in class',
                    room: '5b608ce064922242d83a08d95b58aa7616f42101ded3362a',
                    at: 1534331535774,
                    isRead: false,
                    creator: {
                        id: '5b58aa7616f42101ded3362a',
                        img: 'img/profile-pics/Buttercup_pic.jpg',
                        fullName: 'Nurit Levi'
                    }
                },
            ]
        },
        {
            userdetails: {
                id: '5b5b58caadf5714424899166',
                img: 'img/profile-pics/inbal.jpg',
                fullName: 'Inbal Levi'
            },
            id: '5b635674a9113d0014a2ff3d',
            room: '5b608af83bcff252a03a37455b5b58caadf5714424899166',
            users: [
                '5b608af83bcff252a03a3745',
                '5b5b58caadf5714424899166'
            ],
            msgs: [
                {
                    txt: 'Hi sis! good luck :)',
                    room: '5b608af83bcff252a03a37455b5b58caadf5714424899166',
                    at: 1533236861191,
                    isRead: false,
                    creator: {
                        id: '5b58aa7616f42101ded3362a',
                        img: 'img/profile-pics/Buttercup_pic.jpg',
                        fullName: 'Nurit Levi'
                    }
                },
                {
                    txt: 'Hi thank you , love you sis <3',
                    room: '5b608af83bcff252a03a37455b5b58caadf5714424899166',
                    at: 1533237626529,
                    isRead: false,
                    creator: {
                        id: '5b5b58caadf5714424899166',
                        img: 'img/profile-pics/inbal.jpg',
                        fullName: 'Inbal Levi'
                    }
                },
                {
                    txt: 'WOWWWW sis that went really good!!',
                    room: '5b608af83bcff252a03a37455b5b58caadf5714424899166',
                    at: 1533237963960,
                    isRead: false,
                    creator: {
                        id: '5b5b58caadf5714424899166',
                        img: 'img/profile-pics/inbal.jpg',
                        fullName: 'Inbal Levi'
                    }
                }
            ]
        }
    ]

var loggedUser = {
    id: '5b58aa7616f42101ded3362a',
    img: 'img/profile-pics/Buttercup_pic.jpg',
    fullName: 'Nurit Levi'
}
function query(searchMsg) {
    return Promise.resolve(messages);
}

function addNewMsg(newMsg) {
    var chat = messages.find(function (chat) {
        return chat.room === newMsg.room;
    });
    newMsg.creator = loggedUser;
    chat.msgs.push(newMsg)
    utils.saveToStorage('messages', messages)
    return Promise.resolve(chat);
}

