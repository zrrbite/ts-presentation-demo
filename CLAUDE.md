# presentation-demo

## Overview
TypeScript project created with bootstrap-ts-project.sh

**Framework**: react

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run type-check   # Type check without emitting files
```

## Architecture

- **TypeScript**: Strict mode enabled, no implicit any
- **ESLint**: Enforces code quality
- **Prettier**: Consistent formatting
- **Project structure**:
  - `src/` - Source files
  - `tests/` - Test files
  - `dist/` - Build output (gitignored)

## Git Hooks

- **Pre-commit**: Runs Prettier on staged files
- **Pre-push**: Type checks and lints all files

## Development Workflow

1. Make changes in `src/`
2. Git will auto-format on commit
3. Push will fail if type errors or lint issues exist
4. Fix issues, then push again

## Neovim Integration

- LSP: `ts_ls` provides autocomplete, go-to-definition, refactoring
- DAP: F5 to debug, breakpoints with Space+b
- Format: Space+F to format file

## Notes

- Add any project-specific notes here
- Update this file as the project evolves
