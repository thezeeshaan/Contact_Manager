import React from "react";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import ContactListWrapper from "./components/ContactListWrapper";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDark } = useTheme();
  return (
    <>
      <Navbar />
      <Container
        fluid
        style={{
          padding: "0 256.6px",
          background: isDark ? "#181c24" : "#f4f4f6",
          boxShadow: isDark ? "0 2px 16px 0 #23272f" : "0 2px 16px 0 #e6f6ff",
          minHeight: "100vh",
          transition: "background 0.2s, color 0.2s",
        }}
      >
        <ContactListWrapper />
      </Container>
    </>
  );
}

export default App;
