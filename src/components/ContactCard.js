import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { useTheme} from "../context/ThemeContext";
import { Icon } from "semantic-ui-react";

function ContactCard({ contact, onEdit, onDelete, onShowDetail }) {
  const { name, phone, image } = contact;
  const { isDark } = useTheme();
  return (
    <Card
      fluid
      style={{
        boxShadow: "none",
        border: "none",
        padding: 0,
        marginBottom: 16,
        background: isDark ? "#23272f" : "#fff",
        color: isDark ? "#f8f8ff" : "#23272f",
        cursor: onShowDetail ? 'pointer' : undefined
      }}
      onClick={e => {
        // Prevent click if edit/delete button is pressed
        if (e.target.closest('.card-action-btn')) return;
        if (onShowDetail) onShowDetail();
      }}
    >
      <Card.Content style={{ display: "flex", alignItems: "center", padding: 0, background: "transparent" }}>
        <Image
          src={image}
          size="tiny"
          style={{ borderRadius: 8, width: 56, height: 56, objectFit: "cover", margin: 16 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 18,
              color: isDark ? "#f8f8ff" : "#23272f",
              marginBottom: 2
            }}
          >
            {name}
          </div>
          <div style={{ color: isDark ? "#b7bbc8" : "#8b8b8b", fontSize: 15, fontWeight: 400 }}>
            {phone && `+${phone}`}
          </div>
          {/* <div style={{ color: isDark ? "#b7bbc8" : "#8b8b8b", fontSize: 15, fontWeight: 400 }}>
            {email}
          </div>
          <div style={{ color: isDark ? "#b7bbc8" : "#8b8b8b", fontSize: 15, fontWeight: 400 }}>
            {city}
          </div> */}
        </div>
        <div style={{ marginRight: 24, display: 'flex', gap: 8 }}>
          <Button icon basic size="small" className="card-action-btn" style={{ borderRadius: 8 }} onClick={e => { e.stopPropagation(); onEdit && onEdit(); }}>
            <Icon name="edit" />
          </Button>
          <Button icon basic color="red" size="small" className="card-action-btn" style={{ borderRadius: 8 }} onClick={e => { e.stopPropagation(); onDelete && onDelete(); }}>
            <Icon name="trash alternate" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ContactCard;

