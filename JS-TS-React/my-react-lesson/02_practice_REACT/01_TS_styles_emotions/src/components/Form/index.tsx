const Form = () => {

  const handleSubmit = () => {
    //todo
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Form;
