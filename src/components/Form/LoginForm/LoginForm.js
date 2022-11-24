import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/user/operations';

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
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
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
      <form onSubmit={handleSubmit}>
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
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
