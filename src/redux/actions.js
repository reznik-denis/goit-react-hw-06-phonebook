import shortid from 'shortid';
import { createAction } from "@reduxjs/toolkit";

// export const deleteContact = (id) => ({
//     type: 'contact/Delete',
//     payload: id,
// })

export const deleteContact = createAction('contact/Delete');
    
// export const chengeFilter = value => ({
//     type: 'contact/ChengeFilter',
//     payload: value
// });

export const chengeFilter = createAction('contact/ChengeFilter');

// export const formSubmitHendler = ({ name, number }) => ({
//     type: 'contact/FormSubmitHendler',
//     payload: {
//         id: shortid.generate(),
//         name,
//         number
//     }
// })

export const formSubmitHendler = createAction('contact/FormSubmitHendler', ({ name, number }) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number
        },
    };
});