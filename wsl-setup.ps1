# Execute este arquivo no PowerShell como Administrador no Windows
# Configurar port proxy para acessar servidor WSL

# Limpar configurações anteriores
netsh interface portproxy delete v4tov4 listenport=3001 listenaddress=0.0.0.0

# Adicionar proxy para a porta 3001
netsh interface portproxy add v4tov4 listenport=3001 listenaddress=0.0.0.0 connectport=3001 connectaddress=172.25.217.149

# Verificar se foi adicionado
netsh interface portproxy show v4tov4

Write-Host "Configuração concluída! Tente acessar: http://localhost:3001" -ForegroundColor Green
Write-Host "Ou tente: http://127.0.0.1:3001" -ForegroundColor Green