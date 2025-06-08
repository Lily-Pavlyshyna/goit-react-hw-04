import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}
