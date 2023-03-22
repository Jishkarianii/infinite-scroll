import "./style.scss";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";

function CardItem({ id, imageUrl, prefix, name, lastName, title }: User) {
  const navigate = useNavigate();

  return (
    <div className="card-item" onClick={() => navigate(`/user/${id}`)}>
      <img src={imageUrl} alt="user" />
      <strong>
        {prefix} {name} {lastName}
      </strong>
      <p>{title}</p>
    </div>
  );
}

export default CardItem;
