import { useRouter } from 'next/router'

export default {
  logo: (
    <span style={{
      fontWeight: 700,
      fontSize: 20,
      color: '#6366f1',
      letterSpacing: '-0.3px'
    }}>
      ObservIQ
    </span>
  ),

  project: {
    link: 'https://github.com/AdarshXGupta07/OBSERVIQ-DOCS',
  },

  docsRepositoryBase: 'https://github.com/AdarshXGupta07/OBSERVIQ-DOCS/tree/main',

  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath === '/'
        ? 'ObservIQ — AI Application Monitoring'
        : '%s | ObservIQ'
    }
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="ObservIQ — Monitor your AI applications in production. Real-time traces, cost analytics, and anomaly detection." />
    </>
  ),

  primaryHue: 239,
  primarySaturation: 82,

  sidebar: {
    titleComponent({ title }) {
      return <span>{title}</span>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  footer: {
    text: (
      <span style={{ fontSize: 13 }}>
        © {new Date().getFullYear()} ObservIQ. Built with ❤️ by Adarsh Gupta.
      </span>
    )
  },

  navigation: true,
  darkMode: true,
}