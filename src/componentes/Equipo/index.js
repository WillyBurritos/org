import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba (colorPrimario,0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                type="color"
                className="input-color"
                value={hexToRgba (colorPrimario,0.6)}
                onChange={(evento) => {
                    actualizarColor(evento.target.value,id);
                }}  //esta función se ejecuta cada vez que hay un cambio en el input
                
                
                
                
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador   //Por cada colaborador que exista en el arreglo de colaboradores, va a generar un nuevo componente colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo