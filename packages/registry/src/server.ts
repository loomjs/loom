import app from './app'

import { RegistryOptions } from 'registry-options';
 
const startRegistry = (options: RegistryOptions) => {
  const port = options.port || 3000
  app.listen(port, () => {
    console.log(`Loom Registry server started on: ${port}`);
  });
}

export default startRegistry