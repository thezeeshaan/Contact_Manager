import Contact from "../models/Contact";


export function saveContacts(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function loadContacts() {
  const data = localStorage.getItem('contacts');
  if (!data) return null;
  try {
    const arr = JSON.parse(data);
    return arr.map(c => new Contact(c.name, c.phone, c.email, c.location, c.image, c.id));
  } catch {
    return null;
  }
}

export function addContact(contacts, contact) {
  const updated = [contact, ...contacts];
  saveContacts(updated);
  return updated;
}

export function editContact(contacts, id, updatedContact) {
  const updated = contacts.map((c) => (c.id === id ? updatedContact : c));
  saveContacts(updated);
  return updated;
}

export function deleteContact(contacts, id) {
  const updated = contacts.filter((c) => c.id !== id);
  saveContacts(updated);
  return updated;
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
  const loaded = loadContacts();
  if (loaded && loaded.length) return loaded;
  const defaults = [
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
  saveContacts(defaults);
  return defaults;
}
