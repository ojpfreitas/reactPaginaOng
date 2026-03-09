"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [mostrarFormVolunt, setMostrarFormVolunt] = useState(false);
    return (
        <div className="container">

            <Header />

            <div className="containerCorpo">
                <div>
                    <h2>Seja um Voluntário</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>

            {/* BOTÃO ABRIR MODAL */}
            <div className="buttonAdotar">
                <button onClick={() => setMostrarFormVolunt(true)}>
                    Seja um Voluntário
                </button>
            </div>

            {/* MODAL */}
            {mostrarFormVolunt && (
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
                                    onClick={() => setMostrarFormVolunt(false)}
                                />
                            </div>

                            <div className="tituloForm">
                                <h2>Formulário Voluntariado</h2>
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
                                <button onClick={() => setMostrarFormVolunt(false)}>
                                    Enviar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            <div className="containerCorpo">

                <div>
                    <h2>Redes Sociais</h2>
                    <p>Instagram:</p>
                    <p>Facebook:</p>
                    <p>WhatsApp:</p>
                </div>
                <div>
                    <Image
                        src="/imagens/foto12.png"
                        alt="Logo ONG"
                        width={493}
                        height={252}
                        className="logo"
                    />
                </div>

            </div>

            <div className="containerCorpo">
                <div>
                    <h2>Trabalhe Conosco</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>

            {/* BOTÃO ABRIR MODAL */}
            <div className="buttonAdotar">
                <button onClick={() => setMostrarForm(true)}>
                    Trabalhe Conosco
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
                                <h2>Formulário Trabalhe Conosco</h2>
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

        </div>
    );
}