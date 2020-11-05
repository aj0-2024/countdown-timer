import React, { FC } from "react";
import "./TimeUnitInput.css";

const TimeUnitInput: FC<{
    label: string;
}> = props => {
    return (
        <div className="countdown-timer-time-unit-base">
            <input
                type="number"
                min={0}
                max={60}
                className="countdown-timer-time-unit-input"
            />
            <p className="countdown-timer-time-unit-label">{props.label}</p>
        </div>
    );
};

export default TimeUnitInput;
