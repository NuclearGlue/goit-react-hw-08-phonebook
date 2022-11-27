import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/user/operations';
import style from './LoginForm.module.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );
  };

  const handleInputChange = event => {
    if (event.currentTarget.name === 'email') {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === 'password') {
      setPassword(event.currentTarget.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          Email
          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className={style.label}>
          Password
          <input
            className={style.input}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>

        <button className={style.button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
