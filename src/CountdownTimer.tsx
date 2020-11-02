import React, { FC, HTMLAttributes } from "react";
import "./CountdownTimer.css";
import TimeUnitInput from "./TimeUnitInput";
import PlayIcon from "./icons/play.svg";
// import PauseIcon from "./icons/pause_circle_outline_24px.svg";

export interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {
    onStop?: () => void;
    onReset?: () => void;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

export const CountdownTimer: FC<CountdownTimerProps> = () => {
    return (
        <div className="countdown-timer-container">
            <div className="countdown-timer-input-fields">
                <TimeUnitInput />
                <span>:</span>
                <TimeUnitInput />
                <span>:</span>
                <TimeUnitInput />
            </div>

            <div className="countdown-timer-actions">
                <button className="countdown-timer-action">
                    <PlayIcon />
                </button>
            </div>
        </div>
    );
};
