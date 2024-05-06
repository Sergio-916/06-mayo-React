import "./Register.css";
function Register() {
  return (
    <>
      <section className="registro">
        <h2 className="registroTitulo">Registrate</h2>
        <form action="" method="post">
          <label htmlFor="nombre">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            required
            placeholder="Ingrese su nombre"
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingrese su email"
            required
          />
          <p id="emailError" style={{ color: "red" }}></p>
          <br />
          <label htmlFor="">Ingresa su contrasena:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingrese su password"
          />
          <p id="passwordError" style={{ color: "red" }}></p>
          <label htmlFor="">Confirme su contrasena:</label>
          <input
            type="password"
            name="password2"
            placeholder="Ingrese su password"
          />
          <button className="btn" type="submit">
            Registrarse
          </button>
        </form>
        <div className="link">
          <p>
            Tienes cuenta? <a href="/login"> Inicia sesion </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
