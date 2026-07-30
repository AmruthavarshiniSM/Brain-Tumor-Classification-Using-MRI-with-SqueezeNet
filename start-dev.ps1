$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$backend = Join-Path $root 'backend'
$frontend = Join-Path $root 'frontend'

Write-Host 'Starting backend...' -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$backend'; npm start" 

Start-Sleep -Seconds 2

Write-Host 'Starting frontend...' -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$frontend'; npm run dev" 

Write-Host 'Both services started. Open http://localhost:5173 for the frontend.' -ForegroundColor Green
