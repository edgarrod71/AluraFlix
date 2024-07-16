import styled from 'styled-components';
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri"; //addActivo
import { RiAddBoxLine } from "react-icons/ri"; //addInactivo
import Boton from '../Boton';

const HeaderS = styled.header`
    width: 100%;
    height: 100%;
    min-height: 100px;
    position: fixed;
    bottom: 0;
    background: var(--secondary-dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width > 980px) {
        position: relative;
        justify-content: space-between;
        min-height: 120px;
        height: 120px;
        padding: 0 20px;
    }
`;

const SombraS = styled.div`
    width: 100%;
    height: 4px;
    top: 0; left: 0;
    position: absolute;
    background: var(--main-blue);

    @media (width > 980px) {
        bottom: 0;
        top: auto;
    }
`;

export const LogoStyles = styled.img`
    display: none;

    @media (width > 980px) {
        display: block;
        height: 40px;
        width: auto;
    }
`;

const NaviS = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    @media (width > 980px) {
        width: auto;
        gap: 20pax;
    }
`;

const Header = ({logotipo}) => {
    return <>
        <HeaderS>
            <SombraS />
            <LogoStyles src={logotipo} alt='Logo de aluraFlix' />
            <NaviS>
                <Boton path='/' iconActive={<IoHome />} iconInactive={<IoHomeOutline />}>
                    Home
                </Boton>
                <Boton path='/add' iconActive={<RiAddBoxFill />} iconInactive={<RiAddBoxLine />}>
                    Nuevo video
                </Boton>
            </NaviS>
        </HeaderS>
    </>
};

export default Header;
