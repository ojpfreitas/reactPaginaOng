"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

interface AnimalCardProps {
  nome: string;
  idade: string;
  sexo: string;
  descricao: string;
  imagem: string;
}

function AnimalCard({
  nome,
  idade,
  sexo,
  descricao,
  imagem,
}: AnimalCardProps) {
  return (
    <div className="cardAnimal">
      <Image
        src={imagem}
        alt={nome}
        width={160}
        height={160}
      />
      <div>
        <h2>{nome}</h2>
        <p>{sexo} · {idade}</p>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default function Adocao() {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <main className="container">

      <Header />

      {/* COMO ADOTAR */}
      <div className="containerCorpo">
        <div>
          <h2>Como Adotar?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>
      </div>

      {/* REQUISITOS */}
      <div className="containerCorpo">
        <div>
          <h2>Requisitos para Adoção</h2>
          <ul>
            <li>Ser maior de 18 anos</li>
            <li>Documento com foto</li>
            <li>Comprovante de residência</li>
            <li>Assinar termo de responsabilidade</li>
            <li>Passar por entrevista</li>
            <li>Acompanhamento pós-adoção</li>
          </ul>
        </div>
      </div>

      {/* ANIMAIS */}
      <div className="animaisAdocao">
        <h2>Disponíveis para Adoção</h2>

        <div className="imagensAnimais">
          <AnimalCard
            nome="Bob"
            idade="2 anos"
            sexo="Macho"
            descricao="Carinhoso, adora brincar e convive bem com outros cães."
            imagem="/animais/animal1.jpeg"
          />

          <AnimalCard
            nome="Scooby"
            idade="3 anos"
            sexo="Macho"
            descricao="Calmo, ótimo para apartamento."
            imagem="/animais/animal2.jpg"
          />

          <AnimalCard
            nome="Toby"
            idade="1 ano"
            sexo="Macho"
            descricao="Brincalhão e adora crianças."
            imagem="/animais/animal3.webp"
          />

          <AnimalCard
            nome="Lina"
            idade="2 anos"
            sexo="Fêmea"
            descricao="Muito dócil e tranquila."
            imagem="/animais/animal4.webp"
          />

          <AnimalCard
            nome="Rockie"
            idade="1 ano"
            sexo="Macho"
            descricao="Companheiro e muito carinhoso."
            imagem="/animais/animal5.webp"
          />

          <AnimalCard
            nome="Lindinha"
            idade="3 anos"
            sexo="Fêmea"
            descricao="Calma e ideal para companhia."
            imagem="/animais/animal6.webp"
          />
        </div>
      </div>

      {/* BOTÃO ABRIR MODAL */}
      <div className="buttonAdotar">
        <button onClick={() => setMostrarForm(true)}>
          Quero Adotar
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
                <h2>Formulário de Adoção</h2>
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

      <div className="divIsolada"></div>

      {/* FOOTER */}
      <footer className="rodape">
        <div>
          <p>Link pagina 1</p>
        </div>

        <div>
          <p>Anim@al ponto.com</p>
          <p>CNPJ 01.030.234/0001-42</p>
          <p>Endereço: Rua , 123</p>
          <p>Criciúma-SC CEP: 88800-000</p>
        </div>

        <div>
          <p>Desenvolvido por</p>
        </div>
      </footer>

    </main>
  );
}