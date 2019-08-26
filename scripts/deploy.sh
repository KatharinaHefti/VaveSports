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


  aws --region eu-central-1 s3 --delete sync dist s3://epha.io/showcase/ --exclude .DS_Store

  echo ""
  did=E3O8ET4HHUEUOM
  pth="/showcase/index.html"
  echo "Invalidating index.html"
  iid=$(aws cloudfront create-invalidation --distribution-id $did --paths $pth | grep Id | awk -F '"' '{print $4}')
  # aws cloudfront invalidation-completed --distribution-id $did --id $iid && notfiy "Invalidation complete"

fi

printf " \n"
