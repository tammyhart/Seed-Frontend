import * as Styled from "./Styled"

const Footer = (): React.ReactElement => {
  return (
    <Styled.Footer>
      <span>© 2024 SEED HEALTH</span>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          INSTAGRAM
        </a>
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          TWITTER
        </a>
      </div>
    </Styled.Footer>
  )
}

export default Footer
