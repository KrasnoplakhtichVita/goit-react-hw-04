import css from "./ImageCard.module.css";
import { FaUser, FaLocationDot, FaHeart } from "react-icons/fa6";

export default function ImageCard({
  item: {
    alt_description: description,
    urls: { small, regular },
    user: { username, location },
    likes,
  },
  onOpenModal,
}) {
  return (
    <div className={css.container}>
      <img
        className={css.image}
        src={small}
        alt={description}
        onClick={() => onOpenModal(regular, description)}
      />
      <div className={css.information}>
        <p>
          <FaUser size="12px" /> {username}
        </p>
        {location && (
          <p>
            <FaLocationDot size="12px" /> {location}
          </p>
        )}
        <p>
          <FaHeart size="12px" /> {likes}
        </p>
      </div>
    </div>
  );
}
