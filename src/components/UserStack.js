import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/UserStack.module.css";
import ViewContext from "../appView-context";
import axios from "axios";

const UserStack = (props) => {
  const view = useContext(ViewContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  
  const[filteredUsers,setFilteredUsers] = useState([]);
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  let user = 67;
  let i = 0;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://deaksappbe.herokuapp.com/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            secret_token: localStorage.getItem("JWtToken"),
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        // //console.log(data,"......");
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    fetchUsers();
  }, []); //console.log(users);
 useEffect(()=>{
 
if(props.filterOption == "All"){
  setFilteredUsers(users);
}else if(props.filterOption == "Authorized"){
  setFilteredUsers(users.filter((user)=>user.accountStatus == "Authorized"));
}else if(props.filterOption == "Pending"){
  setFilteredUsers(users.filter((user)=>user.verificationStatus == "Pending"));
}else if(props.filterOption == "Unauthorized"){
  setFilteredUsers(users.filter((user)=>user.accountStatus == "Unauthorized" && user.verificationStatus == "Not Submitted"));
}else if(props.filterOption == ""){
  setFilteredUsers(users);
}
else{
  // for (i = 0; i < users.length; i++) {
  //   td = tr[i].getElementsByTagName("td")[0];
  //   if (td) {
  //     txtValue = td.textContent || td.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       tr[i].style.display = "";
  //     } else {
  //       tr[i].style.display = "none";
  //     }
  //   } 
  // }

  setFilteredUsers(users.filter((user)=>user.name.toUpperCase().indexOf(props.filterOption.toUpperCase())> -1 ));
}

 },[props.filterOption])
  const editUser = (event) => {
    var select = users.filter((usr) => {
      return usr._id == event.target.value;
    });

    props.editUser({ user: select[0], action: "edit" });

    view.handleAppView("user-details");
  };
const deleteUser = async(e)=>{

  var userId = e.target.value;
  // console.log(userId,".......userId");
 const data = {"_id": userId};
 axios
 .post(`https://deaksappbe.herokuapp.com/deleteUser`, data)
 .then((resp) => {
   console.log("resp", resp);
 })
 .then(() => {});


}

  return (
    <React.Fragment>
      <table className={`table ${styles.table}`}>
        <thead className="thead-light">
          <tr>
            <th scope="col">
              #<i className="bi bi-sort-numeric-up"></i>
            </th>
            <th scope="col">
              Name<i className="bi bi-sort-numeric-up"></i>
            </th>
            <th scope="col">Account Status</th>
            <th scope="col">NRIC</th>
            
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => {
            i++;
            return (
              <tr key={user._id}>
                <th scope="row">{i}</th>
                <td>{user.name}</td>
                <td style={{color:user.accountStatus == "Authorized" ?"green" : user.verificationStatus ==
"Pending" ? "blue" : "red"
 }}>{user.verificationStatus == "Pending" ? `${user.accountStatus} - (${user.verificationStatus})` : user.accountStatus }</td>
                <td>{user.NRIC}</td>
                
                <td>
                  <button
                    className="btn btn-sm btn-danger mr-1"
                    onClick={editUser}
                    value={user._id}
                  >
                    Edit
                  </button>
                 
                  <button className="btn btn-sm btn-danger mr-1" onClick={deleteUser} value={user._id}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default UserStack;
