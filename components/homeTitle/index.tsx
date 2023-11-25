'use client'

import useWindowSize from '@/hooks/useWindowSize'
import * as S from './styled'

const HomeTitle = () => {
  const { width } = useWindowSize();

  return (
  <S.Wrapper screenSize={width}>
    George H, full-stack web developer and software engineer
  </S.Wrapper>)
}

export default HomeTitle;