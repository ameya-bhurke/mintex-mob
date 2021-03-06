export type MessageDirection = 'in' | 'out'

export interface Message {
    author: string
    content: string
    time: Date
    direction: MessageDirection   
}

export interface Contact {
    id: string
    name: string
    number: string
}

export type MessageList = Array<Message>
export type ContactList = Array<Contact>

export type ContactMessageMap = Map<Contact, MessageList>

const cm: ContactMessageMap = new Map<Contact, MessageList>()