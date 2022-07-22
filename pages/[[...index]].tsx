import _config from '../sanity.config'
import {Studio} from 'sanity'
import {useState} from 'react'
import Head from 'next/head'

export default function IndexPage() {
  const [config, setConfig] = useState(_config)

  return (
    <>
      <Head>
        {/* Studio implements display cutouts CSS (The iPhone Notch ™ ) and needs `viewport-fit=covered` for it to work correctly */}
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover"
        />
        {/* These theme-color tags makes the Studio look really really good on devices like iPads as the browser chrome adopts the Studio background */}
        <meta
          key="theme-color-light"
          name="theme-color"
          content={config.theme.color.light.default.base.bg}
          media="(prefers-color-scheme: light)"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          content={config.theme.color.dark.default.base.bg}
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Studio config={config} />
    </>
  )
}
