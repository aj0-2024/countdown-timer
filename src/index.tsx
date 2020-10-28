import React, { FC, HTMLAttributes } from 'react';

export interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const CountdownTimer: FC<CountdownTimerProps> = () => {
    return <div />;
};
