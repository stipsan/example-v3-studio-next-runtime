import {createConfig, defaultTheme} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default createConfig({
  // allows reading the default theme variables while the custom theme is loading
  theme: defaultTheme,

  name: 'themer-next-runtime',
  title: 'My Sanity Project',
  projectId: 'kieaexhf',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {types: schemaTypes},
})
