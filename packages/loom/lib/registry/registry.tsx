import { RegistryContext, RegistryProps, RegistryState } from '@loomjs/types';
import React, { Component, createContext, ReactNode } from 'react';

const defaultContext : RegistryContext = {
    modules: []
}

const Context = createContext<Partial<RegistryContext>>(defaultContext)

export class Registry extends Component<RegistryProps, RegistryState> {
    private static displayName = 'LoomRegistry'

    private static defaultState: RegistryState = {
        context: defaultContext,
        fetched: false,
    }
    
    // TODO implement me
    private async getRegistry(): Promise<Array<Loom.Module>> {
        return [];
    }

    public async componentDidMount() {
        const modules = await this.getRegistry();
        this.setState({
            context: {
                modules,
            }
        });
    }

    public render(): ReactNode {
        const { context } = this.state
        const { children } = this.props
        return (
            <Context.Provider value={context}>
                { children }
            </Context.Provider>
        );
    }
}