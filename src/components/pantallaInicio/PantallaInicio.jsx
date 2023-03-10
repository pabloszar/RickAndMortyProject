import portal from './portalRyM.png';
import style from './inicio.module.css';

const PantallaInicio = () => {
    return (
        <div className="portalnicio">
            <img src={portal} className={style.appLogo} alt="portal Rick y Morty" />
        </div>
    )
}

export default PantallaInicio;