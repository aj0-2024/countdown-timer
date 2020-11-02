import React, { FC } from "react";
import "./TimeUnitInput.css";

const TimeUnitInput: FC = () => {
    return (
        <input
            type="number"
            min={0}
            max={60}
            className="countdown-timer-time-unit-input"
        />
    );
};

export default TimeUnitInput;
