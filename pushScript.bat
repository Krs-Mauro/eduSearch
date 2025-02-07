@echo off
git add .
set /p message="Enter commit message: "
git commit -m "%message%"
git push
call npm run build
IF ERRORLEVEL 1 (
    echo Build failed
    pause
    exit /b 1
)
echo Starting Firebase deployment...
firebase deploy
echo Firebase deployment finished.