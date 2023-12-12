import { NavLink } from "react-router-dom";
import Menu from "./../../utils/Menu";
import styled from "styled-components";
import { useGlobalState } from "../../context/GlobalProvider";

const Navbar = () => {
  let { themes } = useGlobalState();

  return (
    <NavbarStyled theme={themes}>
      <article>
        <ul>
          {Menu.map(item => {
            let { link, title, id } = item;
            return (
              <li key={id}>
                <NavLink
                  to={link}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </article>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.section`
  background-color: ${props => props?.theme?.baseColor};
  height: ${props => props?.theme?.NavbarHeight};
  width: 100%;
  article {
    width: 90%;
    height: 70px;
    margin: 0 auto;
    align-items: center;
    display: flex;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  ul a {
    text-decoration: none;
    padding: 10px 20px;
    color: ${props => props.theme.textColor};
  }
  ul li a:hover {
    background-color: orange;
    color: #111;
  }
`;

export default Navbar;
