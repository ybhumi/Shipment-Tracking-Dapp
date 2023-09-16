import "../styles/globals.css";

//internal import 
import {TrackingProvider } from "../Conetxt/TrackingContext"
import {Navbar , Footer} from "../Components"
export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <Navbar/>
      <Component {...pageProps} />
      </TrackingProvider>
      <Footer/>
    </>
  );
}
Footer