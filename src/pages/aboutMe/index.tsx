import Nav from '../../components/nav';
import Footer from '../../components/footer';

export default function AboutMe() {
  return (
    <>
      <Nav />
      <div className={`basic`}>
        <main>
          <h1>Sobre Mim</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}