import { Contact, ContactList, ContactMessageMap, Message, MessageList } from "../model/types";

export interface ContactStore {
    getAll: () => ContactList
}

export interface MessageStore {
    getMessageListFor: (contact: Contact) => MessageList
    getAll: () => ContactMessageMap
    receive: (contactMessageMap: ContactMessageMap) => void
    send: (message: Message, contactMessageMap: ContactMessageMap) => void
 } 

export interface Stores {
    contactStore: ContactStore
    messageStore: MessageStore
}