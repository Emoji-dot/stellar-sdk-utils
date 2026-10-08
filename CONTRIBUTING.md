# Contributing to Stellar SDK Utils

Thank you for your interest in contributing to Stellar SDK Utils! We welcome contributions from the community and are pleased to have you join us.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Add tests** for any new functionality
5. **Ensure all tests pass**
   ```bash
   npm test
   ```
6. **Update documentation** if necessary
7. **Commit your changes** using conventional commits
   ```bash
   git commit -m "feat: add new validation feature"
   ```
8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create a Pull Request**

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Installation

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/your-username/stellar-sdk-utils.git
   cd stellar-sdk-utils
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for local development:
   ```bash
   cp .env.example .env
   ```

4. Run tests to ensure everything is working:
   ```bash
   npm test
   ```

### Development Workflow

1. **Start development mode:**
   ```bash
   npm run dev
   ```

2. **Run tests:**
   ```bash
   npm test
   # or watch mode
   npm run test:watch
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Lint and format:**
   ```bash
   npm run lint
   npm run format
   ```

## Coding Standards

### TypeScript Guidelines

- Use TypeScript strict mode
- Provide proper type annotations
- Prefer interfaces over types for object shapes
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Testing

- Write tests for all new functionality
- Maintain test coverage above 90%
- Use descriptive test names
- Group related tests using `describe` blocks

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages:

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding or updating tests
- `chore:` maintenance tasks

Example:
```
feat: add transaction validation for claimable balances

- Implements validation logic for claimable balance operations
- Adds support for predicate validation
- Includes comprehensive test coverage
```

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multiline objects/arrays
- Use semicolons
- Keep lines under 100 characters

## Project Structure

```
src/
├── index.ts              # Main entry point
├── types/               # Type definitions
├── validators/          # Validation logic
├── monitors/           # Account monitoring
├── networks/           # Network configurations
└── utils/              # Utility functions

docs/                   # Documentation
tests/                  # Test files
examples/              # Usage examples
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run integration tests only
npm run test:integration
```

### Writing Tests

- Place test files alongside source files with `.test.ts` extension
- Use Jest for testing framework
- Mock external dependencies
- Test both success and error cases

Example test structure:
```typescript
describe('StellarValidator', () => {
  describe('validateTransaction', () => {
    it('should validate a valid transaction', async () => {
      // Test implementation
    });

    it('should reject invalid transaction', async () => {
      // Test implementation
    });
  });
});
```

## Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for all public APIs
- Update API documentation in `/docs`
- Include usage examples for new features

## Getting Help

- **GitHub Issues** - for bugs and feature requests
- **GitHub Discussions** - for questions and community discussion
- **Discord** - join our community chat (link in README)

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes for significant contributions
- GitHub contributor graphs

Thank you for contributing to Stellar SDK Utils! 🚀