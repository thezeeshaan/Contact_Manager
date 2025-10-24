import React from "react";
import Contact from "../models/Contact";
import {
  addContact as addContactOp,
  editContact as editContactOp,
  deleteContact,
  filterContacts,
  getDefaultContacts,
} from "../utils/contactOps";
import { Input, Grid, Modal } from "semantic-ui-react";
import ContactDetail from "./ContactDetail";
import AddContactModal from "./AddContactModal";
import EditContactModal from "./EditContactModal";
import ContactCardList from "./ContactCardList";
import DeleteConfirm from "./DeleteConfirm";
import { toast } from "../utils/toast";

function ContactListWrapper() {
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [detailContact, setDetailContact] = React.useState(null);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [deleteIdx, setDeleteIdx] = React.useState(null);
  const [contacts, setContacts] = React.useState(getDefaultContacts());
  const [search, setSearch] = React.useState("");
  const [editContact, setEditContact] = React.useState(null);
  const [editIdx, setEditIdx] = React.useState(null);


  const addContact = (contact) => {
    setContacts((prev) => addContactOp(prev, contact));
    toast({ message: "Contact added successfully!", positive: true });
  };
  const handleEdit = (contact, id) => {
    setEditContact(contact);
    setEditIdx(id);
  };
  const handleUpdate = (contact) => {
    setContacts((prev) => editContactOp(prev, editIdx, contact));
    setEditContact(null);
    setEditIdx(null);
    toast({ message: "Contact edited successfully!", positive: true });
  };

  const handleDeleteClick = (id) => {
    setConfirmOpen(true);
    setDeleteIdx(id);
  };

  const handleDeleteConfirm = () => {
    setContacts((prev) => deleteContact(prev, deleteIdx));
    setConfirmOpen(false);
    setDeleteIdx(null);
  };

  const handleModalClose = () => {
    setEditContact(null);
    setEditIdx(null);
  };

  return (
    <>
      <Grid style={{ marginBottom: 24 }}>
        <Grid.Row columns={2} verticalAlign="middle">
          <Grid.Column width={12}>
            <Input
              icon={{ name: "search", circular: false, link: false }}
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              contacts={filterContacts(contacts, search)}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              onShowDetail={(contact) => {
                setDetailContact(contact);
                setDetailOpen(true);
              }}
            />
            <DeleteConfirm
              open={confirmOpen}
              onCancel={() => setConfirmOpen(false)}
              onConfirm={handleDeleteConfirm}
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
