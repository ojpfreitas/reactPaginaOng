"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function ComoAjudar() {
  const [mostrarForm, setMostrarForm] = useState(false);
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


      <div className="containerCorpo">

        <div>

          <div>
            <h2>Como Ajudar?</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

          </div>

          <Image
            src="/imagens/foto7.png"
            alt="Foto 7"
            width={424}
            height={249}
            className="foto7"
          />

        </div>

        <div>

          <Image
            src="/imagens/foto8.png"
            alt="Foto 8"
            width={458}
            height={172}
            className="foto8"
          />

          <div className="opcoesDoacao">

            <h3>Opções para doação</h3>

            <p>Conta Bancaria: Ag 1010 Conta 00000-00</p>
            <p>Pix: 00000000000</p>
            <p>Doar Insumos: Ex. Ração, higiene e etc.</p>

          </div>

        </div>

      </div>


      <div className="campanhasAtuais">
        <h2>Campanhas atuais</h2>
      </div>


      <div className="campanhasAtuais">

        <div className="card">

          <Image
            src="/imagens/foto9.png"
            alt="Foto 9"
            width={242}
            height={139}
            className="foto9"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

        </div>

        <div className="card">

          <Image
            src="/imagens/foto10.png"
            alt="Foto 10"
            width={242}
            height={139}
            className="foto10"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

        </div>

      </div>


      <div className="programaPadrinhos">

        <h2>Programa de padrinhos</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* BOTÃO ABRIR MODAL */}
        <div className="buttonAdotar">
            <button onClick={() => setMostrarForm(true)}>
                Apadrinhar um Animal
            </button>
        </div>
        
              {/* MODAL */}
              {mostrarForm && (
                <div className="overlay">
                  <div className="formulario">
                    <div className="dadosForm">
        
                      <div className="voltar">
                        <Image
                          src="/imagens/buttonX.png"
                          alt="Fechar"
                          width={40}
                          height={40}
                          className="buttonX"
                          onClick={() => setMostrarForm(false)}
                        />
                      </div>
        
                      <div className="tituloForm">
                        <h2>Formulário de Apadrinhamento</h2>
                      </div>
        
                      <form>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Celular" />
                        <input type="text" placeholder="Endereço" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Nome do animal desejado" />
                      </form>
        
                      <div className="buttonAdotar">
                        <button onClick={() => setMostrarForm(false)}>
                          Enviar
                        </button>
                      </div>
        
                    </div>
                  </div>
                </div>
              )}

      </div>


      <div className="programaPadrinhos">

        <h2>Informações e Serviços</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

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