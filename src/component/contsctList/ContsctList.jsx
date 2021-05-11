import React from 'react';

const ContsctList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map((contact) =>
                <li key={contact.id}>
                    <p>{contact.name}:{contact.number}</p>
                    <button id={contact.id} onClick={ deleteContact}>Delete</button>
                </li>)}
        </ul>
    );
}

export default ContsctList;