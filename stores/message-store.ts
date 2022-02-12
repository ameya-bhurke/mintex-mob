import { Contact, ContactMessageMap, MessageList } from "../model/types"

export class DummyMessageStore {
    getMessageListFor = (contact: Contact): MessageList => {
        return [
            {author: '+61 412345568', content: 'Hello there!', time: new Date(), direction: 'in'},
            {author: '+61 412345568', content: 'Hello there!', time: new Date(), direction: 'in'},
        ]
    } 

    getAll = (): ContactMessageMap => {
        let m = new Map<Contact, MessageList>()
        m[{name: 'Jane Doe', }]
    }
    receive: (contactMessageMap: ContactMessageMap) => void
    send: (message: Message, contactMessageMap: ContactMessageMap) => void
}