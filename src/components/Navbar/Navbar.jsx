import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #0f172a;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  font-size: 1.5rem;
  color: #facc15;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #facc15;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Nav>
        <div>
          <Brand>Movie App</Brand>
        </div>
        <div>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movie/create">Add Movie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movie/popular">Popular</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movie/now">Now Playing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movie/top">Top Rated</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/counter">Counter</NavLink>
            </NavItem>
          </NavList>
        </div>
      </Nav>
    </NavbarContainer>
  );
}

export default Navbar;
