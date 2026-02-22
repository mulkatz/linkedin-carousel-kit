# Contributing to linkedin-carousel-kit

Thank you for your interest in contributing! Whether it's a new slide layout, a design improvement, or a bug fix — all contributions are welcome.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

- Use [GitHub Issues](https://github.com/mulkatz/linkedin-carousel-kit/issues) with the "bug" label
- Include: steps to reproduce, expected behavior, actual behavior, screenshots if visual
- Check existing issues first to avoid duplicates

### Suggesting Features

- Open a [GitHub Issue](https://github.com/mulkatz/linkedin-carousel-kit/issues) with the "enhancement" label
- Describe the use case and proposed solution
- For design changes, include mockups or reference images

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes following our conventions (see below)
4. Test visually: `npm run dev` and verify slides render correctly
5. Test export: `npm run export` and check the PDF output
6. Commit with conventional commits: `feat: add new feature`
7. Push and open a Pull Request against `main`

### Development Setup

```bash
git clone https://github.com/mulkatz/linkedin-carousel-kit.git
cd linkedin-carousel-kit
npm install
npm run dev
```

## Conventions

- **Language:** All code and comments in English
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`
- **Branches:** `feat/description`, `fix/description`
- **Design tokens:** Use project design tokens (Sand palette, Copper accent) — never raw color values outside the system
- **Typography:** Playfair Display for headlines, DM Sans for body — no exceptions
- **Slide quality:** At least 30% whitespace per slide, max 6-7 elements

## Design Contributions

When contributing visual changes:

- Follow the [Brand Style Guide](BRAND-STYLE-GUIDE.md)
- Test at 1080x1080 (the actual LinkedIn carousel size)
- Verify both browser preview and PDF export
- Ensure text remains readable on mobile

## Questions?

Open a [Discussion](https://github.com/mulkatz/linkedin-carousel-kit/discussions) for questions that aren't bug reports or feature requests.
