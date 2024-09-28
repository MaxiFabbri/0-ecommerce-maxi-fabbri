// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   return(
//     <div>
//       <span>Mi primer APP con Vite</span>
//     </div>
//   )
// }
// export default App

import React, {useState} from 'react';
import fetchData from './components/fetchData.jsx' 
import './components/style.css';

function Loading() {
  const data =  { status: "loading"} // editar 
  
  const newData = async ()=>{
    try {
      newStatus = await fetchData()
      console.log(newStatus)
      // data.status = 
    } catch (err) {
      console.log(err)
    }
    newData()
  }
  // fetchData(); // editar

  return (
    <div style={{margin: "35px auto", textAlign: "center", justifyContent:"center"}}>
      Status: <strong>{ data.status }</strong>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Loading/>
    </div>
  );
}