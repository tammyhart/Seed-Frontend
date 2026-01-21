import { css } from "@linaria/core"
import { styled } from "@linaria/react"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: var(--gap-8);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const Logo = styled.a`
  padding-left: var(--gap-32);
  padding-right: var(--gap-16);

  font-size: 20px;
  color: var(--actions-primary);
`

export const NavLink = styled.a`
  padding-inline: var(--gap-24);

  color: var(--actions-primary);
  font-size: var(--typography-size-400);
  font-weight: var(--typography-weight-300);
  letter-spacing: -0.0025em;
  line-height: var(--typography-size-1200);
`

export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-inline: var(--gap-48);
`

export const welcomeText = css`
  font-size: var(--typography-size-600);
  font-weight: var(--typography-weight-300);
  line-height: 1.2;
  letter-spacing: -0.0015em;
`

export const Asterisk = styled.span`
  display: inline-block;
  transform: translateY(-0.75rem);
  width: 0.375rem;
  height: 0.375rem;

  border-radius: 50%;
  background: var(--actions-primary);
`

export const Name = styled.span`
  display: flex;
  align-items: center;
  gap: var(--gap-4);

  color: var(--highlight-color);
`

export const Data = styled.ul`
  display: flex;
  gap: var(--gap-32);

  li {
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: var(--gap-4);

    .number {
      display: flex;
      align-items: center;
      gap: var(--gap-8);

      svg {
        flex-shrink: 0;
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    .label {
      font-size: 0.625rem;
      font-weight: var(--typography-weight-300);
      line-height: 1.4;
    }
  }
`

export const Timeline = styled.div`
  position: absolute;
  inset: auto var(--gap-80) var(--gap-40);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 2px;

  background: var(--scrim-glass-dark-35);

  align-items: center;
`

export const TimelinePoint = styled.button`
  position: relative;
  z-index: 10;

  background: var(--timeline-color);
  color: var(--actions-primary);
  font-size: var(--typography-size-350);
  font-weight: var(--typography-weight-500);
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--gap-24) var(--gap-16);

  background: var(--color-primary-white);
`

export const Pills = styled.div`
  display: flex;
  gap: var(--gap-8);
`

export const Pill = styled.p`
  padding-inline: var(--gap-8);
  color: var(--color-primary-seed-green);
  border-radius: var(--radius-medium);
  border: 0.0625rem solid currentColor;
  font-size: var(--typography-size-300);
  font-weight: var(--typography-weight-500);
  line-height: 1.25;
`
