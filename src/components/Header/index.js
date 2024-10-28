import DisplayDropdown from "../DropDownDisplay";
import "./index.css";

export default function Header({
  grouping,
  setGrouping,
  ordering,
  setOrdering,
}) {
  return (
    <header>
      <DisplayDropdown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </header>
  );
}
