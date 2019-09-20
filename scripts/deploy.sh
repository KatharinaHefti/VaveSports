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

  git add .
  git commit -am "Upload Fresh Build"
  npm version patch
  git push && git push --tags

  npm run build

  aws --region eu-central-1 s3 --delete sync dist s3://epha.io/$view/ --exclude .DS_Store

  echo ""
  paths="/$view/*"
  echo "> Invalidating ${paths} - Please wait"
  id=$(aws cloudfront create-invalidation --distribution-id $dist --paths $paths | grep Id | awk -F '"' '{print $4}')
  aws cloudfront wait invalidation-completed --distribution-id $dist --id $id
  # osascript -e 'display notification "Invalidated showcase" with title "AWS" subtitle "Cloudfront" sound name "Submarine" '
  open "https://epha.io/$view/"

fi

if [[ $1 == "release" ]]
then
  dist="ES8QILS3Z5OA1"

  npm run build

  aws --region eu-central-1 s3 --delete sync dist s3://epha.ch/$view/ --exclude .DS_Store

  echo ""
  paths="/$view/*"
  echo "> Invalidating ${paths} - Please wait"
  id=$(aws cloudfront create-invalidation --distribution-id $dist --paths $paths | grep Id | awk -F '"' '{print $4}')
  aws cloudfront wait invalidation-completed --distribution-id $dist --id $id
  # osascript -e 'display notification "Invalidated showcase" with title "AWS" subtitle "Cloudfront" sound name "Submarine" '
  open "https://epha.ch/$view/"

fi

printf " \n"
