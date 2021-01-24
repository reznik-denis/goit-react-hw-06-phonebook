import React from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../redux/actions";

function Button({ id }) {
    const dispatch = useDispatch();
    return <button
        type="button"
        className="buttonDelete"
        onClick={() => dispatch(deleteContact(id))}>Delete
    </button>
};

export default Button;

// const mapDispatchToProps = dispatch => {
//     return {
//         onDeleteContact: id => dispatch(deleteContact(id))
//     }
// };