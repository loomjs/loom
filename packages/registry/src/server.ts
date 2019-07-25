import * as http from "http";
import app from './app'

import { RegistryOptions } from 'registry-options';
 
const startRegistry  = (options: RegistryOptions) : Promise<http.Server> => {
  return new Promise(resolve => {
    const port = options.port || 3000
    const server = app.listen(port, () => {
      resolve(server)
    });
  })
 }
  
export default startRegistry