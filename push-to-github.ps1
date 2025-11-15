# Script para fazer push no GitHub
# Execute este script após criar o repositório no GitHub

Write-Host "=== Push para GitHub ===" -ForegroundColor Green
Write-Host ""

# Verificar se já tem remote configurado
$remote = git remote get-url origin 2>$null

if ($remote) {
    Write-Host "Remote já configurado: $remote" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host "Por favor, forneça a URL do seu repositório GitHub:" -ForegroundColor Cyan
    Write-Host "Exemplo: https://github.com/SEU_USUARIO/nome-do-repo.git" -ForegroundColor Gray
    Write-Host ""
    $repoUrl = Read-Host "Cole a URL do repositório"
    
    if ($repoUrl) {
        git remote add origin $repoUrl
        Write-Host "Remote adicionado com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "URL não fornecida. Saindo..." -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "Fazendo push para GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "=== Concluído! ===" -ForegroundColor Green
Write-Host "Agora você pode conectar este repositório na Vercel!" -ForegroundColor Cyan

