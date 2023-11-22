import * as S from './styled'
import Link from 'next/link';

const WebsiteHeader = () => {
  return (
  <S.Wrapper>
    <Link href='/blog'>Blog</Link>
    <Link href='/projects'>Projects</Link>
    <Link href='/links'>Links</Link>
    <Link href='/about'>About</Link>
    <Link href='/contact'>Contact</Link>
  </S.Wrapper>)
}

export default WebsiteHeader;