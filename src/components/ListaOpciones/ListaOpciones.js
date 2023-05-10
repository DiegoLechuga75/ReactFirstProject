import "./ListaOpciones.css"

const ListaOpciones = () => {

    //Map method -> arreglo.map((equipo, index del arreglo) =>{
    //    return <option><option/>
    //})
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión",
    ]

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones