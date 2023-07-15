import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  userData
}) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  function signOut(){
    navigate('/sign-in');
  }

  return (
    <>
      <Header>
        <div>
          <span className="header__descr">{userData || ""}</span>
          <button className="header__btn" onClick={signOut}>Выйти</button>
        </div>
      </Header>
      <main>
        <section className="profile">
          <div className="profile__wrapper">
            <button className="profile__avatar-btn" onClick={onEditAvatar}>
              <div
                className="profile__avatar"
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
              ></div>
              <div className="profile__overlay"></div>
            </button>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-btn profile__btn"
                onClick={onEditProfile}
              ></button>
              <p className="profile__descr">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="profile__add-btn profile__btn"
            onClick={onAddPlace}
          ></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
            {cards.map((card) => {
              return (
                <Card
                  card={card}
                  onCardClick={onCardClick}
                  key={card._id}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
