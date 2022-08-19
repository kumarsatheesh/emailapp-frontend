//import useState hook to create menu collapse state
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiSend } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

import Model from "../Model";


import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = ({ onMailsend }) => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            <Menu iconShape="square">
              <MenuItem onClick={handleShow} icon={<AiOutlinePlus />}>
                {!menuCollapse && "Compose"}
              </MenuItem>
            </Menu>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem onClick={() => navigate("/")} icon={<GrMail />}>
                {!menuCollapse && "All Inboxes"}
              </MenuItem>
              <MenuItem onClick={() => navigate("/sent")} icon={<BiSend />}>
                {!menuCollapse && "Sent"}
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <Model show={show} handleClose={handleClose} onMailsend={onMailsend} />
      </div>
    </>
  );
};

export default Header;
