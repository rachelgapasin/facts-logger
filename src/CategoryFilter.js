import React from "react";

function CategoryFilter({ categories, setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories" onClick={() => setCurrentCategory("all")}>All</button>
        </li>
        {categories.map((category) => (
          <li key={category.name} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: category.color }}
              onClick={() => setCurrentCategory(category.name)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
