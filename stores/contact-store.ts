import { ContactList } from "../model/types";



export class DummyContactStore {
    getAll = (): ContactList => {
        return [
            {id: '1', name: 'John Doe', number: '+61 412345567'},
            {id: '1', name: 'Jane Doe', number: '+61 412345568'},
        ]
    }
}