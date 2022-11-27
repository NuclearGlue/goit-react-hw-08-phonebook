import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from 'redux/user/operations';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newUser({ name: name, email: email, password: password }));
  };

  const handleInputChange = event => {
    if (event.currentTarget.name === 'email') {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === 'password') {
      setPassword(event.currentTarget.value);
    } else if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>

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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
