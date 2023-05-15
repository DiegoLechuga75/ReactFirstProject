import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {

    //Destructiuración
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const estiloTitulo = {borderColor: colorPrimario}
    const colorFondo = {backgroundColor: colorSecundario}

    return <section className="equipo" style={colorFondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo