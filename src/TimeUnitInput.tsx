import React, { FC, ChangeEvent } from "react";
import "./TimeUnitInput.css";

const TimeUnitInput: FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
}> = props => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(event.target.value));
    };

    return (
        <div className="countdown-timer-time-unit-base">
            <input
                type="number"
                min={0}
                max={60}
                value={props.value}
                onChange={onChange}
                className="countdown-timer-time-unit-input"
            />
            <p className="countdown-timer-time-unit-label">{props.label}</p>
        </div>
    );
};

export default TimeUnitInput;
