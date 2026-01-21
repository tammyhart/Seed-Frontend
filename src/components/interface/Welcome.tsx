import Image from "next/image"
import * as Styled from "./Styled"
import clsx from "clsx"

import avatar from "@/assets/avatar.png"

import PointsIcon from "@/components/icons/Points"
import SubscriptionsIcon from "@/components/icons/Subscriptions"
import StrainsIcon from "@/components/icons/Strains"
import NutrientsIcon from "@/components/icons/Nutrients"

const content = {
  name: "Sade",
  data: [
    { number: "987", label: "Points to Spend", Icon: PointsIcon },
    { number: "001", label: "Subscriptions", Icon: SubscriptionsIcon },
    { number: "024", label: "Strains Delivered", Icon: StrainsIcon },
    { number: "020", label: "Nutrients Delivered", Icon: NutrientsIcon },
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
        {content.data.map(({ Icon, number, label }) => (
          <li key={label}>
            <span className={clsx(Styled.welcomeText, "number")}>
              <Icon />
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
