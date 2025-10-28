#!/bin/bash

echo "Type your commit : \n";
read commit;

git add .
git commit -m '$commit';
git push
