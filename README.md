# My Food

A mobile application for food lovers! Available in both React Native and Flutter versions.

> 📱 **Two Platforms, One App!** This repository contains complete implementations in both React Native and Flutter.  
> See the [**Dual Platform Guide**](DUAL_PLATFORM_GUIDE.md) for a complete overview.

## Versions Available

- **React Native Version** (Root directory): Built with Expo - See below for setup for eetails.
- **Flutter Version** (`flutter_app/` directory): Built with Dart/Flutter - [See Flutter README](flutter_app/README.md)

## React Native Version

My Food is a React Native app built with Expo that helps you discover, save, and explore different food options.

## Features

- **Sign Up**: Create an account with profile photo, name, surname, email, password, and country
- **Sign In**: Login with email and password
- **Home Page**: Browse popular foods and take photos of your meals with the camera feature
- **Favorites**: Save and manage your favorite foods
- **Recommendations**: Get personalized food recommendations
- **Details**: View detailed information about any food including nutrition, ingredients, and ratings

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ModouLaminJagne/My-food.git
   cd My-food
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run on your device:
   - Scan the QR code with Expo Go app (Android/iOS)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

## Project Structure

### React Native Version (Root)
```
My-food/
├── screens/           # All app screens
│   ├── SignUpScreen.js
│   ├── SignInScreen.js
│   ├── HomeScreen.js
│   ├── FavoritesScreen.js
│   ├── RecommendationScreen.js
│   └── DetailsScreen.js
├── assets/            # Images and assets
├── App.js             # Main app entry with navigation
├── app.json           # Expo configuration
└── package.json       # Dependencies
```

### Flutter Version (`flutter_app/`)
```
flutter_app/
├── lib/
│   ├── main.dart                    # App entry point
│   └── screens/                     # All Flutter screens
├── android/                         # Android-specific files
├── ios/                            # iOS-specific files
└── pubspec.yaml                    # Flutter dependencies
```

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and tools
- **React Navigation**: Navigation library
- **Expo Camera**: Camera functionality
- **Expo Image Picker**: Image selection and upload
- **Flutter**: For flutter Developers 
## Permissions

The app requires the following permissions:
- Camera access (for taking food photos)
- Photo library access (for profile photo upload)

## License

This project is licensed under the MIT License.

