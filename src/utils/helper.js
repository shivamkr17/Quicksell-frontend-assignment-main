export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return (
        <img
          src="/assets/icons/To-do.svg"
          alt="To-do icon"
          style={{ width: 12, height: 12, color: "#e2e2e2" }}
        />
      );
    case "Todo":
      return (
        <img
          src="/assets/icons/To-do.svg"
          alt="To-do icon"
          style={{ width: 12, height: 12, color: "#e2e2e2" }}
        />
      );
    case "In progress":
      return (
        <img
          src="/assets/icons/in-progress.svg"
          alt="In Progress icon"
          style={{ width: 12, height: 12, color: "#f1ca4b" }}
        />
      );
    case "Done":
      return <img src="/assets/icons/Done.svg" alt="Done Icon" />;
    case "Canceled":
      return <img src="/assets/icons/Cancelled.svg" alt="Cancelled Icon" />;
    default:
      return <img src="/assets/icons/Cancelled.svg" alt="Cancelled Icon" />;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return (
        <img
          src="/assets/icons/3_dot_menu.svg"
          alt="3 dot menu"
          style={{ width: 12, height: 12, color: "#797d84" }}
        />
      );

    case "Low":
      return (
        <img
          src="/assets/icons/Low_Priority.svg"
          alt="Low Priority Icon"
          style={{ width: 12, height: 12, color: "#6b6f76" }}
        />
      );
    case "Medium":
      return (
        <img
          src="/assets/icons/Medium_Priority.svg"
          alt="Medium Priority Icon"
          style={{ width: 12, height: 12, color: "#6b6f76" }}
        />
      );
    case "High":
      return (
        <img
          src="/assets/icons/High_Priority.svg"
          alt="High Priority Icon"
          style={{ width: 12, height: 12, color: "#6b6f76" }}
        />
      );
    case "Urgent":
      return (
        <img
          src="/assets/icons/Urgent_Priority_grey.svg"
          alt="Urgent Priority grey icon"
          style={{ height: 12, width: 12, color: "#fc7840" }}
        />
      );
    default:
      return (
        <img
          src="/assets/icons/Urgent_Priority_colour.svg"
          alt="Urgent Priority colour icon"
          style={{ height: 12, width: 12 }}
        />
      );
  }
};
