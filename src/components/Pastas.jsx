// src/components/Pastas.jsx
import { pastas } from "../food";
import Card from "./Card";

const Pastas = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {pastas.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Pastas;
