import React from 'react';
import Contact from '../models/Contact';
import { Input, Grid } from 'semantic-ui-react';
import AddContactForm from './AddContactModal';
import ContactCardList from './ContactCardList';


function ContactListWrapper() {
  const [contacts, setContacts] = React.useState([
    new Contact('Lana Del Rey', '+61 123-456-7890', 'lana@email.com', 'Los Angeles', 'https://i.imgur.com/1bX5QH6.jpg'),
    new Contact('Babbu Maan', '+91 987-654-3210', 'babbu@email.com', 'Chandigarh', 'https://i.imgur.com/6vOahbP.jpg')
  ]);

  const addContact = (contact) => setContacts(prev => [contact, ...prev]);

  return (
    <Grid style={{ marginBottom: 24 }}>
      <Grid.Row columns={2} verticalAlign='middle'>
        <Grid.Column width={12}>
          <Input
            icon={{ name: 'search', circular: false, link: false }}
            placeholder='Search...'
            fluid
            style={{
              borderRadius: 24,
              border: '1.5px solid #8ed0f9',
              boxShadow: 'none',
              fontSize: 18,
              paddingLeft: 16,
              paddingRight: 16,
              background: '#fff',
              minWidth: 250
            }}
            input={{
              style: {
                border: 'none',
                boxShadow: 'none',
                borderRadius: 24,
                background: 'transparent',
                fontSize: 18,
              }
            }}
          />
        </Grid.Column>
        <Grid.Column width={4} textAlign='right'>
          <AddContactForm addContact={addContact} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <ContactCardList contacts={contacts} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ContactListWrapper;


