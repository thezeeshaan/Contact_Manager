import React from "react";
import Navbar from "./components/Navbar";
import ContactCardList from "./components/ContactCardList";
import { Container } from "semantic-ui-react";  

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <ContactCardList/>
      </Container>
    </>
  );
}

export default App;
