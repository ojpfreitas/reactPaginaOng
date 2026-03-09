import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
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
    );
}