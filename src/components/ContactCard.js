import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { useTheme } from "../context/ThemeContext";

function ContactCard({ name, phone, email, city, image }) {
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
        color: isDark ? "#f8f8ff" : "#23272f"
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
            {phone && (phone.startsWith('+') ? phone : `+${phone}`)}
          </div>
          {/* <div style={{ color: isDark ? "#b7bbc8" : "#8b8b8b", fontSize: 15, fontWeight: 400 }}>
            {email}
          </div>
          <div style={{ color: isDark ? "#b7bbc8" : "#8b8b8b", fontSize: 15, fontWeight: 400 }}>
            {city}
          </div> */}
        </div>
        <div style={{ marginRight: 24 }}>
          <Button
            basic
            style={{
              background: isDark ? "#2d3138" : "#f4f4f6",
              color: isDark ? "#f8f8ff" : "#23272f",
              borderRadius: 20,
              fontWeight: 600,
              minWidth: 64
            }}
          >
            Play
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ContactCard;

