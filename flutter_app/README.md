# My Food - Flutter Version

A Flutter/Dart version of the My Food mobile application for food lovers!

## Features

- **Sign Up**: Create an account with profile photo, name, surname, email, password, and country
- **Sign In**: Login with email and password
- **Home Page**: Browse popular foods and take photos of your meals with the camera feature
- **Favorites**: Save and manage your favorite foods
- **Recommendations**: Get personalized food recommendations
- **Details**: View detailed information about any food including nutrition, ingredients, and ratings

## Getting Started

### Prerequisites

- Flutter SDK (3.0.0 or higher)
- Dart SDK (included with Flutter)
- Android Studio / Xcode (for mobile development)
- VS Code or Android Studio IDE

### Installation

1. Navigate to the Flutter app directory:
   ```bash
   cd flutter_app
   ```

2. Install dependencies:
   ```bash
   flutter pub get
   ```

3. Run the app:
   ```bash
   flutter run
   ```

   Or for specific platforms:
   ```bash
   flutter run -d chrome        # For web
   flutter run -d android       # For Android
   flutter run -d ios          # For iOS (macOS only)
   ```

## Project Structure

```
flutter_app/
├── lib/
│   ├── main.dart                    # App entry point with navigation
│   ├── screens/
│   │   ├── signin_screen.dart       # Sign in screen
│   │   ├── signup_screen.dart       # Sign up screen
│   │   ├── home_screen.dart         # Home screen with camera
│   │   ├── favorites_screen.dart    # Favorites management
│   │   ├── recommendation_screen.dart # Recommendations
│   │   └── details_screen.dart      # Food details
│   ├── models/                      # Data models
│   └── widgets/                     # Reusable widgets
├── android/                         # Android-specific files
├── ios/                            # iOS-specific files
├── web/                            # Web-specific files
└── pubspec.yaml                    # Dependencies
```

## Dependencies

- **flutter**: Cross-platform UI framework
- **image_picker**: For selecting images from gallery and camera
- **camera**: For camera functionality

## Permissions

### Android (android/app/src/main/AndroidManifest.xml)
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

### iOS (ios/Runner/Info.plist)
```xml
<key>NSCameraUsageDescription</key>
<string>This app needs camera access to take food photos</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app needs photo library access to select profile photos</string>
```

## Building for Production

### Android
```bash
flutter build apk --release
```

### iOS
```bash
flutter build ios --release
```

### Web
```bash
flutter build web --release
```

## Technologies Used

- **Flutter**: Google's UI toolkit for building natively compiled applications
- **Dart**: Programming language optimized for building mobile, desktop, server, and web applications
- **Material Design**: Modern and intuitive UI design system

## Differences from React Native Version

This Flutter version is a faithful port of the React Native app with the following architecture differences:

1. **State Management**: Uses Flutter's built-in StatefulWidget for local state
2. **Navigation**: Uses Flutter's Navigator 2.0 with named routes
3. **Camera**: Uses Flutter's image_picker and camera packages
4. **UI Components**: Material Design widgets instead of React Native components

## Development Tips

1. Hot reload: Press `r` in the terminal while the app is running
2. Hot restart: Press `R` in the terminal
3. Debug mode: `flutter run --debug`
4. Profile mode: `flutter run --profile`
5. Check for issues: `flutter doctor`

## License

This project is licensed under the ISC License - same as the original React Native version.

## Related Projects

- **React Native Version**: Located in the parent directory - the original My Food app built with React Native and Expo
