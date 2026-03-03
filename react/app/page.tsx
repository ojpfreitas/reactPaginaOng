import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">

      <header>
        <div className="header">
          <div>
            <Image
              src="/logos/logo-ong.png"
              alt="Logo ONG"
              width={100}
              height={100}
              className="logo"
            />
          </div>

          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/adocao">Adoção</Link></li>
            <li><Link href="/comoAjudar">Como Ajudar</Link></li>
            <li><Link href="/dicasCuidados">Dicas e Cuidados</Link></li>
            <li><Link href="/eventos">Eventos</Link></li>
            <li><Link href="/faleConosco">Fale Conosco</Link></li>
          </ul>
        </div>

        <div className="divIsolada"></div>
      </header>

      {/* Primeira Seção */}
      <div className="containerCorpo">
        <div>
          <h2>Notícias</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div>
          <Image
            src="/imagens/foto1.png"
            alt="Foto 1"
            width={580}
            height={290}
            className="foto1"
          />
        </div>
      </div>

      {/* Estatísticas */}
      <div className="divIsolada2">
        <div className="divGrafico">
          <div>
            <p>7000</p>
            <p>Animais resgatados</p>
          </div>
          <div>
            <p>400</p>
            <p>Animais adotados</p>
          </div>
          <div>
            <p>500</p>
            <p>Procedimentos de consultas</p>
          </div>
        </div>
      </div>

      {/* Segunda Seção */}
      <div className="containerCorpo">
        <div>
          <Image
            src="/imagens/foto2.png"
            alt="Foto 2"
            width={580}
            height={290}
            className="foto1"
          />
        </div>

        <div>
          <h2>Conheça nosso trabalho</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>
      </div>

      <div className="divIsolada"></div>

      {/* Footer */}
      <footer className="rodape">
        <div>
          <p>Link pagina 1</p>
        </div>

        <div>
          <p>Anim@al ponto.com</p>
          <p>CNPJ 01.030.234/0001-42</p>
          <p>Endereço: Rua , 123,</p>
          <p>Criciúma-SC CEP: 88800-000</p>
        </div>

        <div>
          <p>Desenvolvido por</p>
        </div>
      </footer>

    </main>
  );
}