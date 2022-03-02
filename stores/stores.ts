import { Contact, ContactList, ContactMessageMap, Message, MessageList } from "../model/types";
import { DummyContactStore } from "./contact-store";
import { DummyMessageStore } from "./message-store";

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

export const useStores = (): Stores => {
    return {
        contactStore: new DummyContactStore(),
        messageStore: new DummyMessageStore(),
    }
}