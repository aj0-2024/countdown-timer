import React, { FC } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const TimerDisplay: FC<{
    expiryTime: Date;
}> = props => {
    const { expiryTime } = props;
    const timeFromNow = dayjs(expiryTime).fromNow(true);
    return <div>{timeFromNow}</div>;
};

export default TimerDisplay;
