import '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faFacebook,
  faLinkedinIn,
  faChevronDown,
  faChevronUp,
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
