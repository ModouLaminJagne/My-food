# Flutter App Quick Start Guide

## Overview

This Flutter/Dart version of My Food replicates all the functionality of the React Native version with native Flutter widgets and Dart programming language.

## What's Included

### 📱 All Screens Implemented
- ✅ Sign In Screen with email/password validation
- ✅ Sign Up Screen with profile photo upload
- ✅ Home Screen with camera integration
- ✅ Favorites Screen with add/remove functionality
- ✅ Recommendations Screen with personalized suggestions
- ✅ Details Screen with nutrition information

### 🛠️ Key Features
- Material Design UI components
- Image picker for profile photos
- Camera integration for food photos
- Navigation between screens
- Form validation
- State management

## Prerequisites

Before running the Flutter app, ensure you have:

1. **Flutter SDK** (3.0.0 or higher)
   ```bash
   # Check if Flutter is installed
   flutter --version
   
   # If not installed, download from:
   # https://docs.flutter.dev/get-started/install
   ```

2. **IDE** (Choose one)
   - VS Code with Flutter extension
   - Android Studio with Flutter plugin
   - IntelliJ IDEA with Flutter plugin

3. **Device or Emulator**
   - Android device/emulator
   - iOS device/simulator (macOS only)
   - Chrome browser (for web)

## Quick Setup

### 1. Navigate to Flutter App
```bash
cd flutter_app
```

### 2. Get Dependencies
```bash
flutter pub get
```

### 3. Check Your Setup
```bash
flutter doctor
```

### 4. Run the App
```bash
# List available devices
flutter devices

# Run on connected device
flutter run

# Or run on specific platform
flutter run -d chrome        # Web
flutter run -d android       # Android
flutter run -d ios          # iOS (macOS only)
```

## Development Commands

### Hot Reload
While the app is running, press:
- `r` - Hot reload (updates UI instantly)
- `R` - Hot restart (full app restart)
- `q` - Quit

### Build for Production

**Android APK:**
```bash
flutter build apk --release
# Output: build/app/outputs/flutter-apk/app-release.apk
```

**iOS App:**
```bash
flutter build ios --release
# Requires macOS and Xcode
```

**Web App:**
```bash
flutter build web --release
# Output: build/web/
```

## Troubleshooting

### Common Issues

**1. "flutter: command not found"**
- Install Flutter SDK: https://docs.flutter.dev/get-started/install
- Add Flutter to PATH: `export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"`

**2. Camera permission issues**
- Android: Check `android/app/src/main/AndroidManifest.xml`
- iOS: Check `ios/Runner/Info.plist`

**3. Package conflicts**
```bash
flutter clean
flutter pub get
```

**4. Gradle issues (Android)**
```bash
cd android
./gradlew clean
cd ..
flutter run
```

## Project Architecture

```
flutter_app/
├── lib/
│   ├── main.dart                    # Entry point, navigation setup
│   ├── screens/
│   │   ├── signin_screen.dart       # Login functionality
│   │   ├── signup_screen.dart       # Registration with photo upload
│   │   ├── home_screen.dart         # Main screen with camera
│   │   ├── favorites_screen.dart    # Favorite foods management
│   │   ├── recommendation_screen.dart # Food suggestions
│   │   └── details_screen.dart      # Food details view
│   ├── models/                      # Data models (future)
│   └── widgets/                     # Reusable widgets (future)
├── android/                         # Android-specific config
├── ios/                            # iOS-specific config
├── web/                            # Web-specific config
└── pubspec.yaml                    # Dependencies
```

## Key Dependencies

```yaml
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2    # iOS-style icons
  image_picker: ^1.0.4        # Pick images from gallery
  camera: ^0.10.5+5           # Camera functionality
```

## Comparison: React Native vs Flutter

| Feature | React Native | Flutter |
|---------|-------------|---------|
| Language | JavaScript | Dart |
| UI Framework | React Native components | Flutter widgets |
| Navigation | React Navigation | Navigator 2.0 |
| State | useState hooks | StatefulWidget |
| Camera | expo-camera | image_picker + camera |
| Hot Reload | ✅ Fast Refresh | ✅ Hot Reload |

## Next Steps

### For Development:
1. Add state management (Provider, Riverpod, or BLoC)
2. Integrate a backend API
3. Add local storage (shared_preferences, hive)
4. Implement authentication
5. Add unit and widget tests

### For Production:
1. Configure app signing (Android)
2. Configure provisioning profiles (iOS)
3. Set up CI/CD pipeline
4. Test on real devices
5. Publish to app stores

## Useful Resources

- [Flutter Documentation](https://docs.flutter.dev)
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Flutter Cookbook](https://docs.flutter.dev/cookbook)
- [Pub.dev Packages](https://pub.dev)
- [Flutter Community](https://flutter.dev/community)

## Support

For issues specific to the Flutter version:
1. Check `flutter doctor` output
2. Review error messages in terminal
3. Check Flutter documentation
4. Search on [Stack Overflow](https://stackoverflow.com/questions/tagged/flutter)

For issues with the app logic:
- Compare with the React Native version
- Check the original issue tracker
