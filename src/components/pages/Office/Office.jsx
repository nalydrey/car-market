import React, { useRef, useState} from "react";
import { useSelector } from "react-redux";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import { url } from "../../../App";
import "./Office.scss";
import axios from "axios";
import Button from "../../UI elements/Button/Button";
import Messages from "./Messages/Messages";
import MyCars from "./MyCars/MyCars";
import AdminPanel from "./AdminPanel/AdminPanel"
import Setting from "./Setting/Setting";
import {allowAccess} from "../../../store/actionCreators/actionCreatorCurrentUser";
import MyHistory from "./MyCars/MyHistory";
import Users from "./users/Users";
import foto from '../../../assets/icons/avatardefault_92824.png'

const Office = () => {

  const [activeButton, setActive] = useState('Setting')
  const navigate = useNavigate();
  const inputButton = useRef()
  const user = useSelector((state)=> state.currentUser)
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
                  <img src={user.avatar ? user.avatar : foto} alt="foto" />
                </div>
                <p>{user.user.firstName} {user.user.lastName}</p>
                <input type="file" ref={inputButton} onChange={loadAvatar}/>
              </div>
              {user.isAdmin && <Button onClick={(val)=>{
                setActive(val); refreshData(); navigate('admin_panel')}} activeName={activeButton} text='Admin panel'/>}
              <Button onClick={(val)=>{setActive(val); refreshData(); navigate('messages')}} activeName={activeButton}  text='Massages'/>
              <Button onClick={(val)=>{setActive(val); refreshData(); navigate('.')}} activeName={activeButton}  text='Setting'/>
              <Button onClick={refreshData} text='Refresh'/>
              <Button onClick={(val)=>{setActive(val); navigate(`my_cars/${user.id}`)}} activeName={activeButton}  text='My Cars'/>
              <Button onClick={(val)=>{setActive(val); navigate(`my_history`)}} activeName={activeButton}  text='My History'/>
              {user.isAdmin &&<Button onClick={(val)=>{setActive(val); navigate(`clients`)}} activeName={activeButton}  text='Clients'/>}
              <Button onClick={exitFromOffice} text='Exit'/>
            </div>

            <div className="route__container">
              <Routes>
                <Route index element={<Setting/>}/>
                <Route path='admin_panel' element={<AdminPanel />}/>
                <Route path='messages' element={<Messages massages={user.massages} OwnerId={user.id}/>}/>
                <Route path='my_cars/:userId' element={<MyCars/>}/>
                <Route path='my_history' element={<MyHistory carIds={user.viewedCars} userId={user.id}/>}/>
                <Route path='clients' element={<Users />}/>
              </Routes>
            </div>
          </div>
        </section>
      </>
  );
};

export default Office;
