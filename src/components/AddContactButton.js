import { Button, Icon } from "semantic-ui-react";

function AddContactButton() {
  return (
    <Button icon
      labelPosition='left'
      style={{ fontWeight: 600, minWidth: 120, marginLeft: "auto" }}
    >
      <Icon name="plus" />
      Add Contact
    </Button>
  );
}

export default AddContactButton;
