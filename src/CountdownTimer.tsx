import React, { FC, HTMLAttributes, useState } from "react";
import TimeInput, { TimeValue } from "./TimeInput";
import TimerDisplay from "./TimerDisplay";
import "./CountdownTimer.css";

import PlayIcon from "./icons/play.svg";
// import PauseIcon from "./icons/pause.svg";

export interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {
    onStop?: () => void;
    onReset?: () => void;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

export const CountdownTimer: FC<CountdownTimerProps> = () => {
    const [timeValue, setTimeValue] = useState<TimeValue>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [timeExpiry, setTimeExpiry] = useState<Date>(new Date());

    const toggleTimer = () => {
        const timeNow = new Date();
        timeNow.setHours(timeNow.getHours() + timeValue.hours);
        timeNow.setMinutes(timeNow.getMinutes() + timeValue.minutes);
        timeNow.setSeconds(timeNow.getSeconds() + timeValue.seconds);
        setTimeExpiry(timeNow);
    };

    return (
        <div className="countdown-timer-container">
            <TimeInput value={timeValue} onChange={setTimeValue} />
            <TimerDisplay expiryTime={timeExpiry} />
            <div className="countdown-timer-actions">
                <button
                    onClick={toggleTimer}
                    className="countdown-timer-action-button"
                >
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
