git clone https://github.com/pete-gi/easy3.git
cd easy3
git remote rm origin
rd /s /q .git
del .gitignore
cd ..
rename "easy3" "www"
cd www
yarn
cd ..
del easy3.bat