import * as React from "react";

export interface SomeComponentProps { compiler: string; framework: string; }

export const SomeComponent = (props: SomeComponentProps) =>
    <div>
      Hello from {props.compiler} and {props.framework}
    </div>;
