# Add all changes
git add .

echo "Enter commit message:"
read message

git commit -m "$message"

git push

npm run build

firebase  deploy
