# Contributing to My Food

Thank you for considering contributing to My Food! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/My-food.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Add your message"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional but recommended)
- A mobile device with Expo Go app OR an emulator

### Installation
```bash
npm install
npm start
```

## Project Structure

```
My-food/
├── App.js                      # Main app entry with navigation setup
├── screens/                    # All screen components
│   ├── SignUpScreen.js        # User registration
│   ├── SignInScreen.js        # User authentication
│   ├── HomeScreen.js          # Main screen with camera
│   ├── FavoritesScreen.js     # User's favorite foods
│   ├── RecommendationScreen.js # Personalized recommendations
│   └── DetailsScreen.js       # Food detail view
├── assets/                     # Images and static assets
├── app.json                    # Expo configuration
├── package.json               # Dependencies
└── babel.config.js            # Babel configuration
```

## Coding Standards

### JavaScript Style Guide
- Use ES6+ features (const/let, arrow functions, destructuring)
- Use functional components with hooks
- Follow the existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic

### React Native Best Practices
- Use React hooks (useState, useEffect, etc.)
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use StyleSheet for styling (already implemented)
- Handle permissions properly before accessing device features

### Component Guidelines
- Each screen should be in its own file in the `screens/` directory
- Use consistent naming: `ScreenName.js` for screens
- Include proper prop validation
- Handle loading and error states
- Provide user feedback for actions (alerts, toasts)

## Testing

Before submitting a PR:
1. Test on both iOS and Android if possible
2. Test all navigation flows
3. Test camera and image picker functionality
4. Verify all buttons and interactive elements work
5. Check for console warnings and errors

## Pull Request Guidelines

### PR Title
Use descriptive titles:
- `feat: Add search functionality`
- `fix: Resolve camera permission issue`
- `docs: Update README with setup instructions`
- `style: Improve home screen layout`

### PR Description
Include:
- What changes were made
- Why the changes were necessary
- Any breaking changes
- Screenshots (for UI changes)
- Testing performed

### Checklist
- [ ] Code follows the project's style guidelines
- [ ] Changes have been tested on a device/emulator
- [ ] No console errors or warnings
- [ ] Documentation updated if needed
- [ ] Commit messages are clear and descriptive

## Feature Requests

We welcome feature requests! Please:
1. Check if the feature already exists or is planned
2. Open an issue with the "enhancement" label
3. Describe the feature and its benefits
4. Provide use cases if applicable

## Bug Reports

When reporting bugs:
1. Use the issue tracker
2. Include a clear title and description
3. Provide steps to reproduce
4. Include screenshots if applicable
5. Specify device and OS version
6. Include relevant error messages

## Code Review Process

1. All PRs require at least one review
2. Address review comments promptly
3. Keep PRs focused and reasonably sized
4. Be open to feedback and suggestions

## Questions?

Feel free to:
- Open an issue for questions
- Join our community discussions
- Contact the maintainers

Thank you for contributing to My Food! 🍕🍣🍔
