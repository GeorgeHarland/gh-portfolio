'use client'

import useWindowSize from '@/hooks/useWindowSize'
import * as S from './styled'

type Props = {
  oneCol: string;
  twoCol: string;
}

const TwoColContent = ({oneCol, twoCol}: Props) => {
  const { width } = useWindowSize();

  return (
  <S.Wrapper screenSize={width}>
    <S.Column>Latest blog posts: </S.Column>
    <S.Column>Featured projects: </S.Column>
  </S.Wrapper>)
}

export default TwoColContent;