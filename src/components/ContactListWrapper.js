import React from "react";
import Contact from "../models/Contact";
import { Input, Grid, Modal } from "semantic-ui-react";
import ContactDetail from "./ContactDetail";
import AddContactModal from "./AddContactModal";
import EditContactModal from "./EditContactModal";
import ContactCardList from "./ContactCardList";
import DeleteConfirm from "./DeleteConfirm";
import ToastAlert from './ToastAlert';

function ContactListWrapper() {
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [detailContact, setDetailContact] = React.useState(null);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [deleteIdx, setDeleteIdx] = React.useState(null);
  const [contacts, setContacts] = React.useState([
    new Contact(
      "Lana Del Rey",
      "+61 123-456-7890",
      "lana@email.com",
      "Los Angeles",
      "https://i.imgur.com/1bX5QH6.jpg"
    ),
    new Contact(
      "Babbu Maan",
      "+91 987-654-3210",
      "babbu@email.com",
      "Chandigarh",
      "https://i.imgur.com/6vOahbP.jpg"
    ),
  ]);
  const [editContact, setEditContact] = React.useState(null);
  const [editIdx, setEditIdx] = React.useState(null);
  const [toast, setToast] = React.useState({ open: false, message: '', positive: true });

  const addContact = (contact) => {
    setContacts((prev) => [contact, ...prev]);
    setToast({ open: true, message: 'Contact added successfully!', positive: true });
  };
  const handleEdit = (contact, idx) => {
    setEditContact(contact);
    setEditIdx(idx);
  };
  const handleUpdate = (contact) => {
    setContacts((prev) => prev.map((c, i) => (i === editIdx ? contact : c)));
    setEditContact(null);
    setEditIdx(null);
    setToast({ open: true, message: 'Contact edited successfully!', positive: true });
  };

  const handleModalClose = () => {
    setEditContact(null);
    setEditIdx(null);
  };

  return (
    <>
      <ToastAlert
        open={toast.open}
        message={toast.message}
        positive={toast.positive}
        onClose={() => setToast(t => ({ ...t, open: false }))}
      />
      <Grid style={{ marginBottom: 24 }}>
      <Grid.Row columns={2} verticalAlign="middle">
        <Grid.Column width={12}>
          <Input
            icon={{ name: "search", circular: false, link: false }}
            placeholder="Search..."
            fluid
            style={{
              borderRadius: 24,
              border: "1.5px solid #8ed0f9",
              boxShadow: "none",
              fontSize: 18,
              paddingLeft: 16,
              paddingRight: 16,
              background: "#fff",
              minWidth: 250,
            }}
            input={{
              style: {
                border: "none",
                boxShadow: "none",
                borderRadius: 24,
                background: "transparent",
                fontSize: 18,
              },
            }}
          />
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
          <AddContactModal addContact={addContact} />
          <EditContactModal
            open={!!editContact}
            contact={editContact}
            onClose={handleModalClose}
            onEdit={handleUpdate}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <ContactCardList
            contacts={contacts}
            onEdit={handleEdit}
            onDelete={(idx) => {
              setConfirmOpen(true);
              setDeleteIdx(idx);
            }}
            onShowDetail={(contact) => {
              setDetailContact(contact);
              setDetailOpen(true);
            }}
          />
          <DeleteConfirm
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={() => {
              setContacts((prev) => prev.filter((_, i) => i !== deleteIdx));
              setConfirmOpen(false);
              setDeleteIdx(null);
            }}
          />
          <Modal
            style={{ background: "none" }}
            open={detailOpen}
            onClose={() => setDetailOpen(false)}
            size="mini"
          >
            <ContactDetail contact={detailContact} />
          </Modal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  );
}

export default ContactListWrapper;
