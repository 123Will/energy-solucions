'use client';

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUser, FaEnvelope as FaEnvelopeIcon, FaComments } from 'react-icons/fa';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
      });
    }, 2000);
  };

  const contatos = [
    {
      icone: FaPhone,
      titulo: "Telefone",
      valor: "(11) 99999-9999",
      descricao: "Atendimento de segunda a sexta, 8h às 18h"
    },
    {
      icone: FaWhatsapp,
      titulo: "WhatsApp",
      valor: "(11) 99999-9999",
      descricao: "Atendimento 24 horas por dia"
    },
    {
      icone: FaEnvelope,
      titulo: "E-mail",
      valor: "contato@empresaxyz.com.br",
      descricao: "Resposta em até 24 horas"
    },
    {
      icone: FaMapMarkerAlt,
      titulo: "Endereço",
      valor: "São Paulo, SP",
      descricao: "Atendemos toda a região metropolitana"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos prontos para atender você e oferecer a melhor solução
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Informações de Contato
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para entrar em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contatos.map((contato, index) => {
              const IconComponent = contato.icone;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {contato.titulo}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">
                    {contato.valor}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {contato.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulário e CTA */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Envie sua mensagem
              </h3>
              
              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <FaEnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="seguranca">Segurança Eletrônica</option>
                      <option value="eletrica">Instalações Elétricas</option>
                      <option value="ar-condicionado">Ar-Condicionado</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <div className="relative">
                    <FaComments className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaEnvelope />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* CTA Rápido */}
            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Atendimento Rápido via WhatsApp
                </h3>
                <p className="text-green-700 mb-6">
                  Para atendimento imediato, entre em contato via WhatsApp. 
                  Nossa equipe está pronta para responder suas dúvidas e fazer orçamentos.
                </p>
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de um atendimento da Empresa XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp />
                  WhatsApp 24h
                </a>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-3 text-blue-700">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-blue-600" />
                    <div>
                      <div className="font-semibold">Segunda a Sexta</div>
                      <div>8h às 18h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-blue-600" />
                    <div>
                      <div className="font-semibold">Sábado</div>
                      <div>8h às 12h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-blue-600" />
                    <div>
                      <div className="font-semibold">Emergências</div>
                      <div>24 horas por dia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 