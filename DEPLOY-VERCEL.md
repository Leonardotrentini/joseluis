# 🚀 Como Hospedar na Vercel

A Vercel é perfeita para este projeto porque:
- ✅ **CDN Global** - Sites rápidos na América Latina
- ✅ **Deploy automático** - Conecta com GitHub
- ✅ **HTTPS gratuito** - SSL automático
- ✅ **Domínio personalizado** - Pode usar seu próprio domínio
- ✅ **Gratuito** - Plano free é suficiente para começar

## 📋 Pré-requisitos

1. Conta no GitHub (gratuita)
2. Conta na Vercel (gratuita) - [vercel.com](https://vercel.com)

## 🎯 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nome: `landing-page-jose-luis` (ou qualquer nome)
4. Marque como **Public** ou **Private**
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"

### Passo 2: Enviar arquivos para o GitHub

No terminal/PowerShell, execute:

```bash
# Navegar para a pasta do projeto
cd "C:\Users\Leonardo trentini\Desktop\riplov"

# Inicializar git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit - Landing page José Luis"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/landing-page-jose-luis.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Conectar com Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório que você acabou de criar
5. Clique em "Import"
6. **Configurações:**
   - Framework Preset: **Other**
   - Build Command: (deixe vazio)
   - Output Directory: (deixe vazio)
   - Install Command: (deixe vazio)
7. Clique em "Deploy"

### Passo 4: Pronto! 🎉

Em poucos segundos, seu site estará no ar com uma URL tipo:
`https://seu-projeto.vercel.app`

---

## 🎯 Método 2: Deploy Direto (Sem GitHub)

### Via Vercel CLI

1. Instale a Vercel CLI:
```bash
npm install -g vercel
```

2. No terminal, na pasta do projeto:
```bash
cd "C:\Users\Leonardo trentini\Desktop\riplov"
vercel
```

3. Siga as instruções:
   - Login na Vercel
   - Aponte para a pasta atual
   - Confirme as configurações

4. Pronto! O site estará no ar.

---

## 🌍 Vantagens da Vercel para América Latina

- **CDN Global**: Servidores em São Paulo, Rio de Janeiro, e outras cidades
- **Edge Network**: Conteúdo servido do servidor mais próximo
- **Performance**: Sites carregam em < 1 segundo na maioria dos casos
- **Escalabilidade**: Suporta milhões de visitas sem problemas

## 🔧 Configurações Adicionais

### Domínio Personalizado

1. Na Vercel, vá em Settings > Domains
2. Adicione seu domínio
3. Siga as instruções de DNS

### Variáveis de Ambiente

Se precisar adicionar variáveis (como IDs de tracking), vá em:
Settings > Environment Variables

---

## 📊 Monitoramento

A Vercel fornece:
- Analytics de visitas
- Performance metrics
- Logs de erro
- Deploy history

---

## ⚡ Dicas de Performance

O site já está otimizado, mas você pode:
1. Comprimir imagens antes de fazer upload
2. Usar WebP para imagens (melhor compressão)
3. Habilitar cache do navegador (já configurado no vercel.json)

---

## 🆘 Problemas Comuns

**Erro 404 ao acessar subpáginas:**
- O `vercel.json` já está configurado para redirecionar tudo para index.html

**Imagens não aparecem:**
- Verifique se as imagens estão na pasta `images/`
- Use caminhos relativos: `images/nome.jpg`

**Meta Pixel não funciona:**
- Verifique se o ID do pixel está correto
- Use o console do navegador para debug

---

## 📝 Próximos Passos

Após o deploy:
1. Teste a URL em diferentes dispositivos
2. Verifique se o Meta Pixel está rastreando
3. Teste os botões de compra
4. Configure domínio personalizado (opcional)

