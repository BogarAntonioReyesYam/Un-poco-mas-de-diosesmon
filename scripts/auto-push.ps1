Write-Host 'Vigilando cambios... (Ctrl+C para detener)' -ForegroundColor Cyan
while ($true) {
  $st = git status --porcelain
  if ($st) {
    Write-Host "Cambios detectados, subiendo..." -ForegroundColor Yellow
    git add -A
    git commit -m "auto: cambios $(Get-Date -Format 'yyyy-MM-dd HH:mm')" 2>$null | Out-Null
    if (-not $?) { git push origin main }
    Write-Host 'Subido' -ForegroundColor Green
  }
  Start-Sleep -Seconds 5
}
