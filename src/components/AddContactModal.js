import React from "react";
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


function AddContactForm({ addContact }) {
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

  const handleChange = (e, { name, value }) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = () => {
    const contact = new Contact(form.name, form.phone, form.email, form.city, "https://i.imgur.com/1bX5QH6.jpg");
    addContact(contact);
    dispatch({ type: "CLOSE_MODAL" });
  };

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
      >
        <ModalHeader style={{ fontWeight: 600, textAlign: "center" }}>
          Add a New Contact
        </ModalHeader>
        <ModalContent>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <Form.Field required>
              <label>Phone</label>
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
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Form.Input
              label="Location"
              name="Location"
              value={form.city}
              onChange={handleChange}
              placeholder="Location"
            />
          </Form>
        </ModalContent>
        <ModalActions>
          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
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
