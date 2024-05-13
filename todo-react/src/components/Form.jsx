import { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleUserIdChange(event) {
    setUserId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name, parseInt(userId)); // Передаем и ID пользователя
    setName('');
    setUserId('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleNameChange}
        placeholder="Task Name"
      />
      <input
        type="number"
        id="user-id-input"
        className="input input__lg"
        name="userId"
        value={userId}
        onChange={handleUserIdChange}
        placeholder="User ID"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
