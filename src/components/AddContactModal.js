import React from "react";
import { useTheme } from '../context/ThemeContext';
import Contact from '../models/Contact';
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
  Form,
} from "semantic-ui-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}



function AddContactForm({ addContact, editContact, updateContact, onClose }) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const {open} = state;

  const [form, setForm] = React.useState({
    name: "",
    phone: "",  
    email: "",
    city: "",
  });

  React.useEffect(() => {
    if (editContact) {
      setForm({
        name: editContact.name || '',
        phone: editContact.phone || '',
        email: editContact.email || '',
        city: editContact.city || '',
      });
      dispatch({ type: "OPEN_MODAL" });
    }
  }, [editContact]);

  const handleChange = (e, { name, value }) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = () => {
    const contact = new Contact(form.name, form.phone, form.email, form.city, "https://i.imgur.com/1bX5QH6.jpg");
    if (editContact) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    dispatch({ type: "CLOSE_MODAL" });
    if (onClose) onClose();
    setForm({ name: '', phone: '', email: '', city: '' });
  };

  // Ensure modal closes and form resets on cancel
  const handleCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
    if (onClose) onClose();
    setForm({ name: '', phone: '', email: '', city: '' });
  };

  const { isDark } = useTheme();
  return (
    <div>
      <Button
        icon="plus"
        content="Add Contact"
        color="blue"
        onClick={() => dispatch({ type: "OPEN_MODAL" })}
      />
      <Modal
        dimmer="inverted"
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        size="tiny"
        style={{ background: isDark ? '#23272f' : '#fff', color: isDark ? '#f8f8ff' : '#23272f' }}
      >
        <ModalHeader style={{ fontWeight: 600, textAlign: "center", background: isDark ? '#23272f' : '#fff', color: isDark ? '#f8f8ff' : '#23272f' }}>
          Add a New Contact
        </ModalHeader>
        <ModalContent style={{ background: isDark ? '#23272f' : '#fff', color: isDark ? '#f8f8ff' : '#23272f' }}>
          <Form onSubmit={handleSubmit} style={{ background: isDark ? '#23272f' : '#fff', color: isDark ? '#f8f8ff' : '#23272f' }}>
            <style>{`
              .themed-label { color: ${isDark ? '#f8f8ff' : '#23272f'} !important; }
            `}</style>
            <Form.Input
              label={<span className="themed-label">Name <span style={{color: '#db2828'}}>*</span></span>}
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <Form.Field required>
              <label className="themed-label">Phone</label>
              <PhoneInput
                country={"in"}
                value={form.phone}
                onChange={(phone) => setForm((f) => ({ ...f, phone }))}
                preferredCountries={["in", "us"]}
                inputClass="pad"
                autocompleteSearch={true}
                enableSearch={true}
                disableSearchIcon={true}
                enableLongNumbers={true}
                countryCodeEditable={true}
                inputStyle={{
                  width: "100%",
                  borderRadius: 6,
                  border: "1px solid #c7d7e2",
                  boxShadow: "none",
                  fontSize: 16,
                  paddingLeft: 48,
                  background: "#fff",
                }}
                placeholder="Enter phone number..."
              />
            </Form.Field>
            <Form.Input
              label={<span className="themed-label">Email</span>}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Form.Input
              label={<span className="themed-label">Location</span>}
              name="Location"
              value={form.city}
              onChange={handleChange}
              placeholder="Location"
            />
          </Form>
        </ModalContent>
        <ModalActions style={{ background: isDark ? '#23272f' : '#fff', borderTop: isDark ? '1px solid #333' : '1px solid #eee' }}>
          <Button negative onClick={handleCancel}>
            Cancel
          </Button>
          <Button positive onClick={handleSubmit}>
            Add
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}

export default AddContactForm;
