import './index.scss' ;
import { Link } from 'react-router-dom';

export default function Sobre () {
    return (
    <div className="sobre">

        <div className="cabecalho">
                <div className="pri">
                    <img src="/assets/image/img.frei.png" alt="" />
                
                    <h1 className='p1'> React FreiS </h1>
                </div>

                <div className="seg">
                   <Link to='/'>
                        <h1 className="inicio"> Inicio </h1>
                    </Link> 
                    
                    
                    <h1 className="sobre"> Sobre </h1>
                </div>

        </div>
            <h1 id='titulo'> Sobre </h1>

        <div className="o">
            <p> Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. </p>

            <p>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.
            Estamos ansiosos para ver seu progresso e sucesso!</p>

            <img src="/assets/image/img.frei.png" alt="" />
        </div>

    </div>
    );
}