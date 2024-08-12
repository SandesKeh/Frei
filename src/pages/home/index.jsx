import './index.scss' ;
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div className="mae">
            <div className="cabecalho">
                <div className="pri">
                    <img  className= " Imagem1"src="/assets/image/img.frei.png" alt="" />
                
                    <h1 className='p1'> React FreiS </h1>
                </div>

                <div className="seg">
                    <h1 className="inicio"> Inicio </h1>
                    <h1 className="sobre"> Sobre </h1>
                </div>
            </div>
        </div>
    )
}