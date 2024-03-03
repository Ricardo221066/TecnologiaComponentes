import logo from './logo.svg';
import './App.css';

function Person(){
  return(
    <div className="person">
      <h3>Nuevo usuario </h3>
      <div className="form-container">
        <input className="form-element" type="text" placeholder="Usuario" />
        <input className="form-element" type="email" placeholder="Correo" />
        <input className="form-element" type="password" placeholder="Contraseña" />
      <div className="terms-container">
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms">Acepto términos y condiciones.</label>
      </div>
    </div>
    <div className="button-container">
    <button>Cancelar</button>
      <button>Aceptar</button>
    </div>
  </div>
    
    
  )
}

function App() {
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;
