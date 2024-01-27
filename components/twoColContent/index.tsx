'use client'

import useWindowSize from '@/hooks/useWindowSize'
import * as S from './styled'
import Tooltip from '../tooltipOnCursor';

const TwoColContent = () => {
  const { width } = useWindowSize();

  return (
  <S.Wrapper screenSize={width}>
    <S.Column>
      Latest blog posts:
      <S.ContentCard>November Meetups</S.ContentCard>
      <S.ContentCard>Random Tower Writeup</S.ContentCard>
      <S.ContentCard>Why Next.js</S.ContentCard>
    </S.Column>
    <S.Column>
      Featured projects:
      <Tooltip text="RandomTower - Phaser.js tower survival game">
        <S.ContentCard>
          <S.CardImage src='/randomtower.png' alt='Random Tower Screenshot'/>
        </S.ContentCard>
      </Tooltip>
      <Tooltip text="E-sports Global Leaderboards Site + API">
        <S.ContentCard>
          <S.CardImage src='/bluebuff.png' alt='E-sports Leaderboards Site Screenshot'/>
        </S.ContentCard>
      </Tooltip>
      <Tooltip text="Inventory Management Simulator">
        <S.ContentCard>
          <S.CardImage src='/inventory.png' alt='Inventory Management Simulator Screenshot'/>
        </S.ContentCard>
      </Tooltip>
    </S.Column>
  </S.Wrapper>)
}

export default TwoColContent;