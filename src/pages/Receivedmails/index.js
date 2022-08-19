import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import List from '../../components/List';
import { inbox } from '../../actions/users';
import Sidebar from '../../components/Sidebar';
// import "./styles.css";
export default function Receivedmails() {
    const [emailList, setEmailList] = useState([]);

    const userData = async () => {
        const emails = await inbox();
        if (emails.success) {
            setEmailList(emails.userdata)
        }
    }

    useEffect(() => {
        userData();
    }, [])
    return (
        <>
            <Sidebar onMailsend={userData} />
            <List emailList={emailList} type="received" />
        </>
    );
}