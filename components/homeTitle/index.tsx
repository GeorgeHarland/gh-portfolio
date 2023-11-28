'use client'

import useWindowSize from '@/hooks/useWindowSize'
import * as S from './styled'

const HomeTitle = () => {
  const { width } = useWindowSize();

  return (
    <S.Wrapper screenSize={width}>
      George H - Full-stack software engineer based in Brighton, UK
    </S.Wrapper>
  )
}

export default HomeTitle;