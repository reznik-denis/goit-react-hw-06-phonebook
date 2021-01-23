import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formSubmitHendler } from "../redux/actions";


function ContactForm ({onSubmit, contactsItems}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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
        onSubmit({ name, number });
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

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
    contactsItems: state.contacts.items,
})

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: ({ name, number }) => dispatch(formSubmitHendler({ name, number }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);