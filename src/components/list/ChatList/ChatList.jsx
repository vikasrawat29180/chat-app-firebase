import { useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [addModule, setAddModule] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addModule ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={()=> setAddModule((prev)=>!prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jane doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jane doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jane doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jane doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
            <span>Jane doe</span>
            <p>Hello</p>
        </div>
      </div>
      {addModule && <AddUser/>}
    </div>
  );
};
export default ChatList;
