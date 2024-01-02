import React from "react";
import "./categories.css";
import { categories } from "./categorieslist";

const Categories = () => {
  return (
    <div className="categories-wrap">
      <div className="categories-all">
        <h5>Categories</h5>
        <h2>Top Categories</h2>
        <div className="category-wrap">
          {categories.map((category) => {
            return (
              <div className="category-all">
                <div className="category-head">
                  <h4>{category.genre}</h4>
                  <img src={category.image} alt={category.genre} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
