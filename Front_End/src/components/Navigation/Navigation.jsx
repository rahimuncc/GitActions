import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Parts from "../Parts/Parts";
import Accessories from "../Accessories/Accessories";
import Clothing from "../Clothing/Clothing";
import axios from "axios";

const Navigation = () => {
  const [selectedSection, setSelectedSection] = useState("parts");
  const [categoriesID, setCategoriesID] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSectionClick = (section, categoriesId) => {
    setCategoriesID(categoriesId);
    setSelectedSection(section);
  };

  let mainBackgroundColor = "var(--color-primary)"; // Default background color

  if (selectedSection === "accessories") {
    mainBackgroundColor = "var(--color-primary)";
  } else if (selectedSection === "clothing") {
    mainBackgroundColor = "var(--color-primary)";
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/categories")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data); // Store the API response data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="navigationContainer">
      {/* <div className="sections">
        {categories.map((category) => (
          <span
            key={category.id}
            style={{
              backgroundColor:
                selectedSection === category.name.toLowerCase()
                  ? "var(--color-primary)"
                  : "var(--color-primary)",
            }}
            onClick={() =>
              handleSectionClick(category.name.toLowerCase(), category._id)
            }
          >
            {category.name}
          </span>
        ))}
      </div> */}
      <div className="sections">
        <span
          style={{
            backgroundColor:
              selectedSection === "parts"
                ? "var(--color-primary)"
                : "var(--color-secondary)",
            boxShadow:
              selectedSection === "parts"
                ? "gray 0px -6px 6px -6px"
                : "0px -2px 4px 0px gray inset",
            borderRadius: selectedSection === "parts" ? "0px 10px 0px 0px" : "0px",
          }}
          onClick={() => handleSectionClick("parts")}
        >
          Parts
        </span>
        <span
          style={{
            backgroundColor:
              selectedSection === "accessories"
                ? "var(--color-primary)"
                : "var(--color-secondary)",
            boxShadow:
              selectedSection === "accessories"
                ? "gray 0px -6px 6px -6px"
                : "-2px -2px 4px 0px gray inset",

                borderRadius: selectedSection === "accessories" ? "10px 10px 0px 0px" : "0px",
          }}
          onClick={() => handleSectionClick("accessories")}
        >
          Accessories
        </span>
        <span
          style={{
            backgroundColor:
              selectedSection === "clothing"
                ? "var(--color-primary)"
                : "var(--color-secondary)",

            boxShadow:
              selectedSection === "clothing"
                ? "gray 0px -6px 6px -6px"
                : "-2px -2px 4px 0px gray inset",

                borderRadius: selectedSection === "clothing" ? "0px 10px 0px 0px" : "0px",
          }}
          onClick={() => handleSectionClick("clothing")}
        >
          Clothing
        </span>
      </div>
      <div className="main" style={{ backgroundColor: mainBackgroundColor }}>
        {selectedSection === "parts" && <Parts categoriesID={categoriesID} />}
        {selectedSection === "accessories" && (
          <Accessories categoriesID={categoriesID} />
        )}
        {selectedSection === "clothing" && (
          <Clothing categoriesID={categoriesID} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
