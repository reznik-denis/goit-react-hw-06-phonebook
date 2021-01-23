import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from "../redux/actions";

function Button({ onDeleteContact, id }) {
    return <button
        type="button"
        className="buttonDelete"
        onClick={() => onDeleteContact(id)}>Delete
    </button>
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteContact: id => dispatch(deleteContact(id))
    }
}

export default connect(null, mapDispatchToProps)(Button);