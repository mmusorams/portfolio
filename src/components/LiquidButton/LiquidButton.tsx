import "./LiquidButton.css";
import type { ReactNode } from "react";

type LiquidButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

function LiquidButton({ children, onClick }: LiquidButtonProps) {
    return (
        <button
            className="liquid-button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default LiquidButton;