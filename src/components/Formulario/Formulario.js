import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese su nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingrese el enlace de su foto" required/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario