import React, { useMemo } from "react";
import Card from "../Card";
import "./index.css";
import { getPriorityIcon, getStatusIcon } from "../../utils/helper";
import UserIcon from "../UserIcon";

function Column({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy].name;
  }, [grouping, groupBy]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user")
      return (
        <UserIcon
          name={userIdToData[groupBy].name}
          available={userIdToData[groupBy].available}
        />
      );
  }, [grouping, groupBy]);

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {/* <img
            src="/assets/icons/To-do.svg"
            alt="To-do icon"
            style={{ width: 12, height: 12, color: "#e2e2e2" }}
          /> */}
          {icon}
          <div className="column-title">
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <img
            src="/assets/icons/add.svg"
            alt="Add icon"
            style={{ width: 12, height: 12, color: "#797d84" }}
          />
          {/* <GrAdd color="#797d84" size={12} /> */}
          <img
            src="/assets/icons/3_dot_menu.svg"
            alt="3 dot menu"
            style={{ width: 12, height: 12, color: "#797d84" }}
          />
        </div>
      </div>
      {/* <Card />
      <Card /> */}
      <div className="cards-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
          />
        ))}
      </div>
    </div>
  );
}
export default Column;
