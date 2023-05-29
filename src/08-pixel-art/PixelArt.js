import React, { useState } from "react";

function ColorPicker({ setSelectedColor }) {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color, border: "1px solid black" }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel({ selectedColor }) {
  const [backgroundColor, setBackgroundColor] = useState("lightGrey");
  return (
    <button
      onClick={() => setBackgroundColor(selectedColor)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor,
        margin: "1px",
      }}
    />
  );
}

function Pixels({ selectedColor }) {
  const pixels = [];
  for (let i = 0; i < 100; i++)
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [selectedColor, setSelectedColor] = React.useState("");
  return (
    <div>
      <ColorPicker setSelectedColor={setSelectedColor} />
      <Pixels selectedColor={selectedColor} />
    </div>
  );
}
