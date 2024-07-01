import React from "react";
import "./styles.css";

interface ButtonProps {
    onClick: () => void;
    text: string;
    disabled?: boolean;
}

export class Button extends React.Component<ButtonProps, object> {
    render() {
        const { text, onClick, disabled } = this.props;

        return (
            <div>
                <button
                disabled={disabled}
                className="button" 
                onClick={onClick}>
                {text}
                </button>
            </div>
        );
    }
}