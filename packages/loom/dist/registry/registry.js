var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component, createContext } from 'react';
const defaultContext = {
    modules: []
};
const Context = createContext(defaultContext);
/**
 * Registry is loom's main context provider. It injects all available modules to
 * its children as context, allowing any Region in its sub-tree to render the necessary modules.
 */
export class Registry extends Component {
    // TODO implement me
    getRegistry() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    name: 'foo',
                    bundleUri: 'https://www.bar.com/modules/foo',
                    usages: []
                },
                {
                    name: 'bar',
                    bundleUri: 'https://www.bar.com/modules/bar',
                    usages: []
                }
            ];
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield this.getRegistry();
            this.setState({
                context: {
                    modules,
                }
            });
        });
    }
    render() {
        const { context } = this.state;
        const { children } = this.props;
        return (React.createElement(Context.Provider, { value: context }, children));
    }
}
Registry.displayName = 'LoomRegistry';
Registry.defaultState = {
    context: defaultContext,
    fetched: false,
};
//# sourceMappingURL=registry.js.map