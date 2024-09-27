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


# -----------------------------------------------------------
https://tailwindcss.com/docs/installation

shared:
npm install -D tailwindcss
npx tailwindcss init


update tsconfig content
  content: ["./src/**/*.{html,js}"],

add src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;


npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


<!-- cd packages/shared-components
npm install @shadcn/ui -->


npm install tailwindcss-animate class-variance-authority clsx tailwind-merge


npm install lucide-react


Configure path aliases
I use the @ alias. This is how I configure it in tsconfig.json:

tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}


tailwind config:


const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

#global css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}




# -----------------------------------------------------------
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
