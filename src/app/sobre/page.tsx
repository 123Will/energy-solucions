import { FaUsers, FaAward, FaHandshake, FaLightbulb, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Sobre() {
  const valores = [
    {
      icone: FaHandshake,
      titulo: "Confiança",
      descricao: "Construímos relacionamentos duradouros baseados na transparência e honestidade"
    },
    {
      icone: FaAward,
      titulo: "Qualidade",
      descricao: "Compromisso com a excelência em todos os nossos serviços e atendimento"
    },
    {
      icone: FaUsers,
      titulo: "Equipe",
      descricao: "Profissionais qualificados e experientes em cada área de atuação"
    },
    {
      icone: FaLightbulb,
      titulo: "Inovação",
      descricao: "Sempre buscando as melhores tecnologias e soluções para nossos clientes"
    }
  ];

  const numeros = [
    { numero: "500+", descricao: "Clientes atendidos" },
    { numero: "10+", descricao: "Anos de experiência" },
    { numero: "24h", descricao: "Atendimento disponível" },
    { numero: "100%", descricao: "Satisfação garantida" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre a Empresa XYZ
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Mais de 10 anos de experiência em soluções completas para sua casa ou empresa
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  A Empresa XYZ nasceu da paixão por oferecer soluções de qualidade em segurança, 
                  elétrica e climatização. Fundada em 2014, nossa empresa começou com um pequeno 
                  grupo de profissionais especializados.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossos serviços e nossa equipe, sempre mantendo 
                  o compromisso com a excelência e a satisfação total dos nossos clientes.
                </p>
                <p>
                  Hoje, somos referência no mercado, atendendo residências e empresas com 
                  soluções personalizadas e tecnologia de ponta.
                </p>
              </div>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Nossa Missão</h3>
              <p className="text-blue-700 text-lg">
                &ldquo;Proporcionar segurança, conforto e eficiência energética através de soluções 
                tecnológicas inovadoras, sempre com qualidade e atendimento diferenciado.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Números que nos orgulham
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que comprovam nossa dedicação e qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {numeros.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {item.numero}
                </div>
                <div className="text-gray-600 text-lg">
                  {item.descricao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Princípios que guiam todas as nossas ações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const IconComponent = valor.icone;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {valor.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais qualificados e experientes em cada área de atuação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Técnicos Especializados</h3>
              <p className="text-gray-600">
                Equipe técnica certificada e com vasta experiência em cada área
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
              <p className="text-gray-600">
                Equipe de atendimento preparada para atender suas necessidades
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-orange-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-gray-600">
                Suporte técnico disponível 24 horas para emergências
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Rápido */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Entre em contato conosco
          </h2>
          <p className="text-xl mb-8">
            Estamos prontos para atender você e oferecer a melhor solução
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3">
              <FaPhone className="text-2xl" />
              <div className="text-left">
                <div className="font-semibold">Telefone</div>
                <div>(11) 99999-9999</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-2xl" />
              <div className="text-left">
                <div className="font-semibold">E-mail</div>
                <div>contato@empresaxyz.com.br</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-2xl" />
              <div className="text-left">
                <div className="font-semibold">Atendimento</div>
                <div>24 horas por dia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 