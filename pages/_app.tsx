import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="modal"></div>
    </>
  );
}

export default MyApp;
