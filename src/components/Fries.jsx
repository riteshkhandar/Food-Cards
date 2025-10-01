// src/components/Fries.jsx
import { fries } from "../food";
import Card from "./Card";

const Fries = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {fries.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Fries;
