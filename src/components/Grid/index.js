import React, { useCallback, useMemo } from "react";
import "./index.css";
import Column from "../Column";

function Grid({ gridData, grouping, userIdToData }) {
  const keys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className="grid">
      {/* <Column />
      <Column />
      <Column />
      <Column />
      <Column /> */}
      {keys.map((k) => (
        <Column
          key={k}
          tickets={gridData[k]}
          grouping={grouping}
          groupBy={k}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
}

export default Grid;
