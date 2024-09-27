# Create the root directory

mkdir lerna-monorepo
cd lerna-monorepo

# Initialize npm and install Lerna

npm init -y
npm install --save-dev lerna

# Add workspace

in root package.json add:

"workspaces": [
"packages/*"
],

# Init lerna

npx lerna init

# lerna.json update:

in lerna.json add:
"npmClient": "npm"

# Create packages directory

mkdir packages

# Create Next.js frontend projects

npx create-next-app@latest packages/frontend-a --typescript --eslint --tailwind --src-dir --app --import-alias "@/_"
npx create-next-app@latest packages/frontend-b --typescript --eslint --tailwind --src-dir --app --import-alias "@/_"

# Create NestJS project

npx @nestjs/cli new packages/backend

# Create shared components folder

mkdir packages/shared
cd packages/shared
npm init -y
cd ../..

# Update package.json in shared

{
"name": "shared",
"version": "1.0.0",
"description": "Shared UI components",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}

# Install shadcn-ui in both frontend projects

cd packages/frontend-a
npx shadcn-ui@latest init
cd ../frontend-b
npx shadcn-ui@latest init
cd ../..

# Add shared-ui as a dependency to both frontend projects

npm install shared --workspace=packages/frontend-a
npm install shared --workspace=packages/frontend-b

# Bootstrap the project

nmp i

# :( )

all three of your projects (both Next.js frontends and the NestJS backend) are trying to use the same port (3000) by default.

# Update package.json for frontend-a

cat <<EOT > packages/frontend-a/package.json
{
"name": "frontend-a",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev -p 3003",
"build": "next build",
"start": "next start -p 3003",
"lint": "next lint"
},
"dependencies": {
// ... (keep existing dependencies)
}
}
EOT

# Update package.json for frontend-b

cat <<EOT > packages/frontend-b/package.json
{
"name": "frontend-b",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev -p 3001",
"build": "next build",
"start": "next start -p 3001",
"lint": "next lint"
},
"dependencies": {
// ... (keep existing dependencies)
}
}
EOT

# Update main.ts for backend

cat <<EOT > packages/backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
const app = await NestFactory.create(AppModule);
await app.listen(3002);
}
bootstrap();
EOT

# Update root package.json

cat <<EOT > package.json
{
"name": "root",
"private": true,
"workspaces": [
"packages/*"
],
"devDependencies": {
"lerna": "^8.1.8"
},
"scripts": {
"start": "lerna run start --parallel",
"dev": "lerna run dev --parallel",
"build": "lerna run build --stream",
"test": "lerna run test --stream"
}
}
EOT

# change the start:dev in BE package.json to this:

    "dev": "nest start --watch",

# now npm run dev will run all projects <3

npm run dev

# Set up shared-ui with shadcn-ui

cd packages/shared
npm init -y
npm install react react-dom next @types/react @types/react-dom
npx shadcn-ui@latest init

# Update package.json in shared-ui

cat <<EOT > package.json
{
"name": "@lerna-monorepo/shared",
"version": "1.0.0",
"description": "Shared UI components",
"main": "index.ts",
"scripts": {
"build": "tsc"
},
"keywords": [],
"author": "",
"license": "ISC",
"peerDependencies": {
"react": "^18.0.0",
"react-dom": "^18.0.0",
"next": "^13.0.0"
}
}
EOT

# :)

echo "export \* from './components/SheetSlider';" > index.ts

# Set up shared-ui with shadcn-ui

cd packages/shared-ui
npm init -y
npm install react react-dom next @types/react @types/react-dom
npx shadcn-ui@latest ini

#in shared:
npx shadcn@latest add sheet

# Update frontend-a and frontend-b to use the shared component

for project in frontend-a frontend-b; do
cd packages/$project

# Install the shared-ui package

npm install @lerna-monorepo/shared-ui

# Create a page to demonstrate the shared component

cat <<EOT > src/app/shared-component-demo.tsx
import { SheetSlider } from '@lerna-monorepo/shared-ui';

export default function SharedComponentDemo() {
return (

<div className="p-4">
<h1 className="text-2xl font-bold mb-4">Shared Component Demo</h1>
<SheetSlider title="Shared Sheet Slider" description="This is a shared component from @lerna-monorepo/shared-ui" />
</div>
);
}
EOT

cd ../..
done

# Update root package.json

cat <<EOT > package.json
{
"name": "root",
"private": true,
"workspaces": [
"packages/*"
],
"devDependencies": {
"lerna": "^8.1.8"
},
"scripts": {
"start": "lerna run start --parallel",
"dev": "lerna run dev --parallel",
"build": "lerna run build --stream",
"test": "lerna run test --stream"
}
}
EOT

# Bootstrap the project

npx lerna bootstrap
