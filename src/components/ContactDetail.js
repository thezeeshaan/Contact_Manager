import React from "react";
import {
  Card,
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Image,
  Icon,
} from "semantic-ui-react";

function ContactDetail({ contact }) {
  if (!contact) return null;
  return (
    <Card centered style={{ maxWidth: 400, margin: "0 auto" }}>
      <Image src={contact.image} wrapped ui={false} />
      <CardContent>
        <CardHeader>{contact.name}</CardHeader>
        <CardDescription>
          <span>
            <Icon name="phone" />
            {`+${contact.phone}`}
          </span>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        {contact.email && (
          <div style={{ marginBottom: 8 }}>
            <Icon name="mail" />
            {contact.email}
          </div>
        )}
        {contact.location && (
          <div>
            <Icon name="map marker alternate" />
            {contact.location}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ContactDetail;
