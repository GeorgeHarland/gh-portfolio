'use client';

import NavBar from '@/components/navbar';
import * as S from './styled';

const DefaultTemplate = ({ children }: { children: React.ReactNode }) => (
  <div>
    <NavBar />
    <S.Main>{children}</S.Main>
  </div>
);

export default DefaultTemplate;
