import Image from "next/image"

import audio from "@/assets/audio.svg"
import bottomNav from "@/assets/bottom-nav.png"

import * as Styled from "./Styled"

const content = {
  day: 60,
  products: ["DS-01®"],
}

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Pills>
        <Styled.Pill>Day {content.day}</Styled.Pill>
        {content.products.map(product => (
          <Styled.Pill key={product}>{product}</Styled.Pill>
        ))}
      </Styled.Pills>

      <Image
        alt="Seed Health Navigation"
        height={48}
        src={bottomNav}
        width={458}
      />

      <Image
        alt="Audio Player Interface (Visual Demo)"
        height={28}
        src={audio}
        width={198}
      />
    </Styled.Footer>
  )
}

export default Footer
