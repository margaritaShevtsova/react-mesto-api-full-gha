import { useState } from "react";

export default function AuthForm ({handleFormSubmit, children, btnName, title}) {
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value,
        });
      };

      function handleSubmit(e) {
        const { password, email } = formValue;
        e.preventDefault();
        handleFormSubmit(password, email);
      }

    return (
        <div className="register">
        <h2 className="register__title">{title}</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            className="register__input"
            name="email"
            type="email"
            required
            minLength="2"
            maxLength="40"
            placeholder="Email"
            value={formValue.email || ""}
            onChange={handleChange}
          />
          <input
            className="register__input"
            name="password"
            type="password"
            required
            minLength="2"
            maxLength="40"
            placeholder="Пароль"
            value={formValue.password || ""}
            onChange={handleChange}
          />
          <button className="register__btn" onSubmit={handleSubmit}>
            {btnName}
          </button>
          {children}
        </form>
      </div>
    );
}