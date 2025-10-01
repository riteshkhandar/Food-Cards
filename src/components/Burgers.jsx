// src/components/Burgers.jsx
import { burgers } from "../food";
import Card from "./Card";

const Burgers = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {burgers.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Burgers;
