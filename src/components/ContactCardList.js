import React from 'react';
import ContactCard from './ContactCard';

import Contact from '../models/Contact';

const cards = [
  new Contact('Lana Del Rey', '123-456-7890', 'lana@email.com', 'Los Angeles', 'https://i.imgur.com/1bX5QH6.jpg'),
  new Contact('Babbu Maan', '987-654-3210', 'babbu@email.com', 'Chandigarh', 'https://i.imgur.com/6vOahbP.jpg')
];

function ContactCardList() {
  return (
    <div>
      {cards.map((card, idx) => (
        <ContactCard
          key={idx}
          image={card.image}
          name={card.name}
          phone={card.phone}
          email={card.email}
          city={card.city}
        />
      ))}
    </div>
  );
}

export default ContactCardList;