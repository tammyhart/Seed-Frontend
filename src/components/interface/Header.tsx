import { HEADER_LINKS } from "@/components/content"

import * as Styled from "./Styled"

const Header = () => (
  <Styled.Header>
    <Styled.Nav>
      <Styled.Logo aria-label="Seed Health" href="https://seed.com">
        <span aria-hidden="true">[logo]</span>
      </Styled.Logo>

      {HEADER_LINKS.primary.map(({ href, label }) => (
        <Styled.NavLink key={label} href={href}>
          {label}
        </Styled.NavLink>
      ))}
    </Styled.Nav>

    <Styled.Nav>
      {HEADER_LINKS.secondary.map(({ href, label }) => (
        <Styled.NavLink key={label} href={href}>
          {label}
        </Styled.NavLink>
      ))}
    </Styled.Nav>
  </Styled.Header>
)

export default Header
