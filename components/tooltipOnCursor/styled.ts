import styled from "styled-components";

interface TooltipTextProps {
  isVisible: boolean;
  x: number;
  y: number;
}

export const TooltipContainer = styled.div`
    display: inline-block;
`;

export const TooltipText = styled.span<TooltipTextProps>`
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    max-width: 160px;
    background-color: white;
    color: black;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;
    padding: 1px;
    position: fixed;
    z-index: 1;
    transform: translate(-50%, -100%);
    transition: opacity 0.3s;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    opacity: ${props => props.isVisible ? 1 : 0};
`;