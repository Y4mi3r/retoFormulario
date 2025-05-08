const { useState } = React;

function Formulario() {
  // Estado que guarda los valores del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = e => {
    const { name, value } = e.target;
    
  // Actualiza el estado manteniendo los otros campos sin modificar
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = e => {
    e.preventDefault();
    alert("Datos enviados correctamente\n");
    
  // Reinicia los campos del formulario
    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    });
  };

  return (
    <div className="form-container">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

// Punto de entrada: renderiza el componente en el elemento con id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Formulario />);
