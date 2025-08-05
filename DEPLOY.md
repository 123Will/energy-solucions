# 🚀 Guia de Deploy - Site Empresa XYZ

## Deploy no Vercel

### 1. Preparação

1. **Criar conta no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Conectar repositório:**
   - Clique em "New Project"
   - Selecione o repositório do GitHub
   - Configure as opções:
     - Framework Preset: Next.js
     - Root Directory: `./` (padrão)
     - Build Command: `npm run build` (padrão)
     - Output Directory: `.next` (padrão)

### 2. Configurações do Projeto

O projeto já está configurado com:
- ✅ Next.js 15
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ React Icons
- ✅ SEO otimizado
- ✅ Responsividade completa

### 3. Variáveis de Ambiente (Opcional)

Se necessário, adicione no Vercel:
```
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
```

### 4. Deploy Automático

Após conectar o repositório:
- ✅ Deploy automático a cada push
- ✅ Preview deployments para branches
- ✅ Rollback fácil para versões anteriores

### 5. Domínio Personalizado

1. **Adicionar domínio:**
   - Vá em Settings > Domains
   - Adicione seu domínio personalizado
   - Configure os DNS conforme instruções

2. **SSL automático:**
   - O Vercel fornece SSL gratuito
   - Configuração automática

### 6. Monitoramento

- **Analytics:** Disponível no dashboard do Vercel
- **Logs:** Acesse Function Logs para debug
- **Performance:** Métricas automáticas

### 7. Comandos Úteis

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy manual
vercel

# Deploy para produção
vercel --prod

# Ver logs
vercel logs
```

### 8. Otimizações

O projeto já inclui:
- ✅ Imagens otimizadas
- ✅ CSS minificado
- ✅ JavaScript bundle otimizado
- ✅ SEO meta tags
- ✅ PWA ready

### 9. Troubleshooting

**Erro de build:**
- Verifique se todas as dependências estão instaladas
- Confirme se o Node.js está na versão 18+

**Erro de deploy:**
- Verifique os logs no dashboard do Vercel
- Confirme se o repositório está público ou conectado corretamente

### 10. Próximos Passos

1. **Personalizar conteúdo:**
   - Editar textos nas páginas
   - Adicionar logo da empresa
   - Atualizar informações de contato

2. **SEO:**
   - Adicionar Google Analytics
   - Configurar Google Search Console
   - Otimizar meta tags

3. **Funcionalidades extras:**
   - Integrar formulário com e-mail real
   - Adicionar chat online
   - Implementar blog

---

**🎉 Seu site estará online em minutos!** 