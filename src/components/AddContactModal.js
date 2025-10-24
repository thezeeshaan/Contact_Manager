import React from "react";
import { useTheme } from "../context/ThemeContext";
import Contact from "../models/Contact";
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
import { toast } from "../utils/toast";




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

function AddContactModal({ addContact }) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open } = state;

  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const handleChange = (e, { name, value }) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = () => {
    // Validate form
    if (!form.name || !form.phone) {
      // Alert Toast
      toast({ message: "Name and Phone are required", negative: true });
      return;
    }
    console.log(form.phone);
    console.log(form.phone.length);

    if (form.phone.length != 12) {
      toast({ message: "Phone number must be exactly 10 digits", negative: true });
      return;
    }
    
    const contact = new Contact(
      form.name,
      form.phone,
      form.email,
      form.location,
      "https://i.imgur.com/1bX5QH6.jpg"
    );

    addContact(contact);

    dispatch({ type: "CLOSE_MODAL" });
    setForm({ name: "", phone: "", email: "", location: "" });
  };

  // Ensure modal closes and form resets on cancel
  const handleCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
    setForm({ name: "", phone: "", email: "", location: "" });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
    setForm({ name: "", phone: "", email: "", location: "" });
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
      <style>{`
      .react-tel-input .country-list {
        background: ${isDark ? "#23272f" : "#fff"} !important;
        color: ${isDark ? "#f8f8ff" : "#23272f"} !important;
      }
      .react-tel-input .country-list .country {
        background: ${isDark ? "#23272f" : "#fff"} !important;
        color: ${isDark ? "#f8f8ff" : "#23272f"} !important;
      }
      .react-tel-input .country-list .country.highlight {
        background: ${isDark ? "#2d8cff" : "#e6f6ff"} !important;
        color: ${isDark ? "#fff" : "#23272f"} !important;
      }
    `}</style>
      <Modal
        dimmer="inverted"
        open={open}
        size="tiny"
        closeOnDimmerClick={true}
        closeOnEscape={true}
        onClose={handleClose}
        style={{
          background: isDark ? "#23272f" : "#fff",
          color: isDark ? "#f8f8ff" : "#23272f",
        }}
      >
        <ModalHeader
          style={{
            fontWeight: 600,
            textAlign: "center",
            background: isDark ? "#23272f" : "#fff",
            color: isDark ? "#f8f8ff" : "#23272f",
          }}
        >
          Add a New Contact
        </ModalHeader>
        <ModalContent
          style={{
            background: isDark ? "#23272f" : "#fff",
            color: isDark ? "#f8f8ff" : "#23272f",
          }}
        >
          <Form
            onSubmit={handleSubmit}
            style={{
              background: isDark ? "#23272f" : "#fff",
              color: isDark ? "#f8f8ff" : "#23272f",
            }}
          >
            <style>{`
              .themed-label { color: ${
                isDark ? "#f8f8ff" : "#23272f"
              } !important; }
            `}</style>
            <Form.Input
              label="Name"
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
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </Form>
        </ModalContent>
        <ModalActions
          style={{
            background: isDark ? "#23272f" : "#fff",
            borderTop: isDark ? "1px solid #333" : "1px solid #eee",
          }}
        >
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

export default AddContactModal;
