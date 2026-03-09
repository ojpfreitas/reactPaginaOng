"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function eventos() {
    const [mostrarForm, setMostrarForm] = useState(false);
    return (
        <main className="container">

            <Header />


            <div className="containerCorpo">

                <div>
                    <h2>Eventos</h2>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                </div>

            </div>


            <div className="imgEvento">

                <Image
                    src="/imagens/foto11.png"
                    alt="Evento"
                    width={800}
                    height={401}
                    className="foto1"
                />

            </div>


            <div className="containerCorpo">
                <div>
                    <h2>Galeria de Fotos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>


            <div className="galeria">

                <div className="fotoGaleria">
                    <Image src="/imagens/foto1.png" alt="Foto 1" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto2.png" alt="Foto 2" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto3.png" alt="Foto 3" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto4.png" alt="Foto 4" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto5.png" alt="Foto 5" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto6.png" alt="Foto 6" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto7.png" alt="Foto 7" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto8.png" alt="Foto 8" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto9.png" alt="Foto 9" width={300} height={220} />
                </div>

                <div className="fotoGaleria">
                    <Image src="/imagens/foto10.png" alt="Foto 10" width={300} height={220} />
                </div>

            </div>


            <div className="containerCorpo">
                <div>
                    <h2>Compartilhe um Momento</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>


            {/* BOTÃO ABRIR MODAL */}
            <div className="buttonAdotar">
                <button onClick={() => setMostrarForm(true)}>
                    Compartilhar um Momento
                </button>
            </div>

            {/* MODAL */}
            {mostrarForm && (
                <div className="overlay">
                    <div className="addFoto">
                        <button>Adicionar Foto</button>
                    </div>
                </div>
            )}


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