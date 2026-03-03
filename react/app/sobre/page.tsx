import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="container">

      {/* Header */}
      <header>
        <div className="header">
          <Image
            src="/logos/logo-ong.png"
            alt="Logo ONG"
            width={100}
            height={100}
            className="logo"
          />

          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/adocao">Adoção</Link></li>
            <li><Link href="/como-ajudar">Como Ajudar</Link></li>
            <li><Link href="/dicas-cuidados">Dicas e Cuidados</Link></li>
            <li><Link href="/eventos">Eventos</Link></li>
            <li><Link href="/fale-conosco">Fale Conosco</Link></li>
          </ul>
        </div>

        <div className="divIsolada"></div>
      </header>

      {/* Nossa História */}
      <div className="containerCorpo">
        <div>
          <h2>Nossa História</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div>
          <Image
            src="/imagens/foto3.png"
            alt="Nossa História"
            width={580}
            height={290}
            className="foto1"
          />
        </div>
      </div>

      {/* Missões e Valores */}
      <div className="containerCorpo">
        <div>
          <h2>Missões e Valores</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>
      </div>

      {/* Parceiros */}
      <div className="parceiros">
        <div>
          <h2>Nossos parceiros</h2>

          <Image src="/logos/lobo-bb.png" alt="Banco do Brasil" width={100} height={100} className="logoParceiros" />
          <Image src="/logos/logo-caixa.png" alt="Caixa" width={100} height={100} className="logoParceiros" />
          <Image src="/logos/logo-pedigre.png" alt="Pedigree" width={100} height={100} className="logoParceiros" />
          <Image src="/logos/logo-whiskas.png" alt="Whiskas" width={100} height={100} className="logoParceiros" />
          <Image src="/logos/logo-supra.png" alt="Supra" width={100} height={100} className="logoParceiros" />
          <Image src="/logos/logo-golden.png" alt="Golden" width={100} height={100} className="logoParceiros" />
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