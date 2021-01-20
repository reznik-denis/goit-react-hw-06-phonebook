import { createStore } from "redux";

const stateTo = {
    name: '',
    number: ''
};


const reducer = (state = stateTo, {type, payload}) => {
    switch (type) {
        case 'contact/Name':
            return { name: payload.currentTarget.value };
        case 'contact/Number':
            return { number: payload.currentTarget.value };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;