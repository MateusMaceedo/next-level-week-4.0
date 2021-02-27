import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export function Profile () {
  const { level } = useContext(ChallengesContext)
  return (
    <S.Wrapper>
      <img src="https://avatars.githubusercontent.com/u/63172367?s=400&amp;u=11fd26ea8a7f5663d7707d7ef254e4f8bfca1b05&amp;v=4" />
      <div>
        <strong>Mateus Macedo</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </S.Wrapper>
  )
}
