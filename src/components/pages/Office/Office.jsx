import React, {useRef} from "react";
import { useSelector } from "react-redux";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import { allowAccess } from "../../../store/actionCreators/actionCreatePageElements";
import MassageCard from "./massageCard/MassageCard";
import { url } from "../../../App";
import "./Office.scss";
import axios from "axios";
import Button from "../../UI elements/Button";
import {logDOM} from "@testing-library/react";
import Messages from "./Messages/Messages";
import MyCars from "./MyCars/MyCars";
import AdminPanel from "./AdminPanel/AdminPanel"

const Office = () => {


  const navigate = useNavigate();
  const inputButton = useRef()
  const user = useSelector((state)=> state.pageElements.currentUser)
  // user && navigate('/')
  const exitFromOffice = () => {
    navigate("/");
    localStorage.removeItem("loginedUser");
    allowAccess(null);
  };
  const refreshData = () => {
    axios.get(url+`users/${user.id}`)
        .then(resp => allowAccess(resp.data))
  }

  const loadAvatar = (e) => {
    const files = Array.from(e.target.files)

    files.forEach(file => {
        console.log(file)
        const reader = new FileReader()

        reader.onload = (e) => {
          user.avatar = e.target.result
          console.log(user)
          axios.put(url+`users/${user.id}`, user).then((resp)=>{allowAccess(resp.data)})
        }

        reader.readAsDataURL(file)
    })
}
  const triggerButton = () => {
    inputButton.current.click()
  }

  return (
      user &&
      <>
        <section className="office">
          <div className="larger__container">

            <div className="client">
              <div className="client__avatar" >
                <div className="client__foto" onClick={triggerButton}>
                  <img src={user.avatar} alt="foto" />
                </div>
                <p>Alex</p>
                <input type="file" ref={inputButton} onChange={loadAvatar}/>
              </div>
              {user.isAdmin && <Button onClick={()=>{refreshData(); navigate('admin_panel')}} text='Admin panel'/>}
              <Button onClick={()=>{refreshData(); navigate('messages')}} text='Massages'/>
              <Button onClick={refreshData} text='Refresh'/>
              <Button onClick={()=>{navigate(`my_cars/${user.id}`)}} text='My Cars'/>
              <Button onClick={exitFromOffice} text='Exit'/>
            </div>

            <div className="route__container">
              <Routes>
                <Route path='admin_panel' element={<AdminPanel />}/>
                <Route path='messages' element={<Messages massages={user.massages} OwnerId={user.id}/>}/>
                <Route path='my_cars/:userId' element={<MyCars/>}/>
              </Routes>
            </div>
          </div>
        </section>
      </>
  );
};

export default Office;
