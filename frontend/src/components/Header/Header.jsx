import MarcaOxean from "../../assets/brand.svg";
import "./Header.css"
import { Link } from "react-router-dom"

function Header(){
    return (
        <header className="cabecalho">
            <div className='container'> {/* inicio do container*/}
                <div className='row align-items-center'>{/* inicio do row*/}

                    <div className='col-2'>
                        <img src={MarcaOxean} alt="" style={{height: 50}}/>
                    </div>
                    
                    <div className='col-10'>
                        <Link className="link" to="/">Inicio</Link>
                        <Link className="link" to="/cadastro">Cadastro</Link>
                    </div> 

                </div>{/* FIm do row*/}
            </div>{/* Fim do container*/}
        </header>
    );

        
}

export default Header;