import React, { useState } from "react";

function NewFactForm({ setFacts, categories, setShowForm }) {
  const [text, setText] = useState("My boyfriend is the best.");
  const [source, setSource] = useState("https://example.com");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function handleSubmit(e) {
    e.preventDefault();

    if (text && source && category && textLength <= 200) {
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      setFacts((fact) => [newFact, ...fact]);
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        type="url"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        autoComplete="off"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name[0].toUpperCase()}
            {category.name.slice(1)}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

export default NewFactForm;
