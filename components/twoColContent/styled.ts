import { breakpoints } from "@/styles";
import styled from "styled-components";

type WrapperProps = {
  screenSize: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  /* font-size: ${({ screenSize }) => screenSize > breakpoints.bigtablet ? '28px' : '24px'}; */
  /* padding: ${({ screenSize }) => screenSize > breakpoints.bigtablet ? '2rem 3rem' : '1rem 0'}; */
  /* margin-left: ${({ screenSize }) => screenSize > breakpoints.bigtablet ? '7.5%' : '3%'}; */
  /* font-weight: 500;
  letter-spacing: 0.075ch; */
  justify-content: space-around;
  /* gap: 2rem; */
  width: 100%;
  /* height: 80px; */
`

export const Column = styled.div``
