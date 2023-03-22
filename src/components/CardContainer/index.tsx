import "./style.scss";
import { User } from "../../types";
import { useEffect, useState } from "react";
import { getUserFriends, getUserList } from "../../api/common";
import CardItem from "../CardItem";
import Loader from "../Loader";

interface Props {
  id?: string;
}

let page: number = 0;
let scrolling: boolean = true;

function CardContainer({ id }: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setUsers([]);
    getUsers();
  }, [id]);

  useEffect(() => {
    document.addEventListener("scroll", endScrollEvent);
    return () => document.removeEventListener("scroll", endScrollEvent);
  }, [id]);

  // reset
  useEffect(() => {
    return () => {
      page = 0;
      scrolling = true;
    };
  }, [id]);

  const endScrollEvent = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (scrolling) {
        scrolling = false;
        getUsers();
        scrolling = true;
      }
    }
  };

  const getUsers = async () => {
    setLoading(true);
    const data: any = id
      ? await getUserFriends(id, page, 20)
      : await getUserList(page, 20);

    if (!data.pagination.nextPage) return;
    setLoading(false);
    setUsers((prev) => [...prev, ...data.list]);
    page++;
  };

  return (
    <>
      <div className="card-cont">
        {users &&
          users.map((user: User, idx: number) => (
            <CardItem
              key={idx}
              id={user.id}
              imageUrl={`${user.imageUrl}?v=${user.id}`}
              prefix={user.prefix}
              name={user.name}
              lastName={user.lastName}
              title={user.title}
            />
          ))}
      </div>
      <div className="loader-cont">{!loading && <Loader />}</div>
    </>
  );
}

export default CardContainer;
