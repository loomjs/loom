export = Loom;
export as namespace Loom;

declare namespace Loom {
    /**
     * A Condition describes whether a module should be rendered or not
     */
    export interface Condition {
        /**
         * rule is a Jexl string that will be evaluated against the current context
         * to decide whether to render the module or not.
         */
        rule: string;
    }

    /**
     * A Usage defines where a module should be rendered along with the corresponding conditions
     * define whether it should be rendered.
     */
    export interface Usage {
        /**
         * A region name, if no region with that name is found in a Registry's subtree, rendering the module 
         * will be skipped.
         */
        region: string;
        /**
         * The (optional) conditions that define whether the module will be rendered.
         * If absent, the module will always be rendered.
         */
        condition?: Condition;
    }

    /**
     * A Module is a loom component. It defines what needs to be evaluated if its conditions are matched.
     */
    export interface Module {
        /**
         * The name of the module. Needs to be unique across the registry.
         */
        name: string;
        /**
         * The URI to that module's bundle (typically a CDN URI).
         */
        bundleUri: string;
        /**
         * The places where this module is used.
         */
        usages: Array<Usage>;
    }

    export interface RegistryContext {
        modules: Array<Loom.Module>;
    }
    
    export interface RegistryProps {
        uri: String;
    }
    
    export interface RegistryState {
        fetched: boolean;
        context: RegistryContext;
    }
}