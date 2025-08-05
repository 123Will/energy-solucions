import { FaShieldAlt, FaBolt, FaSnowflake, FaTools, FaCheckCircle, FaClock, FaStar } from 'react-icons/fa';

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      titulo: "Segurança Eletrônica",
      icone: FaShieldAlt,
      cor: "blue",
      descricao: "Sistemas completos de segurança para sua casa ou empresa",
      itens: [
        "Instalação de câmeras de segurança",
        "Sistemas de alarme residencial e comercial",
        "Cercas elétricas",
        "Controle de acesso",
        "Monitoramento 24h",
        "Manutenção preventiva"
      ],
      preco: "A partir de R$ 299,00"
    },
    {
      id: 2,
      titulo: "Instalações Elétricas",
      icone: FaBolt,
      cor: "yellow",
      descricao: "Instalações elétricas seguras e eficientes",
      itens: [
        "Instalação elétrica residencial",
        "Instalação elétrica comercial",
        "Quadros de distribuição",
        "Aterramento elétrico",
        "Iluminação LED",
        "Automação residencial"
      ],
      preco: "A partir de R$ 199,00"
    },
    {
      id: 3,
      titulo: "Ar-Condicionado",
      icone: FaSnowflake,
      cor: "cyan",
      descricao: "Instalação e manutenção de sistemas de climatização",
      itens: [
        "Instalação de ar-condicionado",
        "Manutenção preventiva",
        "Limpeza de filtros",
        "Recarga de gás",
        "Reparo de equipamentos",
        "Venda de equipamentos"
      ],
      preco: "A partir de R$ 150,00"
    }
  ];

  const beneficios = [
    {
      icone: FaCheckCircle,
      titulo: "Garantia de 1 ano",
      descricao: "Todos os nossos serviços possuem garantia de 1 ano"
    },
    {
      icone: FaClock,
      titulo: "Atendimento 24h",
      descricao: "Suporte técnico disponível 24 horas por dia"
    },
    {
      icone: FaStar,
      titulo: "Profissionais qualificados",
      descricao: "Equipe técnica especializada e certificada"
    },
    {
      icone: FaTools,
      titulo: "Manutenção preventiva",
      descricao: "Programas de manutenção para evitar problemas"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Soluções completas em segurança eletrônica, instalações elétricas e climatização
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {servicos.map((servico) => {
              const IconComponent = servico.icone;
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                yellow: "bg-yellow-100 text-yellow-600",
                cyan: "bg-cyan-100 text-cyan-600"
              };
              
              return (
                <div key={servico.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`p-8 ${colorClasses[servico.cor as keyof typeof colorClasses]} text-center`}>
                    <IconComponent className="text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{servico.titulo}</h3>
                    <p className="text-gray-600 mb-4">{servico.descricao}</p>
                    <div className="text-2xl font-bold text-gray-800 mb-6">
                      {servico.preco}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Inclui:</h4>
                    <ul className="space-y-3">
                      {servico.itens.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <a 
                        href="https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para o serviço de Segurança Eletrônica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                      >
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por que escolher a Empresa XYZ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos qualidade, confiança e atendimento diferenciado em todos os nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => {
              const IconComponent = beneficio.icone;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {beneficio.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de um orçamento personalizado?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e receba uma proposta sob medida para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento personalizado para os serviços da Empresa XYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaShieldAlt />
              WhatsApp
            </a>
            <a 
              href="mailto:contato@empresaxyz.com.br?subject=Orçamento - Empresa XYZ"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FaBolt />
              E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 