'use client';

import WebsiteHeader from '@/components/websiteHeader';
import * as S from './styled';

const DefaultTemplate = ({ children }: { children: React.ReactNode }) => (
  <div>
    <WebsiteHeader />
    <S.Main>{children}</S.Main>
  </div>
);

export default DefaultTemplate;
