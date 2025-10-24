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
        boxShadow: isDark
          ? "0 4px 24px 0 rgba(45,140,255,0.18), 0 1.5px 0 0 #2d8cff"
          : "0 4px 24px 0 rgba(45,140,255,0.12), 0 1.5px 0 0 #2d8cff",
        border: isDark ? "1.5px solid #2d8cff" : "1.5px solid #8ed0f9",
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
          <Button
            icon
            basic
            size="small"
            className="card-action-btn"
            style={{
              borderRadius: 8,
              background: isDark ? "#23272f" : "#f4f4f6",
              color: isDark ? "#2d8cff" : "#23272f",
              border: isDark ? "1.5px solid #2d8cff" : "1.5px solid #8ed0f9",
            }}
            onClick={e => {
              e.stopPropagation();
              onEdit && onEdit();
            }}
          >
            <Icon name="edit" style={{ color: isDark ? "#2d8cff" : "#23272f" }} />
          </Button>
          <Button
            icon
            basic
            size="small"
            className="card-action-btn"
            style={{
              borderRadius: 8,
              background: isDark ? "#23272f" : "#fff",
              color: isDark ? "#ff4d4f" : "#b71c1c",
              border: isDark ? "1.5px solid #ff4d4f" : "1.5px solid #ffb3b3",
              transition: 'background 0.2s, color 0.2s',
            }}
            onClick={e => {
              e.stopPropagation();
              onDelete && onDelete();
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = isDark ? "#3a2323" : "#ffeaea";
              e.currentTarget.style.color = "#ff4d4f";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = isDark ? "#23272f" : "#fff";
              e.currentTarget.style.color = isDark ? "#ff4d4f" : "#b71c1c";
            }}
          >
            <Icon name="trash alternate" style={{ color: isDark ? "#ff4d4f" : "#b71c1c" }} />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ContactCard;

