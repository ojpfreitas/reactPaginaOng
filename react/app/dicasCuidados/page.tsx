import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function dicasCuidados() {
  return (
    <main className="container">

      <Header />


      <div className="containerCorpo">

        <div>
          <h2>Guia Primeiros Socorros</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

        </div>

        <div>
          <Image
            src="/imagens/foto4.png"
            alt="Foto 4"
            width={580}
            height={290}
            className="foto1"
          />
        </div>

      </div>


      <div className="containerCorpo">

        <div>
          <Image
            src="/imagens/foto5.png"
            alt="Foto 5"
            width={580}
            height={290}
            className="foto1"
          />
        </div>

        <div>

          <h2>Denúncia de Maus Tratos</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

        </div>

      </div>


      <div className="containerCorpo">

        <div>

          <h2>Animais Perdidos e Encontrados</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

        </div>

        <div>
          <Image
            src="/imagens/foto6.png"
            alt="Foto 6"
            width={580}
            height={290}
            className="foto1"
          />
        </div>

      </div>


      <div className="divIsolada"></div>


      <footer className="rodape">

        <div>
          <p>Link pagina 1</p>
        </div>

        <div>
          <p>Anim@al ponto.com</p>
          <p>CNJP 01.030.234./0001-42</p>
          <p>Endereço: Rua , 123</p>
          <p>Criciúma-SC CEP: 888.00-000</p>
        </div>

        <div>
          <p>Desenvolvido por</p>
        </div>

      </footer>

    </main>
  );
}