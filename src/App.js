import React from 'react'
import {Table} from '../src/Tabla/Table'

let encabezado=[
  {mostrar:"ID",nombre:"phoneNumber"},
  {mostrar:"Nombre",nombre:"fullname"}
], cuerpo=[
  {phoneNumber: "3006007050",fullname: "cliente generico"},
  {phoneNumber: "3107605879",fullname: "Rolando Rosales"}
]


function App() {
  return (
    <>
      <h1>Ejemplo de uso del componente Table</h1>
      <Table encabezado={encabezado} datos={cuerpo} estilo={"table table-striped"}/>
    </>
  );
}

export default App;
