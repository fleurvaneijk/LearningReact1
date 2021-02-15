/*
    FUNCTIONAL COMPONENT:

    - Functional components are simple functions, receiving props and returning a declaration
    - Use these as much as possible
    - You will not need "this" keyword
    - You will be forced to think of a solution without using 'state' => Maintanance and debugging will be easier
    - Functional components usually don't have logic and are mainly responsible for UI
    - Functional components are also called: "Stateless components", "Dumb components", "Presentational components"

*/

import React from "react";

function FunctionalComponent1() {
    return <h1>Functional Component</h1>
}

const FunctionalComponent2 = () => <h1>Functional Component</h1>

export default FunctionalComponent2;