import React from "react";

function DeckLog({ log }) {
  return (
    <div>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default DeckLog;
