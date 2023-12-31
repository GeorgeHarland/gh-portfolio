import { breakpoints, colors } from "@/styles";
import styled from "styled-components";

type WrapperProps = {
  screenSize: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  font-size: 32px;
  align-items: center;
  padding: 2rem 2.5rem;
  margin-left: ${({ screenSize }) => screenSize > breakpoints.bigtablet ? '6%' : '3%'};
  margin-top: 3%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  font-weight: 400;
  letter-spacing: 0.075ch;
  gap: 1.75rem;
  width: fit-content;
  height: 80px;
  background-color: ${colors.turquoiseBanners};

  a:hover {
    transform: scale(1.1);
    font-weight: 450;
  }
`

export const MobileWrapper = styled.div<WrapperProps>`
  display: flex;
  font-size: 28px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  font-weight: 400;
  letter-spacing: 0.075ch;
  gap: 1.75rem;
  height: 80px;
  background-color: ${colors.turquoiseBanners};

  a:hover {
    transform: scale(1.1);
    font-weight: 450;
  }
`