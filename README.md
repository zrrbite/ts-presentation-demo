# Presentation Demo - Claude Code TypeScript Workflow

This is a **live demonstration** of the TypeScript development workflow created with [Claude Code](https://claude.com/claude-code).

## What This Demonstrates

This entire project was scaffolded in **5 seconds** using a bootstrap script, showcasing:

- ✅ **Strict TypeScript** configuration (no implicit `any` types)
- ✅ **ESLint** for code quality enforcement
- ✅ **Prettier** for consistent formatting
- ✅ **Git Hooks** that block bad code from being pushed
- ✅ **Neovim LSP + DAP** debugging ready out of the box
- ✅ **React + Vite** with hot module replacement
- ✅ **CLAUDE.md** for project context

## The Four Quality Gates

This project demonstrates four automated quality gates:

### Gate 1: Prettier (Pre-commit)
- Enforces consistent code formatting
- Single quotes, proper spacing, etc.
- **Blocks commits** if formatting is wrong

### Gate 2: TypeScript (Pre-push)
- Type checks with `tsc --noEmit`
- Catches implicit `any` types
- **Blocks pushes** if type errors exist

### Gate 3: ESLint (Pre-push)
- Enforces best practices
- Catches missing return types, unused variables
- **Blocks pushes** if linting fails

### Gate 4: Vitest (Pre-push)
- Runs unit tests before push
- Catches logic bugs and runtime errors
- **Blocks pushes** if tests fail

## Quick Start

```bash
# Clone the repo
git clone https://github.com/zrrbite/presentation-demo.git
cd presentation-demo

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173 to see the app!

## Try Breaking the Rules

**1. Add code with bad formatting:**

```typescript
// Bad spacing and double quotes
const [count,setCount]=useState(0);
```

**2. Try to commit:**

```bash
npm run format  # Auto-fixes formatting
git add .
git commit -m "Fix formatting"
```

**3. Add code with type errors:**

```typescript
// Implicit 'any' type - TypeScript will reject this!
const handleClick = (e) => {
  console.log(e);
};
```

**4. Try to push:**

```bash
npm run type-check  # Shows type errors
npm run lint        # Shows linting warnings

# Fix the errors, then:
git push  # Now it works!
```

## How This Was Created

This project was generated using:

```bash
~/dotfiles/scripts/bootstrap-ts-project.sh presentation-demo --framework=react
```

**Time to fully-configured project: 5 seconds**

Compare that to manually:
- Configuring TypeScript (10-15 min)
- Setting up ESLint + Prettier (10-15 min)
- Writing git hooks (10-15 min)
- Configuring Neovim LSP + DAP (20-30 min)

**Total saved: 50-75 minutes per project**

## Available Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # Type check without emitting
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
```

## 🚀 Experimental: oxc-tools Branch

Want **50-100x faster** linting and **20-30x faster** formatting? Check out the `oxc-tools` branch!

This branch replaces ESLint and Prettier with Rust-based alternatives:

| Tool | Standard | Oxc (Rust) | Speedup |
|------|----------|------------|---------|
| Linting | ESLint (500ms) | oxlint (13ms) | **38x faster** |
| Formatting | Prettier (568ms) | oxfmt (29ms) | **19x faster** |

**Try it:**

```bash
git checkout oxc-tools
npm install
npm run lint        # Uses oxlint (blazing fast!)
npm run format      # Uses oxfmt (blazing fast!)
```

All four quality gates still work, just with faster tools! See [OXC-BRANCH-README.md](OXC-BRANCH-README.md) for details.

**Note:** oxfmt is in alpha. For production, stick with main branch (Prettier/ESLint).

## The Workflow Philosophy

1. **Bootstrap once, reuse forever** - Create templates, never repeat setup
2. **Make quality automatic** - Git hooks enforce standards without thinking
3. **Context is everything** - CLAUDE.md keeps the AI (and humans) informed
4. **Fail fast** - Catch issues at commit/push, not in code review

## Learn More

- [Claude Code Documentation](https://claude.com/claude-code)
- [Dotfiles Repo](https://github.com/zrrbite/dotfiles) - See the bootstrap scripts and configs
- [Presentation](https://github.com/zrrbite/dotfiles/blob/master/doc/claude-code-presentation.pdf) - Full talk about this workflow

## License

MIT - Use this as a template for your own projects!

---

**Meta:** This README was written with Claude Code, naturally.
