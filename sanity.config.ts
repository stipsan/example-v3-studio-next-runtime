import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default createConfig({
  name: 'themer-next-runtime',
  title: 'My Sanity Project',
  projectId: 'kieaexhf',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {types: schemaTypes},
})
