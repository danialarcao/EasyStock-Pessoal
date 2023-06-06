import logo from "../../images/LOGOeasystock.png";
import { BarraPrincipal, ImgLogo, Nav } from "./NavBarStyled";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <Nav>
                <div>
                    <Link to="/">
                        <ImgLogo src={logo} alt="Logo EasyStock" />
                    </Link>
                </div>

                <BarraPrincipal>
                    <ul>
                        <li>
                            <Link to="/">INICIO</Link>
                        </li>

                        <li>
                            <Link to="/caixa">CAIXA</Link>
                        </li>
                        <li>
                            <Link to="/cliente">CLIENTE</Link>
                        </li>
                        <li>
                            <Link to="/estoque">ESTOQUE</Link>
                        </li>

                        <li>
                            <Link to="/relatorio">RELATÓRIO</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">DASHBOARD</Link>
                        </li>
                    </ul>
                </BarraPrincipal>
            </Nav>
        </>
    );
}
