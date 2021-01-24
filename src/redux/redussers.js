import { createReducer } from "@reduxjs/toolkit";
import { formSubmitHendler, deleteContact, chengeFilter } from "./actions.js";

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsRedusser = createReducer(contacts, {
    [formSubmitHendler]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
})

// const itemsRedusser = (state = contacts, { type, payload }) => {
//     switch (type) {
//         case 'contact/FormSubmitHendler':
//             return [...state, payload];
//         case 'contact/Delete':
//             return state.filter(contact => contact.id !== payload);
//         default:
//             return state
//     }
// }

export const filterReduser = createReducer('', {
    [chengeFilter]: (_, { payload }) => payload,
})

// const filterReduser = (state = '', { type, payload }) => {
//     switch (type) {
//         case 'contact/ChengeFilter':
//             return payload;
//         default:
//             return state
//     }
// };