import { useState } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { formSubmitHendler } from "../redux/actions";


function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactsItems = useSelector(state => state.contacts.items);
    const disratch = useDispatch();

    const handleChangeName = event => {
        setName(event.currentTarget.value);
    };

    const handleChangeNumber = event => {
        setNumber(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (contactsItems.find(cont => cont.name === name)) {
            alert(`${name} is already in contacts`);
         return
         };
        disratch(formSubmitHendler({ name, number }));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (<form className="formBlock" onSubmit={handleSubmit}>
        <label className="labelBlock">
              Name <input
                type="text"
                value={name}
                onChange={handleChangeName}
                name="name"
                className="inputStyles" />
        </label>
        <label className="labelBlock">
              Number <input
                type="tel"
                value={number}
                onChange={handleChangeNumber}
                name="number"
                className="inputStyles" />
        </label>
        <button type="submit" className="button" disabled={!name || !number}>Add contact</button>
      </form> )
}

export default ContactForm;

// const mapStateToProps = state => ({
//     contactsItems: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmit: ({ name, number }) => dispatch(formSubmitHendler({ name, number }))
//     }
// };