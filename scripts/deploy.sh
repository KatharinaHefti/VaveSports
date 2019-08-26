#!/bin/bash

clear
printf '\e[3J'

echo ""
echo "-------------------------------------"
echo " Upload Fresh Showcase"
echo "-------------------------------------"
echo ""

if [[ $1 == "staging" ]]
then

  npm update

  npm run build

  git add .
  git commit -am "Upload Fresh Build"
  npm version patch
  git push && git push --tags


  aws --region eu-central-1 s3 sync dist s3://epha.io/showcase/ --exclude .DS_Store --delete 
  aws cloudfront create-invalidation --distribution-id 	E3O8ET4HHUEUOM --paths /showcase/index.html

fi

printf " \n"
