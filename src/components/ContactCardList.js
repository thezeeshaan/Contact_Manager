import React from "react";
import Contact from "../models/Contact";
import ContactCard from "./ContactCard";
import { Grid, Segment, Header, Icon, Button } from "semantic-ui-react";

function ContactCardList({ contacts, onEdit, onDelete, onShowDetail }) {
  if (!contacts || contacts.length === 0)
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="dont" />
          No contacts to display
        </Header>
      </Segment>
    );
  return (
    <Grid columns={2} doubling stackable>
      {contacts.map((card) => (
        <Grid.Column key={card.id}>
          <ContactCard
            contact={card}
            onEdit={() => onEdit(card, card.id)}
            onDelete={() => onDelete(card.id)}
            onShowDetail={() => onShowDetail(card)}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default ContactCardList;
