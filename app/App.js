import  React,{useState,useEffect}from'react';
//react-Native built in UI;
import{ScrollView,  Text} from  'react-native';
import {io}   from 'socket.io-client'; //io creates and return socket connection obj;
export  default  function App() {
    const[leads,setLeads]=useState([]);//empty array to host list of leads;
    useEffect(() => {
        const s=io("https://charmaine-juridical-interrogatorily.ngrok-free.dev",{transports  : ['websocket']});//s is the live socket connection;
        s.on( 'new_lead',(l)=> setLeads(p=>  [l,   ...p]));
        return ()=>s.disconnect();
  },[]);
  return (
    <ScrollView> 
        {leads.map ((l ,i)=><Text   key={i}>{l.full_name}    |{l.email}|{l.phone_number}</Text>)}</ScrollView>
  );

}