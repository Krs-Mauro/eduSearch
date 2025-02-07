@echo off
git add .
set /p message="Enter commit message: "
git commit -m "%message%"
git push
npm run build
timeout /t 5
firebase deploy