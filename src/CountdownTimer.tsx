import React, { FC, HTMLAttributes } from "react";
import "./CountdownTimer.css";

export interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {
    onTimerEnd: () => void;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

export const CountdownTimer: FC<CountdownTimerProps> = () => {
    return <div className="countdown-timer-container"></div>;
};
