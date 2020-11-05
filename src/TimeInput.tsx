import React, { FC } from "react";
import TimeUnitInput from "./TimeUnitInput";
import "./TimeInput.css";

export interface TimeValue {
    hours: number;
    minutes: number;
    seconds: number;
}

const TimeInput: FC<{
    value: TimeValue;
    onChange: (value: TimeValue) => void;
}> = props => {
    const { hours, minutes, seconds } = props.value;

    const setHours = (value: number) => {
        const updated = Object.assign({}, props.value, { hours: value });
        props.onChange(updated);
    };

    const setMinutes = (value: number) => {
        const updated = Object.assign({}, props.value, { minutes: value });
        props.onChange(updated);
    };

    const setSeconds = (value: number) => {
        const updated = Object.assign({}, props.value, { seconds: value });
        props.onChange(updated);
    };

    return (
        <div className="countdown-timer-input-fields">
            <TimeUnitInput label={"Hours"} value={hours} onChange={setHours} />
            <span>:</span>
            <TimeUnitInput
                label={"Minutes"}
                value={minutes}
                onChange={setMinutes}
            />
            <span>:</span>
            <TimeUnitInput
                label={"Seconds"}
                value={seconds}
                onChange={setSeconds}
            />
        </div>
    );
};

export default TimeInput;
