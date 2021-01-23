import React from 'react';
import ButtonDelete from './ButtonDelete';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ContactList({contacts}) {
    return (<ul className="list">
            {contacts.map(({id, name, number}) => (
              <li key={id} className="listItem">{name}: {number}
                    <ButtonDelete id={id}/>
              </li>
              ))}
          </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
}

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps)(ContactList);