import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empresa XYZ - Segurança Eletrônica, Elétrica e Ar-Condicionado",
  description: "Especialistas em segurança eletrônica, instalações elétricas e ar-condicionado. Atendimento 24h via WhatsApp e e-mail.",
  keywords: "segurança eletrônica, câmeras, alarmes, instalação elétrica, ar-condicionado, manutenção",
  authors: [{ name: "Empresa XYZ" }],
  openGraph: {
    title: "Empresa XYZ - Soluções Completas",
    description: "Especialistas em segurança eletrônica, instalações elétricas e ar-condicionado",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Empresa XYZ
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Serviços
                </Link>
                <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre
                </Link>
                <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contato
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para os serviços da Empresa XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Empresa XYZ</h3>
                <p className="text-gray-300 mb-4">
                  Especialistas em segurança eletrônica, instalações elétricas e ar-condicionado.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Serviços</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Segurança Eletrônica</li>
                  <li>Instalações Elétricas</li>
                  <li>Ar-Condicionado</li>
                  <li>Manutenção</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contato</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-blue-400" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    <span>contato@empresaxyz.com.br</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-green-400" />
                    <span>WhatsApp 24h</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/servicos" className="hover:text-white transition-colors">Nossos Serviços</Link></li>
                  <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                  <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Empresa XYZ. Todos os direitos reservados.</p>
              <p className="text-sm mt-2">CNPJ: 00.000.000/0001-00</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
