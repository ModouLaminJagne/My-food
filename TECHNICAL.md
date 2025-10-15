# My Food App - Technical Summary

## Overview
My Food is a React Native mobile application built with Expo that provides users with a comprehensive food discovery and management experience.

## Tech Stack
- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Stack Navigator)
- **Camera**: Expo Camera & Expo Image Picker
- **UI**: React Native StyleSheet with custom styling
- **State Management**: React Hooks (useState, useEffect)

## Application Flow

```
┌─────────────┐
│  Sign In    │ ← Entry Point
└──────┬──────┘
       │
       ├─────────────────┐
       │                 │
       ▼                 ▼
┌─────────────┐   ┌─────────────┐
│  Sign Up    │   │    Home     │ ← Main Hub
└─────────────┘   └──────┬──────┘
                         │
           ┌─────────────┼─────────────┐
           │             │             │
           ▼             ▼             ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │  Favorites  │ │Recommendation│ │   Details   │
    └─────────────┘ └─────────────┘ └─────────────┘
```

## Screen Details

### 1. SignInScreen (`screens/SignInScreen.js`)
**Purpose**: User authentication
**Features**:
- Email input field
- Password input field (secure)
- Sign in button
- Navigation to Sign Up
- Form validation

**Styling**: 
- Tomato red (#FF6347) primary color
- Clean, centered layout
- Consistent input styling

### 2. SignUpScreen (`screens/SignUpScreen.js`)
**Purpose**: User registration
**Features**:
- Profile photo upload (image picker)
- Name input field
- Surname input field
- Email input field
- Password input field (secure)
- Country input field
- Sign up button
- Navigation to Sign In
- Form validation

**Styling**:
- Scrollable form
- Circular profile photo placeholder
- Consistent with app theme

### 3. HomeScreen (`screens/HomeScreen.js`)
**Purpose**: Main application hub
**Features**:
- Camera button to capture food photos
- Photo gallery for captured images
- List of popular foods
- Navigation to Favorites
- Navigation to Recommendations
- Food item cards with ratings
- Tap to view details

**Permissions Required**:
- Camera access
- Photo library access

**Styling**:
- Card-based layout
- Horizontal scroll for images
- Prominent camera button

### 4. FavoritesScreen (`screens/FavoritesScreen.js`)
**Purpose**: Manage favorite foods
**Features**:
- List of favorited foods
- Remove from favorites
- Empty state message
- Tap to view details
- Back to home navigation

**State Management**:
- Local state for favorites list
- Remove functionality with confirmation

**Styling**:
- List view with cards
- Remove button per item
- Empty state centered

### 5. RecommendationScreen (`screens/RecommendationScreen.js`)
**Purpose**: Personalized food suggestions
**Features**:
- List of recommended foods
- Recommendation reasons
- Food ratings
- Category information
- Tap to view details
- Back to home navigation

**Recommendation Logic**:
- Based on user preferences
- Location-based suggestions
- Trending items
- Highly rated options

**Styling**:
- Card layout with green accent
- Reason indicators
- Arrow for navigation hint

### 6. DetailsScreen (`screens/DetailsScreen.js`)
**Purpose**: Detailed food information
**Features**:
- Food name and category
- Rating and reviews count
- Description
- Nutrition information (calories, protein, carbs, fat)
- Ingredients list
- Add/remove from favorites
- Back navigation

**Data Display**:
- Nutrition grid layout
- Bullet-point ingredients
- Favorite toggle with animation

**Styling**:
- Detailed information cards
- Nutrition grid
- Heart icon for favorites

## Key Components

### Navigation Setup (App.js)
```javascript
Stack Navigator with screens:
- SignIn (initial)
- SignUp
- Home
- Favorites
- Recommendation
- Details
```

### Color Scheme
- **Primary**: Tomato Red (#FF6347)
- **Secondary**: Green (#4CAF50)
- **Background**: White (#FFFFFF)
- **Text Primary**: Dark Gray (#333333)
- **Text Secondary**: Medium Gray (#666666)
- **Cards**: Light Gray (#F9F9F9)

### Typography
- **Title**: 28px, Bold
- **Subtitle**: 18-20px
- **Body**: 16px
- **Small**: 12-14px

## File Structure

```
My-food/
├── App.js                      # Main entry, navigation setup
├── screens/
│   ├── SignInScreen.js        # Authentication
│   ├── SignUpScreen.js        # Registration
│   ├── HomeScreen.js          # Main hub + camera
│   ├── FavoritesScreen.js     # Favorites management
│   ├── RecommendationScreen.js # Suggestions
│   └── DetailsScreen.js       # Food details
├── assets/                     # Static assets
├── app.json                    # Expo config
├── package.json               # Dependencies
├── babel.config.js            # Babel config
├── README.md                  # Project overview
├── USAGE.md                   # User guide
├── CONTRIBUTING.md            # Developer guide
└── .env.example              # Environment template
```

## Dependencies

### Core
- expo: ~54.0.13
- react: ^19.2.0
- react-native: ^0.82.0

### Navigation
- @react-navigation/native: ^7.1.18
- @react-navigation/stack: ^7.4.10
- react-native-screens: ^4.17.0
- react-native-safe-area-context: ^5.6.1

### Features
- expo-camera: ^17.0.8
- expo-image-picker: ^17.0.8
- expo-status-bar: ^3.0.8

### Build
- babel-preset-expo: ^54.0.4

## Running the App

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Run on device/emulator**:
   - Scan QR code with Expo Go (mobile)
   - Press 'a' for Android emulator
   - Press 'i' for iOS simulator

## Future Enhancements

### Backend Integration
- User authentication API
- Food database
- User preferences storage
- Social features

### Additional Features
- Search functionality
- Filters and sorting
- User reviews
- Restaurant integration
- Recipe suggestions
- Meal planning
- Nutritional tracking
- Social sharing

### Technical Improvements
- Redux for state management
- TypeScript for type safety
- Unit and integration tests
- Performance optimization
- Offline support
- Push notifications

## Testing Checklist

- [ ] Sign up with valid data
- [ ] Sign in with credentials
- [ ] Take photo with camera
- [ ] View photo gallery
- [ ] Navigate to all screens
- [ ] Add/remove favorites
- [ ] View food details
- [ ] Check recommendations
- [ ] Test back navigation
- [ ] Verify permissions
- [ ] Test on iOS
- [ ] Test on Android

## Summary

My Food is a fully functional mobile app prototype that demonstrates:
✅ User authentication (Sign Up/Sign In)
✅ Camera integration for food photos
✅ Multiple screen navigation
✅ Favorites management
✅ Personalized recommendations
✅ Detailed food information
✅ Clean, consistent UI/UX
✅ Proper permission handling
✅ Scalable architecture

The app is ready for further development and backend integration.
