const containerStyle = {
  display: "flex",
  gap: "1rem",
};
const itemContainerStyle = {
  display: "flex",
  gap: ".2rem",
};
const textStyle = {
  margin: "0",
};

export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        {Array.from({ length: maxRating }, (val, i) => (
          <i class="bi bi-star"></i>
        ))}
      </div>
      <p style={textStyle}>4</p>
    </div>
  );
}
