import React, { useState } from 'react';
import * as S from './styled';

interface Props {
    children: React.ReactNode;
    text: string;
}

const Tooltip = ({ children, text }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <S.TooltipContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
            <S.TooltipText x={position.x} y={position.y} isVisible={isVisible}>
                {text}
            </S.TooltipText>
        </S.TooltipContainer>
    );
};

export default Tooltip;
