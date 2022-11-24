import Navbar from './Componentes/Navbar/Navbar.js';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.js';
import React from "react";
const App = () => {
  const nombre = "Gaston";
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={nombre} />
    </>
  );
}
export default App;

