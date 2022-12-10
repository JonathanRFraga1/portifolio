import Nav from '../../components/nav';
import Footer from '../../components/footer';

export default function myProjects() {
  return (
    <>
      <Nav />
      <div className={`basic`}>
        <main>
          <h1>Meus Projetos</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}