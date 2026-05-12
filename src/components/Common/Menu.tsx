import styled from '@emotion/styled';
import logo from '@images/logo.png';
import { Menu as MenuIcon, Search } from 'lucide-react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  z-index: 100;

  @media (min-width: 768px) {
    max-width: 768px;
    height: 80px;
    margin: 0 auto;
  }
`;

const Logo = styled.h1`
  margin: 0;

  a {
    display: flex;
  }

  img {
    width: 40px;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 50%;
    background-color: var(--color-white);
    object-fit: cover;

    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const MenuList = styled.ul`
  display: none;
  gap: 40px;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  a,
  button {
    position: relative;
    font-size: 20px;
    gap: 2px;

    &:hover {
      text-shadow: 0 0 0.5px currentColor;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: currentColor;
      transition: width 0.2s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuIcon = styled.button`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Menu() {
  return (
    <Nav>
      <Logo>
        <a href="/">
          <img src={logo} alt="main logo" />
        </a>
      </Logo>

      <MobileMenuIcon>
        <MenuIcon />
      </MobileMenuIcon>

      <MenuList>
        <MenuItem>
          <a href="/about">about</a>
        </MenuItem>
        <MenuItem>
          <a href="/posts">posts</a>
        </MenuItem>
        <MenuItem>
          <a href="/portfolio">portfolio</a>
        </MenuItem>
        <MenuItem>
          <button type="button">
            <Search size={20} />
            search
          </button>
        </MenuItem>
      </MenuList>
    </Nav>
  );
}
