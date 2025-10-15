# Quick Start Guide - My Food App

Get up and running with My Food in 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- ✅ Node.js (v14 or higher) installed
- ✅ npm or yarn package manager
- ✅ A smartphone with Expo Go app OR an iOS/Android emulator

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/ModouLaminJagne/My-food.git
cd My-food
```

### 2. Install Dependencies
```bash
npm install
```
⏱️ *This will take about 1-2 minutes*

### 3. Start the Development Server
```bash
npm start
```
🎉 *A QR code will appear in your terminal*

### 4. Run on Your Device

#### Option A: Using Your Smartphone (Recommended)
1. Install **Expo Go** app from:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Open Expo Go app on your phone

3. Scan the QR code from your terminal:
   - **iOS**: Use the built-in camera app
   - **Android**: Use the Expo Go app's built-in scanner

4. Wait for the app to load (30-60 seconds first time)

#### Option B: Using an Emulator
- **Android**: Press `a` in the terminal
- **iOS**: Press `i` in the terminal (Mac only)

## First Time Setup

### 1. Sign Up
When the app opens, you'll see the Sign In screen:
1. Tap **"Don't have an account? Sign Up"**
2. (Optional) Add a profile photo by tapping the **+** icon
3. Fill in your details:
   - Name
   - Surname
   - Email
   - Password
   - Country
4. Tap **"Sign Up"**

### 2. Explore the App
After signing up, you'll be taken to the **Home** screen where you can:
- 📷 **Take food photos** using the camera button
- 🍕 **Browse popular foods**
- ❤️ **Go to Favorites** to manage liked foods
- 💡 **View Recommendations** for food suggestions
- 👉 **Tap any food** to see details

## Troubleshooting

### QR Code Not Scanning?
- Ensure your phone and computer are on the same WiFi network
- Try using tunnel mode: `npm start --tunnel`

### App Not Loading?
- Check that dependencies installed correctly: `npm install`
- Clear Expo cache: `npx expo start -c`
- Restart the development server

### Camera Not Working?
- Grant camera permissions when prompted
- Check device settings if permission was denied
- Restart the app after granting permissions

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

## Development Commands

```bash
# Start development server
npm start

# Start with cache cleared
npx expo start -c

# Run on Android emulator
npm run android

# Run on iOS simulator (Mac only)
npm run ios

# Run in web browser
npm run web
```

## Permissions Required

The app will request:
- 📷 **Camera access** - To take food photos
- 🖼️ **Photo library access** - To upload profile picture

Grant these permissions for full functionality.

## Quick Tips

### Taking Great Food Photos
1. Tap the **"📷 Take Food Photo"** button on Home screen
2. Grant camera permission if prompted
3. Position your food in good lighting
4. Tap to capture
5. Photos appear in the gallery on Home screen

### Managing Favorites
1. Tap any food to view details
2. Tap the **heart icon (🤍)** to add to favorites
3. Go to **Favorites** screen to manage them
4. Tap **❌** to remove a favorite

### Getting Recommendations
1. Navigate to **Recommendations** from Home
2. Browse personalized food suggestions
3. Tap any recommendation to see details
4. Each shows why it's recommended for you

## Next Steps

Now that you're set up:
1. ✅ Create your account
2. ✅ Take some food photos
3. ✅ Add favorites
4. ✅ Explore recommendations
5. ✅ Check out the detailed food information

## Need Help?

- 📖 Read the [User Guide](USAGE.md)
- 🔧 Check [Technical Documentation](TECHNICAL.md)
- 👥 See [Contributing Guidelines](CONTRIBUTING.md)
- 🐛 Report issues on GitHub

## What's Next?

The app is currently a prototype. Future versions will include:
- Backend integration for data persistence
- Social features to share with friends
- Recipe suggestions
- Restaurant recommendations
- Nutritional tracking

---

**Enjoy using My Food! 🍔🍕🍣**
