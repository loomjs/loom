import React, { Component, createContext } from 'react';
const defaultContext = {
    modules: []
};
const Context = createContext(defaultContext);
/**
 * Registry is loom's main context provider. It injects all available modules to
 * its children as context, allowing any Region in its sub-tree to render the necessary modules.
 */
export class Region extends Component {
    render() {
        return (React.createElement(Context.Consumer, null, context => context.modules.map(module => (React.createElement("span", null, module.name)))));
    }
}
Region.displayName = 'LoomRegion';
//# sourceMappingURL=region.js.map