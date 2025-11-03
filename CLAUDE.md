# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern Next.js 15 frontend application built with React 19 and TypeScript, featuring comprehensive UI components, state management, and API integration. Uses pnpm as the package manager.

## Development Commands

### Core Commands
```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm type-check
```

### Code Quality
```bash
# Run linter (Biome)
pnpm lint

# Fix linting issues
pnpm lint:fix

# Check formatting
pnpm format:check

# Fix formatting
pnpm format:fix
```

**Important**: Always run `pnpm lint:fix` and `pnpm format:fix` before committing.

### Adding shadcn/ui Components
```bash
# Add a new shadcn/ui component
pnpm dlx shadcn@latest add <component-name>
```

## Architecture

### Route Groups
The app uses Next.js 15 App Router with distinct route groups:
- `(auth)/*` - Authentication pages (sign-in, sign-up, email-confirm, forgot-password, reset-password)
- `(public)/*` - Public-facing pages (contact, etc.)

Each route group has its own layout component.

### Provider Hierarchy
The application wraps components in a specific provider order (from `src/app/providers.tsx`):
1. `QueryClientProvider` - TanStack Query for server state
2. `NuqsAdapter` - URL state management
3. `ThemeProvider` - Dark/light mode
4. `GoogleOAuthProvider` - Google authentication
5. `AuthProvider` - Application authentication
6. `MainLayout` - Main layout wrapper

### API Layer Architecture
Located in `src/apis/`, organized by domain with a consistent structure:
```
src/apis/<domain>/
├── index.ts       # Exports all modules
├── requests.ts    # API request functions
├── queries.ts     # TanStack Query hooks
├── keys.ts        # Query key factories
└── types.ts       # TypeScript types
```

Domains include: `auths`, `appointments`, `blogs`, `categories`, `orders`, `products`, `uploads`, `users`

### HTTP Instance (`src/apis/http-instance.ts`)
- Singleton Axios instance with automatic token refresh
- Intercepts 401 responses and refreshes tokens automatically
- Stores access/refresh tokens in cookies (ECookie.ACCESS_TOKEN, ECookie.REFRESH_TOKEN)
- Implements retry logic (max 5 attempts) before redirecting to sign-in
- Queues failed requests during token refresh and retries them
- Automatically cleans empty/null/undefined parameters from requests
- Serializes query params using `qs` with array format 'repeat'

### State Management
- **Zustand stores** in `src/stores/`: UserStore, IntersectionStore, sheet-store
- Uses `auto-zustand-selectors-hook` for automatic selector generation
- UserStore persists to localStorage with hydration status tracking

### SVG Handling
SVGs are imported as React components using @svgr/webpack:
```tsx
import Icon from '@/assets/svg/icon.svg'
// Use as: <Icon />
```

For URL imports, use the `?url` suffix:
```tsx
import iconUrl from '@/assets/svg/icon.svg?url'
```

### Styling
- **Tailwind CSS 4.1** with custom configuration
- **shadcn/ui** components in `src/components/ui/` (New York style)
- **Biome** enforces sorted Tailwind classes automatically
- Color system uses CSS variables (--background, --foreground)

## Code Standards

### Formatting (Biome)
- **Indent**: 2 spaces
- **Line width**: 120 characters
- **Line ending**: LF (important for Windows users)
- **Quotes**: Single quotes for JS/TS, JSX
- **Semicolons**: Always
- **Trailing commas**: ES5 style
- **JSX**: Single quotes, bracket on new line

### Commits (Commitlint)
Follow conventional commits with these types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `chore`: Maintenance
- `style`: Formatting/styling
- `refactor`: Code refactoring
- `ci`: CI/CD changes
- `test`: Tests
- `revert`: Reverts
- `perf`: Performance
- `release`: Releases

Git hooks (Husky + lint-staged) automatically format and lint staged files on commit.

### Windows Development
**IMPORTANT**: For Windows users, configure git line endings before cloning:
```bash
git config --global core.eol lf
git config --global core.autocrlf input
```

## Environment Configuration

Create `.env.local` in the root:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Environment variables are accessed via `@/utils/const` (exports `env` object).

## Key Libraries

### UI Components
- **Radix UI**: Headless, accessible primitives
- **shadcn/ui**: Pre-built components on top of Radix
- **Lucide React**: Icon library
- **next-themes**: Theme switching
- **Framer Motion**: Animations
- **Embla Carousel**: Carousel components
- **Vaul**: Drawer components

### Forms & Data
- **React Hook Form**: Form management
- **Zod**: Schema validation with @hookform/resolvers
- **TanStack Query**: Server state management
- **TanStack Table**: Table components
- **nuqs**: URL state management

### Rich Text
- **Tiptap**: Rich text editor with extensions for blockquotes, code blocks, lists, headings, etc.

### Utilities
- **Axios**: HTTP client (wrapped in custom instance)
- **date-fns** & **dayjs**: Date manipulation
- **lodash**: Utility functions
- **Sonner**: Toast notifications
- **Socket.io Client**: Real-time communication
- **React Google Maps API**: Maps integration
- **React OAuth Google**: Google authentication

## Docker

### Development
```bash
docker-compose up --build
# Access at http://localhost:8080
```

### Production
```bash
docker build -f docker/Dockerfile -t platform-frontend .
docker run -p 3000:3000 platform-frontend
```

The production build uses Next.js standalone output mode for optimized deployment.

## Important Notes

- **Package Manager**: Always use `pnpm`, not npm or yarn
- **React Version**: React 19 - ensure compatibility when adding new packages
- **Next.js**: Uses App Router (not Pages Router)
- **Type Safety**: TypeScript strict mode enabled
- **Image Optimization**: Configured remote patterns for `precisionwood.s3.us-east-2.amazonaws.com` and `placehold.co`
- **Transpiled Packages**: `@react-google-maps/api` is transpiled via next.config.ts
