import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../api/common";
import CardContainer from "../../components/CardContainer";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState<any>();
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      getUserData();
    }
    didMountRef.current = true;
  }, [id]);

  const getUserData = async () => {
    const data = await getUserById(id);
    setUser(data);
  };

  return (
    <div className="profile container">
      {user && (
        <>
          <div className="user-cont">
            <div className="img-cont">
              <img src={`${user.imageUrl}?v=${id}`} alt="user" />
            </div>
            <fieldset className="info">
              <legend>Info</legend>
              <strong>
                {user.prefix} {user.name} {user.lastName}
              </strong>
              <i>{user.title}</i>
              <p>
                <u>Email:</u> {user.email}
              </p>
              <p>
                <u>Ip Address:</u> {user.ip}
              </p>
              <p>
                <u>Ip Address:</u> {user.ip}
              </p>
              <p>
                <u>Job Area:</u> {user.jobArea}
              </p>
              <p>
                <u>Job Type:</u> {user.jobType}
              </p>
            </fieldset>
            <fieldset className="address">
              <legend>Address</legend>
              <strong>
                {user.company.name} {user.company.suffix}
              </strong>
              <p>
                <u>City:</u> {user.address.city}
              </p>
              <p>
                <u>Country:</u> {user.address.country}
              </p>
              <p>
                <u>State:</u> {user.address.state}
              </p>
              <p>
                <u>Street Address:</u> {user.address.streetAddress}
              </p>
              <p>
                <u>ZIP:</u> {user.address.zipCode}
              </p>
            </fieldset>
          </div>
          <h2 className="friends">Friends:</h2>
          <CardContainer id={id} />
        </>
      )}
    </div>
  );
}

export default Profile;
