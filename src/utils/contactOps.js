import Contact from "../models/Contact";


export function addContact(contacts, contact) {
  return [contact, ...contacts];
}

export function editContact(contacts, id, updatedContact) {
  return contacts.map((c) => (c.id === id ? updatedContact : c));
}

export function deleteContact(contacts, id) {
  return contacts.filter((c) => c.id !== id);
}

export function filterContacts(contacts, search) {
  const query = search.toLowerCase();
  return contacts.filter(c =>
    c.name.toLowerCase().includes(query) ||
    (c.email && c.email.toLowerCase().includes(query)) ||
    (c.location && c.location.toLowerCase().includes(query)) ||
    (c.phone && c.phone.toLowerCase().includes(query))
  );
}



export function getDefaultContacts() {
  return [
    new Contact(
      "John Doe",
      "611234567890",
      "john@email.com",
      "Los Angeles",
      "https://i.imgur.com/1bX5QH6.jpg"
    ),
    new Contact(
      "Jane Doe",
      "919876543210",
      "jane@email.com",
      "Chandigarh",
      "https://i.imgur.com/6vOahbP.jpg"
    ),
  ];
}
