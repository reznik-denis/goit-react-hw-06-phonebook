import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const itemsRedusser = (state = [], { type, payload }) => {
    switch (type) {
        case 'contact/FormSubmitHendler':
            return [...state, payload];
        case 'contact/Delete':
            return state.filter(contact => contact.id !== payload);
        default:
            return state
    }
}

const filterReduser = (state = '', { type, payload }) => {
    switch (type) {
        case 'contact/ChengeFilter':
            return payload;
        default:
            return state
    }
};

const contactsReduser = combineReducers({
    items: itemsRedusser,
    filter: filterReduser
});

const rootReduser = combineReducers({
    contacts: contactsReduser
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;