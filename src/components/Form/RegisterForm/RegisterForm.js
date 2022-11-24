import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from 'redux/user/operations';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newUser({ name: name, email: email, password: password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
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
      <form onSubmit={handleSubmit}>
        <label className="form__label">
          Name
          <input
            className="form__input"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="form__label">
          Email
          <input
            className="form__input"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form__label">
          Password
          <input
            className="form__input"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>

        <button className="form__button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
