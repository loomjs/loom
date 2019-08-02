import React, { Component, createContext } from 'react';
const defaultContext = {
    modules: []
};
const Context = createContext(defaultContext);
export class Registry extends Component {
    render() {
        const { context } = this.state;
        const { children } = this.props;
        return (React.createElement(Context.Provider, { value: context }, children));
    }
}
Registry.displayName = 'LoomRegistry';
Registry.defaultState = {
    fetched: false,
    context: defaultContext
};
//# sourceMappingURL=registry.js.map