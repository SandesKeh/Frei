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
                    <Link to='/sobre'>
                        <h1 className="sobre"> Sobre </h1>
                    </Link>
                </div>
            </div>

                <h1 className='treino'> Escolha um treino...</h1>

            <div className="contener">
            
                <div className='divprinc'>
                    <div className='divcubo'></div>
                    <h1> Cupom de desconto </h1>
                    < p> Exercício 01</p>
                   
                </div>
                <div className='divprinc'>
                    <div className='divcubo1'></div>
                    <h1>Converter Kg/gramas </h1>
                    < p> Exercício 02</p>
                   
                </div>

                <div className='divprinc'>
                    <div className='divcubo2'></div>
                    <h1>Valor total por quantidade</h1>
                    < p> Exercício 03</p>
                </div>
                
                <div className='divprinc'>
                    <div className='divcubo3'></div>
                    <h1>Leitura de livro</h1>
                    < p> Exercício 04</p>
                </div>

                <div className='divprinc'>
                    <div className='divcubo4'></div>
                    <h1>Média de notas</h1>
                    < p> Exercício 05</p>
                </div>
                
                <div className='divprinc'>
                    <div className='divcubo5'></div>
                    <h1>Salário líquido</h1>
                    < p> Exercício 06</p>
                </div>
                
                <div className='divprinc'>
                    <div className='divcubo6'></div>
                    <h1>Cores primárias</h1>
                    < p> Exercício 07</p>
                </div>
                
                <div className='divprinc'>
                    <div className='divcubo7'></div>
                    <h1>Temperatura</h1>
                    < p> Exercício 08</p>
                </div>
                
                <div className='divprinc'>
                    <div className='divcubo8'></div>
                    <h1>Sorveteria</h1>
                    < p> Exercício 09</p>
                </div>

                <div className='divprinc'>
                    <div className='divcubo9'></div>
                    <h1>Calculo de IMC com histórico</h1>
                    < p> Exercício 10</p>
                </div>

                <div className='divprinc'>
                    <div className='divcubo10'></div>
                    <h1>Tabuada</h1>
                    < p> Exercício 11</p>
                </div>
                
                <div className='divprinc'>
                    <div className='divcubo11'></div>
                    <h1>Comparador de pessoas</h1>
                    < p> Exercício 12</p>
                </div>








                
            </div>
        </div>
    )
}