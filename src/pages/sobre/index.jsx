import './index.scss' ;
import { Link } from 'react-router-dom';

export default function Sobre () {
    return (
    <div className="sobre">

        <div className="cabecalho">
                <div className="pri">
                    <img  className= " Imagem1"src="/assets/image/img.frei.png" alt="" />
                
                    <h1 className='p1'> React FreiS </h1>
                </div>

                <div className="seg">
                   <Link to='/'>
                        <h1 className="inicio"> Inicio </h1>
                    </Link> 
                    
                    
                    <h1 className="sobre"> Sobre </h1>
                </div>

        </div>
            <h1> Sobre </h1>
    </div>
    );
}