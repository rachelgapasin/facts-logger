import React from "react";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function Fact({ fact }) {
  return (
    <div>
      <li className="fact">
        <p>
          {fact.text}
          <a
            href={fact.source}
            target="_blank"
            rel="noreferrer"
            className="source"
          >
            (Source)
          </a>
        </p>
        <span
          className="tag"
          style={{
            backgroundColor: CATEGORIES.find(
              (category) => category.name === fact.category
            ).color,
          }}
        >
          {fact.category}
        </span>
        <div className="vote-buttons">
          <button>👍 {fact.votesInteresting}</button>
          <button>🤯 {fact.votesMindblowing}</button>
          <button>⛔️ {fact.votesFalse}</button>
        </div>
      </li>
    </div>
  );
}

export default Fact;
