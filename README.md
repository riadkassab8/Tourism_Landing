# Tourist Landing Page

A modern, responsive landing page built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing

## Project Structure

This is a monorepo project using npm workspaces:

```
tourist-power/
├── artifacts/
│   ├── tourist-landing/    # Main landing page application
│   ├── api-server/         # Backend API server
│   └── mockup-sandbox/     # Mockup sandbox environment
├── lib/
│   ├── api-client-react/   # React API client
│   ├── api-spec/           # API specifications
│   ├── api-zod/            # Zod schemas
│   └── db/                 # Database utilities
└── scripts/                # Build and utility scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

To run the landing page:

```bash
cd artifacts/tourist-landing
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
cd artifacts/tourist-landing
npm run build
```

### Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## License

MIT
