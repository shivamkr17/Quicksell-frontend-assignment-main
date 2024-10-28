import React from "react";
import "./index.css";
import UserIcon from "../UserIcon/index";
import { getStatusIcon } from "../../utils/helper";

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className="card">
      <div className="top-container">
        {/* <div className="ticket-id">CAM-11</div>
        <UserIcon name="Ayush Munot" /> */}
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {/* <img
          src="/assets/icons/To-do.svg"
          alt="To-do icon"
          style={{ width: 12, height: 12, color: "#e2e2e2" }}
        />
        <div className="title">Conduct Security Vulnerability Assessment</div> */}
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">
          <img
            src="/assets/icons/3_dot_menu.svg"
            alt="3 dot menu"
            style={{ width: 12, height: 12, color: "#797d84" }}
          />
        </div>
        {/* <div className="tag-container">
          <div className="tag-icon"></div>
          <div className="tag-text">Feature Request</div>
        </div> */}
        {ticket.tag.map((t) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
