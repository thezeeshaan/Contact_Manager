import React from 'react';
import Contact from '../models/Contact';
import ContactCard from './ContactCard';
import { Grid } from 'semantic-ui-react';

function ContactCardList({ contacts }) {
  return (
    <Grid columns={2} doubling stackable>
      {contacts.map((card, idx) => (
        <Grid.Column key={idx}>
          <ContactCard
            image={card.image}
            name={card.name}
            phone={card.phone}
            email={card.email}
            city={card.city}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default ContactCardList;