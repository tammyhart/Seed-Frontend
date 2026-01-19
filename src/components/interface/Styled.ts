import { styled } from "@linaria/react"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: var(--gap-8);
  padding-left: var(--gap-16);

  border-top-left-radius: var(--radius-large);
  border-top-right-radius: var(--radius-large);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const Logo = styled.a`
  font-size: 20px;
  color: inherit;
  text-decoration: none;
`

export const NavLink = styled.a`
  padding: var(--gap-8) var(--gap-24);

  text-decoration: none;
  color: inherit;
  font-size: var(--gap-16);
  font-weight: 350;
  letter-spacing: -0.25%;
  line-height: 140%;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: var(--gap-24);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Welcome = styled.div`
  position: absolute;
  top: var(--gap-24);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  color: #fff;
  font-size: 24px;
`

export const Timeline = styled.div`
  position: fixed;
  bottom: 80px;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--gap-24);

  &::before,
  &::after {
    content: "";
    width: 1px;
    height: 10px;
    background: #fff;
    margin-top: -4px;
  }
`
