
import './App.css';
import './apps.css'
import GridLayout from "react-grid-layout";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

  
const layout = [
  { i: "app1", x: 0, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    console.log('app to open : ',id)
} },
  { i: "app2", x: 1, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    console.log('app to open : ',id)
} },
  { i: "app3", x: 2, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    console.log('app to open : ',id)
} },
  { i: "app4", x: 3, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    console.log('app to open : ',id)
} },
  { i: "app5", x: 4, y: 0, w: 1, h: 1,openApp:(e,id)=>{
    e.preventDefault()
    console.log('app to open : ',id)
} }
];
const elements = layout.map(item=>{
    return(
        
     <Card key={item.i} className="w-96" onClick={event=>{item.openApp(event,item.i)}}>
        <CardHeader color="blue" className="relative h-56">{item.i}</CardHeader>
     </Card>
    )
 })




function Workspace() {
   
  return (
    <>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
           {
            elements
           }
          </GridLayout>
          
        <div id="app_container">

        </div>
      </>
  );
}

export default Workspace;
