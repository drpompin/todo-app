// By importing global.css here in _app.js, the global styles are automatically inherited by all components.
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}