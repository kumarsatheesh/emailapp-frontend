import React,{useState,useEffect} from "react";
import List from '../../components/List';
import Sidebar from '../../components/Sidebar';
import { sentEmails } from '../../actions/users';
// import "./styles.css";
export default function SentMail() {
const [emailList,setEmailList]=useState([])
    const userData = async() =>{
        const emails =await sentEmails();
        if(emails.success){
            setEmailList(emails.userdata)
        }
    }

    useEffect(()=>{
        userData();
    },[])
    return (
        <>
      <Sidebar onMailsend={userData}/>
        <List emailList={emailList} type="sent"/>
        </>
  
    );
}