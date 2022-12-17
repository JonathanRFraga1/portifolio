import Nav from '../../components/nav';
import Footer from '../../components/footer';
import style from './aboutMe.module.scss';

export default function AboutMe() {
  return (
    <>
      <Nav />
      <div className={`basic`}>
        <main className={style.main}>
          <h1>Sobre</h1>

          <div className={style.section}>
            <h2>Formações</h2>

            <div>
              <h3>Técnico em informática</h3>

              <div className={style.description}>
                <p>
                  No ano de 2019, concluí o Curso Técnico em Informática no
                  Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - <i>Campus</i> Erechim.
                  Neste curso, iniciei meus estudos na área de desenvolvimento de software, onde aprendi a linguagem de programação Java.
                </p>
                <p>
                  Dentre as linguages aprendidas, está a linguagem Java. Com esta linguagem, foi possivel desenvolver os conhecimentos em lógica de programação, 
                  além de aprender a utilizar os conceitos de orientação a objetos.
                </p>
                <p>
                  Também foi ensinado a ulizilar a biblioteca Swing, e conexão com banco de dados MySQL via JDBC.
                </p>
                <p>
                  Também foi possivel aprender a utilizar o banco de dados MySQL, e a linguagem PHP, a qual utilizei para desenvolver o meu trabalho de conclusão de curso.
                </p>
              </div>
            </div>

            <div>
              <h3>Bacharelado em Ciência da Computação - Em Andamento</h3>

              <div className={style.description}>
                <p>
                  No ano de 2020, ingressei no Bacharelado em Ciência da Computação no
                  Instituto Federal de Educação, Ciência e Tecnologia do Sul-rio-grandense - <i>Campus</i> Passo Fundo
                </p>
                <p>
                  Neste curso, estou aprofundando meus estudos na área de desenvolvimento de software, onde aprendi a linguagem de programação C++.
                </p>
                <p>
                  Com esta linguagem, foi possivel desenvolver os conhecimentos em estrutura de dados e gerenciamento de memória.
                </p>
                <p>
                  Com a linguagem Java foram aprofundados os conhecimentos em orientação a objetos.
                </p>
                <p>
                  Também foi possivel aprender a utilizar o banco de dados PostgreSQL.
                </p>
              </div>  
            </div>
          </div>

          <div className={style.section}>
            <h2>Experiências</h2>

            <div>
              <h3>Desenvolvedor Web - Em Andamento</h3>

              <div className={style.description}>
                <p>
                  Desde o ano de 2020, estou trabalhando como desenvolvedor web na empresa <i>Uniom Team</i>.
                </p>
                <p>
                  Nessa empresa, estou desenvolvendo projetos para clientes, utilizando as tecnologias PHP, MySQL, HTML, CSS, Javascript, Git.
                </p>
                <p>
                  Fui responsável pelo desenvolvimento da versão web do aplicativo <i>Beasy</i>, que é um aplicativo para delivery de supermercados, criando um PWA.
                </p>
                <p>
                  Também fui responsável pelo desenvolvimento da API REST de comunicação do BackOffice do sistema Beasy.
                </p>
                <p>
                  Também desenvolvo novas funcionalidades para o sistema Beasy, como por exemplo, a funcionalidade de televendas via Backoffice, separação de produtos do pedidos,
                  e a funcionalidade de cadastro de produtos.
                </p>
                <p>
                  Da mesma forma, atuo no desenvolvimento e manutenção da plataforma <i>Rocky</i>, que é uma plataforma de e-commerce white label.
                </p>
                <p>
                Nesse sistema desenvolvi integrações com o ERP <i>Bling</i>, com a API de Conversões da Meta, entre outras.
                </p>
              </div>
            </div>
          </div>

          <div className={style.section}>
            <h2>Cursos</h2>

            <div>
              <h3>Git - O Curso completo: Git, Github e git-flow</h3>
              <p>
                Curso que ensina o básico sobre versionamento de projetos usando a ferramenta git.
              </p>
              <a href='https://www.udemy.com/certificate/UC-811a34d1-0128-4bb9-9462-827c38b7027d/' 
                target='_blank' 
                rel="noreferrer"
                className={style.acessCertificate}>
                Acessar Certificado
              </a>
            </div>

            <div>
              <h3>HTTP: Entendendo a Web Por Baixo do Panos</h3>
              <p>
                Curso que ensina sobre os protocolos HTTP, verbos HTTP e suas utilizações, etc.
              </p>
              <a href='https://cursos.alura.com.br/user/jonathanrossettodefraga/course/http-fundamentos/certificate' 
                target='_blank' 
                rel="noreferrer"
                className={style.acessCertificate}>
                Acessar Certificado
              </a>
            </div>

            <div>
              <h3>HTTP: Entendendo a Web Por Baixo do Panos</h3>
              <p>
                Curso que ensina sobre os protocolos HTTP, verbos HTTP e suas utilizações, etc.
              </p>
              <a href='https://cursos.alura.com.br/user/jonathanrossettodefraga/course/http-fundamentos/certificate' 
                target='_blank'
                rel="noreferrer"
                className={style.acessCertificate}>
                Acessar Certificado
              </a>
            </div>

            <div>
              <h3>Node.js: API Rest com Express e MongoDB</h3>
              <p>
                Curso que ensina a criar uma API Rest com Node.js, usando o framework Express e o banco de dados MongoDB.
              </p>
              <a href='https://cursos.alura.com.br/user/jonathanrossettodefraga/course/nodejs-api-rest-express-mongodb/certificate' 
                target='_blank'
                rel="noreferrer"
                className={style.acessCertificate}>
                Acessar Certificado
              </a>
            </div>

            <div>
              <h3>React: escrevendo com Typescript</h3>
              <p>
                Curso que ensina a criar uma aplicação web com React, usando o Typescript. Também foi ensinado a utilizar os CSS Modules para estilizar a aplicação.
              </p>
              <a href='https://cursos.alura.com.br/user/jonathanrossettodefraga/course/react-modernizando-escrever-typescript/certificate' 
                target='_blank' 
                rel="noreferrer"
                className={style.acessCertificate}>
                Acessar Certificado
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}