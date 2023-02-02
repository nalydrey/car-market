import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allowAccess } from "../../../store/actionCreators/actionCreatePageElements";
import MassageCard from "./massageCard/MassageCard";
import { url } from "../../../App";
import "./Office.scss";
import axios from "axios";

const Office = () => {

  const navigate = useNavigate();

  const user = useSelector((state)=> state.pageElements.currentUser)
  console.log(user);

  const exitFromOffice = () => {
    localStorage.removeItem("loginedUser");
    navigate("/");
    allowAccess(null);
  };

  const refreshData = () => {
    axios.get(url+`users/${user.id}`)
        .then(resp => allowAccess(resp.data))
  }

  const deleteMessage = (index) => {
    const newMassages = user.massages.filter((_, ind) => ind !==index )
    user.massages = newMassages
    axios.put(url+`users/${user.id}`, user).then((resp)=> {allowAccess(resp.data)})
  }

//   const loadFiles = (e) => {
//     const files = Array.from(e.target.files)
//
//     files.forEach(file => {
//         console.log(file)
//         const reader = new FileReader()
//
//         reader.onload = (e) => {
//             addImages(e.target.result)
//         }
//
//         reader.readAsDataURL(file)
//     })
// }

  return (
    <section className="office">
      <div className="larger__container">
      
        <div className="client">
          <div className="client__avatar">
            <div className="client__foto">
              <img src="" alt="foto" />
            </div>
            <p>Alex</p>
            <input type="file"/>
          </div>
          <button>Massages</button>
          <button onClick={exitFromOffice}>Exit</button>
          <button onClick={refreshData}>Refresh</button>
        </div>

        <div className="route__container">
          {user && user.massages.map((massage, i)=>{
            return <MassageCard {...massage} deleteMessage={deleteMessage} index={i} key={i}/>
          })}
        </div>
      </div>
    </section>
  );
};

export default Office;
