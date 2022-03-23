import Header from "../sections/template-parts/header";
import Footer from "../sections/template-parts/footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
}
