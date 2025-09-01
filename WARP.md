# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

King Marketing (Logical Marketing) is a React + TypeScript marketing agency website built with Vite, featuring:
- Modern React 18 with TypeScript
- Supabase authentication and backend
- Tailwind CSS for styling with custom red branding (#E8222A)
- Dark/light theme support
- SEO optimization with structured data
- Comprehensive routing with protected routes

## Development Commands

### Core Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Testing & Debugging
```bash
# Run ESLint with auto-fix
npx eslint . --fix

# Check TypeScript without building
npx tsc --noEmit

# Analyze bundle size
npx vite-bundle-analyzer
```

## Architecture Overview

### Application Structure
- **Entry Point**: `src/main.tsx` - Sets up React root with HelmetProvider
- **App Component**: `src/App.tsx` - Main routing and provider setup
- **Contexts**: Theme and Auth management with React Context
- **Components**: Organized by feature (auth/, shared components)
- **Pages**: Full page components with routing
- **Lib**: Utilities and external service configs (Supabase)

### Key Architectural Patterns

**Provider Hierarchy**:
```
ThemeProvider
  └── AuthProvider
      └── BrowserRouter
          └── Routes/Components
```

**Authentication Flow**:
- Supabase integration in `src/lib/supabase.ts`
- AuthContext provides user state and auth methods
- ProtectedRoute component handles route protection
- Auth pages: `/auth/login`, `/auth/signup`

**Theme System**:
- ThemeContext manages dark/light mode
- Tailwind CSS with `class` dark mode strategy
- Custom red branding color: #E8222A (King Kong inspired)
- Persistent theme preference in localStorage

**Route Structure**:
- Home: Landing page with all main sections
- Marketing pages: `/services`, `/case-studies`, `/about`, etc.
- Resources: `/resources/guides`, `/resources/reports`, etc.
- Authentication: `/auth/*` routes
- Protected: `/dashboard` (requires auth)

### Environment Configuration

Required environment variables:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Build Configuration

**Vite Setup**:
- React plugin for JSX/TSX support
- Manual chunk splitting for vendor libraries
- Optimized dependencies with lucide-react excluded
- Public directory for static assets

**TypeScript**:
- Project references structure with separate app/node configs
- Modern ES2020 target
- Strict type checking enabled

## Development Guidelines

### Component Organization
- Shared components in `/src/components/`
- Feature-specific components in subdirectories (e.g., `/auth/`)
- Page components in `/src/pages/`
- Context providers in `/src/contexts/`

### State Management
- React Context for global state (theme, auth)
- Local component state for UI interactions
- Supabase handles backend state and authentication

### Styling Approach
- Tailwind CSS utility-first
- Dark mode classes: `dark:*`
- Custom theme extensions in `tailwind.config.js`
- Responsive design with mobile-first approach

### Authentication Patterns
- Use `useAuth()` hook to access auth state
- Wrap protected routes with `<ProtectedRoute>`
- Handle loading states during auth initialization
- Redirect patterns for login/logout flows

### SEO Implementation
- React Helmet Async for meta tags
- Structured data in components and HTML
- Custom SEOHead component for dynamic meta
- Sitemap route for search engine crawling

### Performance Considerations
- Vite's fast HMR for development
- Code splitting by vendor libraries
- Font preloading and display optimization
- DNS prefetch for external resources

## Common Development Tasks

### Adding New Pages
1. Create component in `/src/pages/`
2. Add route to `App.tsx`
3. Update navigation if needed
4. Add SEO meta tags

### Authentication Features
1. Use `useAuth()` hook for user state
2. Implement loading states
3. Handle error states from Supabase
4. Add proper TypeScript types

### Theme Features
1. Use `useTheme()` hook for theme state
2. Apply Tailwind dark mode classes
3. Test both light and dark modes
4. Ensure accessibility compliance

### Database Operations
1. Import `supabase` from `/src/lib/supabase.ts`
2. Use async/await patterns
3. Handle error responses
4. Type responses with Supabase types
