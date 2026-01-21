import Image from "next/image"

import * as Styled from "./Styled"

import avatar from "@/assets/avatar.png"
import pointsIcon from "@/assets/icons/points.svg"
import subscriptionsIcon from "@/assets/icons/subscriptions.svg"
import strainsIcon from "@/assets/icons/strains.svg"
import nutrientsIcon from "@/assets/icons/nutrients.svg"
import clsx from "clsx"

const content = {
  name: "Sade",
  data: [
    { number: "987", label: "Points to Spend", icon: pointsIcon },
    { number: "001", label: "Subscriptions", icon: subscriptionsIcon },
    { number: "024", label: "Strains Delivered", icon: strainsIcon },
    { number: "020", label: "Nutrients Delivered", icon: nutrientsIcon },
  ],
}

const Welcome = () => {
  return (
    <Styled.Welcome>
      <h1 className={Styled.welcomeText}>
        Welcome bac
        <Styled.Asterisk />,
        <Styled.Name>
          <Image
            alt={`${content.name} avatar`}
            height={24}
            src={avatar}
            width={24}
          />
          {content.name}
        </Styled.Name>
      </h1>

      <Styled.Data>
        {content.data.map(({ icon, number, label }) => (
          <li key={label}>
            <span className={clsx(Styled.welcomeText, "number")}>
              <Image alt={`${label} icon`} height={24} src={icon} width={24} />
              {number}
            </span>
            <span className="label">{label}</span>
          </li>
        ))}
      </Styled.Data>
    </Styled.Welcome>
  )
}

export default Welcome
