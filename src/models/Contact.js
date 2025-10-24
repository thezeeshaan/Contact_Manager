import { v4 as uuidv4 } from 'uuid';

class Contact {
  constructor(name, phone, email, location, image, id) {
    this.id = id || uuidv4();
    this.name = name;
    this.image = image;
    this.phone = phone;
    this.email = email;
    this.location = location;
  }
}

export default Contact;
