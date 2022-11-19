
import './App.css';
import './apps.css';
import React, { useState } from 'react';
import GridLayout from "react-grid-layout";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";



function Workspace() {
   
  const [somethingHere, setSomethingHere] = useState();
  function closeApp(){
    setSomethingHere();
  }
  function renderApp(id){
   setSomethingHere(
    <Card className='app_container'>
           <div className="app_container_topBar">
            <h3>{id}</h3>
           <svg 
            className="close_window w-6 h-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor"
            onClick={closeApp} 
            >

               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
 
           </div>
             <h1 class="something">{id}</h1>
     </Card>
   )
 }
 const layout = [
  { i: "app1", x: 0, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    renderApp(id);
    console.log('app to open : ',id)
} },
  { i: "app2", x: 1, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    renderApp(id);
    console.log('app to open : ',id)
} },
  { i: "app3", x: 2, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    renderApp(id);
    console.log('app to open : ',id)
} },
  { i: "app4", x: 3, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    renderApp(id);
    console.log('app to open : ',id)
} },
  { i: "app5", x: 4, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    renderApp(id
      
      );
    console.log('app to open : ',id)
} }
];
const elements = layout.map(item=>{
  
    return(
        
     <Card 
      key={item.i} 
      className="w-96 app_card" 
      onClick={event=>{item.openApp(event,item.i)}}
      >
        <Typography variant="h3" className="card_title">{item.i}</Typography>
     </Card>
    )
 })






  return (
    <>
        <GridLayout 
        layout={layout} 
        cols={5} 
        rowHeight={300} 
        width={1000}
        containerWidth={300}
        >
           {
            elements
           }
          </GridLayout>
          
        <div>
            {somethingHere}
        </div>
      </>
  );
}

export default Workspace;
