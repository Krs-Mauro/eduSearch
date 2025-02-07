@echo off
git add .
set /p message="Enter commit message: "
git commit -m "%message%"
git push
npm run build
timeout /t 5
echo Starting Firebase deployment...
firebase deploy
echo Firebase deployment finished.