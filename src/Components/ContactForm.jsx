import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleChangeName, handleChangeNumber } from "../redux/actions";


function ContactForm ({onSubmit, changeNumber, changeName}) {
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
                onChange={changeName}
                name="name"
                className="inputStyles" />
        </label>
        <label className="labelBlock">
              Number <input
                type="tel"
                value={number}
                onChange={changeNumber}
                name="number"
                className="inputStyles" />
        </label>
        <button type="submit" className="button" disabled={!name || !number}>Add contact</button>
      </form> )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired, 
}

const mapStateToProps = state => {
    return {
        name: state.name,
        number: state.number
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeNumber: () => dispatch(handleChangeNumber()),
        changeName: () => dispatch(handleChangeName())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);