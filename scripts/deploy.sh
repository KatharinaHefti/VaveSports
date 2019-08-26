#!/bin/bash

clear
printf '\e[3J'

echo ""
echo "-------------------------------------"
echo " Upload Fresh Showcase"
echo "-------------------------------------"
echo ""
view="showcase"

if [[ $1 == "staging" ]]
then
  dist="E3O8ET4HHUEUOM"

  npm update

  npm run build

  git add .
  git commit -am "Upload Fresh Build"
  npm version patch
  git push && git push --tags


  aws --region eu-central-1 s3 --delete sync dist s3://epha.io/$view/ --exclude .DS_Store

  echo ""
  paths="/$view/index.html"
  echo "Invalidating ${paths}"
  id=$(aws cloudfront create-invalidation --distribution-id $dist --paths $paths | grep Id | awk -F '"' '{print $4}')
  aws cloudfront wait invalidation-completed --distribution-id $dist --id $id
  osascript -e 'display notification "Invalidated $view!" with title "AWS" subtitle "Cloudfront" sound name "Submarine"'
fi

printf " \n"
