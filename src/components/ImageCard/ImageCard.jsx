import css from "./ImageCard.module.css";
export default function ImageCard({ img }) {
  return (
    <div className={css.item}>
      <img src={img.urls.small} alt={img.alt_description || "Image"} />
    </div>
  );
}
