import css from "./Card.module.css";
import { getUsers } from "./userAPI";
import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useParams } from "react-router-dom";

const Card = () => {
  const { page } = useParams();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async (page) => {
      const data = await getUsers(page);
      setUsers(data);
    };
    fetchData();
  }, [page]);
  console.log(users);
  //   const { tweets, avatar } = users;

  return (
    <div className={css.card}>
      <img alt="logo" className={css.logo} src={logo} />
      <div className={css.wrapper}>
        <div className={css.picture}></div>
        <div className={css.avatar}>
          {/* <img alt="avatar" src={avatar} className={css.avatar_picture} /> */}
        </div>
      </div>
      {/* <p className={css.tweets_text}> {tweets} tweets</p> */}

      {/* <p className={css.followers_text}>
        {followersNum.toLocaleString("en-US")} Followers
      </p> */}
      <div className={css.buttonBox}>
        {/* {isFollowing ? (
          <button
            type="button"
            className={`${css.button} ${css.buttonFollowing}`}
            onClick={onFollowingClick}
          >
            Following
          </button>
        ) : (
          <button type="button" className={css.button} onClick={onFollowClick}>
            Follow
          </button>
        )} */}
      </div>
    </div>
  );
};
export default Card;
