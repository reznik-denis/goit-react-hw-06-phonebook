import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chengeFilter } from "../redux/actions";

function Filter({value, onChange}) {
    return (<label className="labelBlock">
        Find contacts by name <input type="text" value={value} onChange={onChange} className="inputStyles"/>
        </label>)
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => {
    return {
        onChange: (e) => dispatch(chengeFilter(e.currentTarget.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);