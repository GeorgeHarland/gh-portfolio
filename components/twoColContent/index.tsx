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
    <S.Column>
      Latest blog posts:
      <S.ContentCard><S.CardText>November Meetups</S.CardText></S.ContentCard>
      <S.ContentCard><S.CardText>Random Tower Writeup</S.CardText></S.ContentCard>
      <S.ContentCard><S.CardText>Why Next.js</S.CardText></S.ContentCard>
    </S.Column>
    <S.Column>
      Featured projects:
      <div>
        <S.ContentCard>
          <S.CardImage src='https://private-user-images.githubusercontent.com/37070520/284096574-ad689bc9-4fc7-4a59-a86f-7533d055f0b7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMTIyNjMsIm5iZiI6MTcwMTIxMTk2MywicGF0aCI6Ii8zNzA3MDUyMC8yODQwOTY1NzQtYWQ2ODliYzktNGZjNy00YTU5LWE4NmYtNzUzM2QwNTVmMGI3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIyNTI0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg4MzMzNDRmNzVmNTEwMmQwMTQ0Y2ViMTdkMmQyNjVjYjE2YTIyYzc5MzlmMGE5MTM4ODVmZGY5MTEyMmY5ZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5giqhqSKcBsxnSf6D5sFct2AXpGIRVGcxJTQmYyMHgc' alt='Random Tower Screenshot'/>
        </S.ContentCard>
        <S.CardText>
          Random Tower - Tower Survival Game
        </S.CardText>
      </div>
      <S.ContentCard><S.CardText>E-sports Global Leaderboards Site + API</S.CardText></S.ContentCard>
      <S.ContentCard><S.CardText>Inventory Management Simulator</S.CardText></S.ContentCard>
    </S.Column>
  </S.Wrapper>)
}

export default TwoColContent;