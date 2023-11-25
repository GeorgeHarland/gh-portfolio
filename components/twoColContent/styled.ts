import { breakpoints, colors } from "@/styles";
import styled from "styled-components";

type WrapperProps = {
  screenSize: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  font-size: 20px;
  /* padding: ${({ screenSize }) => screenSize > breakpoints.bigtablet ? '2rem 3rem' : '1rem 0'}; */
  /* margin-left: ${({ screenSize }) => screenSize > breakpoints.bigtablet ? '7.5%' : '3%'}; */
  /* font-weight: 500;
  letter-spacing: 0.075ch; */
  justify-content: space-around;
  /* gap: 2rem; */
  width: 100%;
  /* height: 80px; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  background-color: white;
  width: 35rem;
  height: 4rem;
  display: flex;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`

export const CardText = styled.div`
  /* position: absolute; */
  font-size: 14px;
  padding: 0.1rem 0.2rem;
`
