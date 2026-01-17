import * as Styled from "./Styled"

const Header = (): React.ReactElement => (
  <Styled.Header>
    <Styled.Nav>
      <Styled.Logo aria-label="Seed Health" href="https://seed.com">
        <span aria-hidden="true">[logo]</span>
      </Styled.Logo>

      <Styled.NavLink href="#">Shop</Styled.NavLink>
      <Styled.NavLink href="#">Science</Styled.NavLink>
      <Styled.NavLink href="#">Learn</Styled.NavLink>
    </Styled.Nav>

    <Styled.Nav>
      <Styled.NavLink href="#">Account</Styled.NavLink>
      <Styled.NavLink href="#">Refer</Styled.NavLink>
    </Styled.Nav>
  </Styled.Header>
)

export default Header
