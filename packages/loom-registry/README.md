### Registry

Registry is a centralized store for loom modules. Every module in a loom application is displayed under certain circumstances. During the page composition, loom runtime needs to know what modules to display, when to display them, and where. Registry is meant for both: to ask (when a developer registers a module), and to give answers to these questions (when loom runtime asks for the modules).

### Regisrty api

"Registry" doesn't store the modules themselves, just the data about them. For communication with loom runtime on one hand, and developers on the other Registry exposes REST API. Main resource of this API is a Module. For more details please read [Registry API documentation](./docs/API.md).  