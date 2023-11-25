import useWindowSize from '@/hooks/useWindowSize';
import * as S from './styled'
import Link from 'next/link';
import { breakpoints } from '@/styles';

const NavBar = () => {
  const { width } = useWindowSize();

  if (width >= breakpoints.tablet) {
    return (
      <S.Wrapper screenSize={width}>
        <Link href='/blog'>Blog</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/links'>Links</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </S.Wrapper>
    )
  } else {
    return (
      <S.MobileWrapper screenSize={width}>
        <Link href='/contact'>CV</Link>
        <Link href='/contact'>Contact</Link>
      </S.MobileWrapper>
    )
  }
}

export default NavBar;