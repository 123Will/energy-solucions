import Link from 'next/link'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Energy & Soluções
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Especialistas em Elétrica - Segurança Eletrônica - Ar Condicionado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/servicos"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nossos Serviços
            </Link>
            <Link 
              href="/contato"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Bem-vindo à Energy & Soluções
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma empresa especializada em soluções completas para sua casa ou empresa, 
              oferecendo serviços de qualidade em elétrica, segurança eletrônica e climatização.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento 24h</h3>
              <p className="text-gray-600">
                Suporte técnico disponível 24 horas por dia para emergências
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp Direto</h3>
              <p className="text-gray-600">
                Atendimento rápido via WhatsApp para orçamentos e dúvidas
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-mail Profissional</h3>
              <p className="text-gray-600">
                Comunicação formal via e-mail para contratos e documentação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de um orçamento?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e receba uma proposta personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5516993292993?text=Olá! Gostaria de um orçamento para os serviços da Energy & Soluções"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a 
              href="mailto:contato@energy-solucoes.com.br"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
