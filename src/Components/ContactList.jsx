import React from 'react';
import ButtonDelete from './ButtonDelete';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function ContactList() {
    const contacts = useSelector(({ contacts: { items, filter } }) => getVisibleContacts(items, filter))
    return (<ul className="list">
            {contacts.map(({id, name, number}) => (
              <li key={id} className="listItem">{name}: {number}
                    <ButtonDelete id={id}/>
              </li>
              ))}
          </ul>)
};

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
}

export default ContactList;

// export default connect(mapStateToProps)(ContactList);

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: getVisibleContacts(items, filter),
// });