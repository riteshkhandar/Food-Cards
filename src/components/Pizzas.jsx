// src/components/Pizzas.jsx
import { pizzas } from "../food";
import Card from "./Card";

const Pizzas = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {pizzas.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Pizzas;
