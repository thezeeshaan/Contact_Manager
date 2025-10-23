import React from "react";
import Navbar from "./components/Navbar";
import ContactCardList from "./components/ContactCardList";
import { Container } from "semantic-ui-react";  
import ContactListWrapper from "./components/ContactListWrapper";
function App() {
  return (
    <>
      <Navbar />
      <Container style={{ padding: "0 150px" }}>
        <ContactListWrapper/>
      </Container>
    </>
  );
}

export default App;
