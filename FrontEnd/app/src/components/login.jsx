import "./Login.css";
function Login() {
  return (
    <>
      <section className="login">
        <h2 className="loginTirulo">Inicia sesion</h2>
        <form action="/login" method="post">
          <label htmlFor="">
            <i className="fas fa-user"></i>
          </label>
          <input type="text" placeholder="Usuario" name="username" />
          <label htmlFor="">
            <i className="fas fa-lock"></i>
          </label>
          <input type="password" placeholder="Contrasenia" name="password" />
          <input type="submit" className="btn" />
        </form>
        <div className="link">
          <p>
            No tienes cuenta? <a href="/register"> Registrate </a>
          </p>
        </div>
        <div className="recuperar">
          <p>
            {" "}
            Olvide tu contrasenia? <a href="/recuperar"> Recuperar </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
