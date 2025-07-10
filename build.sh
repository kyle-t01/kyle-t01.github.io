echo "#building portfolio website"
cd frontend
npm run build
cd ..
rm -rf docs/*
cp -r frontend/build/* docs/