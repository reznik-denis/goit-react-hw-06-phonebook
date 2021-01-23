import shortid from 'shortid';

export const deleteContact = (id) => ({
    type: 'contact/Delete',
    payload: id,
})
    
export const chengeFilter = value => ({
    type: 'contact/ChengeFilter',
    payload: value
});

export const formSubmitHendler = ({ name, number }) => ({
    type: 'contact/FormSubmitHendler',
    payload: {
        id: shortid.generate(),
        name,
        number
    }
})
