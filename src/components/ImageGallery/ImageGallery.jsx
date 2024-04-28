import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onOpenModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
}
