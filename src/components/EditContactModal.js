import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
  Form,
} from 'semantic-ui-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function EditContactModal({ open, contact, onClose, onEdit }) {
  const { isDark } = useTheme();
  const [form, setForm] = React.useState({
    name: contact?.name || '',
    phone: contact?.phone || '',
    email: contact?.email || '',
    city: contact?.city || '',
  });

  React.useEffect(() => {
    if (contact) {
      setForm({
        name: contact.name || '',
        phone: contact.phone || '',
        email: contact.email || '',
        city: contact.city || '',
      });
    }
  }, [contact]);

  const handleChange = (e, { name, value }) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = () => {
    onEdit({ ...contact, ...form });
    if (onClose) onClose();
  };

  return (
    <Modal
      dimmer="inverted"
      open={open}
      onClose={onClose}
      size="tiny"
      style={{ background: isDark ? '#23272f' : '#fff', color: isDark ? '#f8f8ff' : '#23272f' }}
    >
      <ModalHeader style={{ fontWeight: 600, textAlign: 'center', background: isDark ? '#23272f' : '#fff', color: isDark ? '#f8f8ff' : '#23272f' }}>
        Edit Contact
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
              onChange={phone => setForm(f => ({ ...f, phone }))}
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
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Location"
          />
        </Form>
      </ModalContent>
      <ModalActions style={{ background: isDark ? '#23272f' : '#fff', borderTop: isDark ? '1px solid #333' : '1px solid #eee' }}>
        <Button negative onClick={onClose}>
          Cancel
        </Button>
        <Button positive onClick={handleSubmit}>
          Edit
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default EditContactModal;