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
