import { colors } from "@/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-size: 32px;
  align-items: center;
  padding: 2rem 3rem;
  margin-left: 10%;
  margin-top: 3%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  font-weight: 400;
  letter-spacing: 0.075ch;
  gap: 1.75rem;
  width: fit-content;
  height: 80px;
  background-color: ${colors.turquoise};

  a:hover {
    transform: scale(1.1);
    font-weight: 450;
  }
`
