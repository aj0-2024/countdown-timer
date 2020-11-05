import React, { FC, HTMLAttributes } from "react";
import "./CountdownTimer.css";
import TimeUnitInput from "./TimeUnitInput";
import PlayIcon from "./icons/play.svg";
// import PauseIcon from "./icons/pause.svg";

export interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {
    onStop?: () => void;
    onReset?: () => void;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

export const CountdownTimer: FC<CountdownTimerProps> = () => {
    const onChangeHours = () => {};
    const onChangeMinutes = () => {};
    const onChangeSeconds = () => {};

    return (
        <div className="countdown-timer-container">
            <div className="countdown-timer-input-fields">
                <TimeUnitInput
                    label={"Hours"}
                    value={0}
                    onChange={onChangeHours}
                />
                <span>:</span>
                <TimeUnitInput
                    label={"Minutes"}
                    value={0}
                    onChange={onChangeMinutes}
                />
                <span>:</span>
                <TimeUnitInput
                    label={"Seconds"}
                    value={0}
                    onChange={onChangeSeconds}
                />
            </div>

            <div className="countdown-timer-actions">
                <button className="countdown-timer-action-button">
                    <img
                        className="countdown-timer-icon"
                        src={PlayIcon}
                        alt="Play"
                    />
                </button>
            </div>
        </div>
    );
};
