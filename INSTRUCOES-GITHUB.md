# 📦 Como Enviar para GitHub

## ✅ Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Repository name:** `landing-page-jose-luis` (ou qualquer nome)
3. **Description:** (opcional) "Landing page emocional - História de amor eterna"
4. Marque como **Public** ou **Private**
5. **NÃO** marque "Initialize with README"
6. Clique em **"Create repository"**

## ✅ Passo 2: Copiar a URL do Repositório

Após criar, você verá uma página com instruções. Copie a URL que aparece, tipo:
```
https://github.com/SEU_USUARIO/landing-page-jose-luis.git
```

## ✅ Passo 3: Executar o Script

No PowerShell, execute:

```powershell
.\push-to-github.ps1
```

Quando pedir, cole a URL do repositório que você copiou.

## ✅ Passo 4: Conectar na Vercel

1. Acesse: https://vercel.com/new
2. Faça login
3. Clique em **"Import Git Repository"**
4. Selecione o repositório que você acabou de criar
5. Clique em **"Import"**
6. Deixe as configurações padrão
7. Clique em **"Deploy"**

## 🎉 Pronto!

Seu site estará no ar em ~30 segundos!

---

## 🔄 Atualizações Futuras

Sempre que você atualizar arquivos:

```powershell
git add .
git commit -m "Descrição da atualização"
git push
```

A Vercel fará deploy automático! 🚀

