import { RegistryContext, RegistryProps, RegistryState } from '@loomjs/types';
import React, { Component, createContext, ReactNode } from 'react';

const defaultContext : RegistryContext = {
    modules: []
}

const Context = createContext<Partial<RegistryContext>>(defaultContext)

/**
 * Registry is loom's main context provider. It injects all available modules to
 * its children as context, allowing any Region in its sub-tree to render the necessary modules.
 */
class Region extends Component {
    private static displayName = 'LoomRegion'

    public render(): ReactNode {
        return (
            <Context.Consumer >
                { context => context.modules.map(module => (<span>{module.name}</span>))}
            </Context.Consumer>
        );
    }
}

export default Region;