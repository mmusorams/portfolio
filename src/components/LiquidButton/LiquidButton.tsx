import "./LiquidButton.css";
import type { ReactNode } from "react";

type LiquidButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    active?: boolean;
};

function LiquidButton({
    children,
    onClick,
    active = false
}: LiquidButtonProps) {

    return (

        <button
            className={`liquid-button ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {children}
        </button>

    );

}

export default LiquidButton;