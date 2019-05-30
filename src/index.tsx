import * as React from "react";
import * as ReactDOM from "react-dom";

import { SomeComponent } from "./someComponent";

window.onload = function() {
    ReactDOM.render(
        <SomeComponent compiler="TypeScript" framework="React"/>,
        document.getElementById("wrapper")
    );
};
