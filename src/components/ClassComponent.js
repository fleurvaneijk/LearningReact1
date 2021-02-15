/*
    CLASS COMPONENT:

    - Class components are more feature rich
    - Class components can maintain their own private data => A.K.A. 'state'
    - Class components can contain complex UI logic
    - Class components provide lifecycle hooks (important!)
    - Class components are also called: "Stateful components", "Smart components", "Container components"

*/

import React, { Component } from "react";

class ClassComponent extends Component {
    render() {
        return <h1>Class Component</h1>
    }

}

export default ClassComponent;