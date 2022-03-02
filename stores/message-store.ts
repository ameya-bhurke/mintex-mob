import { Contact, ContactMessageMap, Message, MessageList } from "../model/types"

export class DummyMessageStore {
    getMessageListFor = (contact: Contact): MessageList => {
        return [
            {author: '+61 412345568', content: 'Hello there!', time: new Date(), direction: 'out'},
            {author: '+61 412345568', content: 'Hello back!', time: new Date(), direction: 'in'},
        ]
    } 

    getAll = (): ContactMessageMap => {
        let m = new Map<Contact, MessageList>()

        let c = {id: '2', name: 'Jane Doe', number: '+61 412345568'}

        m.set(c, this.getMessageListFor(c))

        return m
    }

    receive = (contactMessageMap: ContactMessageMap) => void {
        
    }

    send =  (message: Message, contactMessageMap: ContactMessageMap) => void {

    }
}