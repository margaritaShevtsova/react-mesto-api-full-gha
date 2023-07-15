class Api {
  constructor({ adress }) {
    this._adress = adress;
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(this._adress + "/users/me", {
      credentials: 'include',
    }).then((res) => {
      return this._checkResponseStatus(res);
    });
  }

  setUserInfo({ name, descr }) {
    return fetch(this._adress + "/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        about: descr,
      }),
    }).then((res) => {
      return this._checkResponseStatus(res);
    });
  }

  getInitialCards() {
    return fetch(this._adress + "/cards", {
      credentials: 'include',
    }).then((res) => {
      return this._checkResponseStatus(res);
    });
  }

  postCard({ name, link }) {
    return fetch(this._adress + "/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return this._checkResponseStatus(res);
    });
  }

  deleteCard(cardId) {
    return fetch(this._adress + "/cards/" + cardId, {
      method: "DELETE",
      credentials: 'include',
    }).then((res) => {
      return this._checkResponseStatus(res);
    });
  }

  changeAvatar({ avatar }) {
    return fetch(this._adress + "/users/me/avatar", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      return this._checkResponseStatus(res);
    });
  }

  changeLikeCardStatus(cardId, notLiked) {
    if (notLiked) {
      return fetch(this._adress + "/cards/" + cardId + "/likes", {
        method: "PUT",
        credentials: 'include',
      }).then((res) => {
        return this._checkResponseStatus(res);
      });
    } else {
      return fetch(this._adress + "/cards/" + cardId + "/likes", {
        method: "DELETE",
        credentials: 'include',
      }).then((res) => {
        return this._checkResponseStatus(res);
      });
    }
  }
}

const api = new Api({
  adress: "http://localhost:4000"
});

export default api;