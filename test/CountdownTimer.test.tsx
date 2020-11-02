import React from "react";
import * as ReactDOM from "react-dom";
import { CountdownTimer } from "../dist";

describe("Thing", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<CountdownTimer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
