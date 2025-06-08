// export default function ErrorMessage({ message }) {
//   return <p style={{ color: "red" }}>{message}</p>;
// }
export default function ErrorMessage({ message }) {
  return (
    <p
      style={{
        color: "red",
        textAlign: "center",
        margin: "20px auto 0",
        border: "1px solid red",
        width: "300px",
        borderRadius: "5px",
      }}
    >
      {message}
    </p>
  );
}
