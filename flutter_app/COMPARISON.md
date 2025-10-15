# React Native vs Flutter: Code Comparison

This document shows how the same features are implemented in both React Native and Flutter versions of My Food.

## 1. Sign In Screen

### React Native (SignInScreen.js)
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.replace('Home');
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### Flutter (signin_screen.dart)
```dart
import 'package:flutter/material.dart';

class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  void _handleSignIn() {
    Navigator.pushReplacementNamed(context, '/home');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
          ),
          TextFormField(
            controller: _passwordController,
            decoration: const InputDecoration(labelText: 'Password'),
            obscureText: true,
          ),
          ElevatedButton(
            onPressed: _handleSignIn,
            child: const Text('Sign In'),
          ),
        ],
      ),
    );
  }
}
```

## 2. Navigation

### React Native (App.js)
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Flutter (main.dart)
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyFoodApp());
}

class MyFoodApp extends StatelessWidget {
  const MyFoodApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/signin',
      routes: {
        '/signin': (context) => const SignInScreen(),
        '/home': (context) => const HomeScreen(),
      },
    );
  }
}
```

## 3. Camera Functionality

### React Native (HomeScreen.js)
```javascript
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const takePhoto = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();
  
  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setCapturedImages([...capturedImages, result.assets[0].uri]);
  }
};
```

### Flutter (home_screen.dart)
```dart
import 'package:image_picker/image_picker.dart';

final ImagePicker _picker = ImagePicker();

Future<void> _takePhoto() async {
  final XFile? photo = await _picker.pickImage(
    source: ImageSource.camera,
    preferredCameraDevice: CameraDevice.rear,
  );
  
  if (photo != null) {
    setState(() {
      _capturedImages.add(File(photo.path));
    });
  }
}
```

## 4. Image Upload

### React Native (SignUpScreen.js)
```javascript
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    setProfileImage(result.assets[0].uri);
  }
};

<TouchableOpacity onPress={pickImage}>
  {profileImage ? (
    <Image source={{ uri: profileImage }} style={styles.profileImage} />
  ) : (
    <Text>Upload Photo</Text>
  )}
</TouchableOpacity>
```

### Flutter (signup_screen.dart)
```dart
import 'package:image_picker/image_picker.dart';
import 'dart:io';

File? _profileImage;
final ImagePicker _picker = ImagePicker();

Future<void> _pickImage() async {
  final XFile? image = await _picker.pickImage(
    source: ImageSource.gallery
  );
  
  if (image != null) {
    setState(() {
      _profileImage = File(image.path);
    });
  }
}

GestureDetector(
  onTap: _pickImage,
  child: CircleAvatar(
    backgroundImage: _profileImage != null
        ? FileImage(_profileImage!)
        : null,
    child: _profileImage == null
        ? const Icon(Icons.add_a_photo)
        : null,
  ),
)
```

## 5. List Rendering

### React Native
```javascript
const foods = [
  { id: 1, name: 'Pizza', category: 'Italian', rating: 4.5 },
  { id: 2, name: 'Sushi', category: 'Japanese', rating: 4.8 },
];

{foods.map((food) => (
  <TouchableOpacity
    key={food.id}
    onPress={() => navigation.navigate('Details', { food })}
  >
    <Text>{food.name}</Text>
    <Text>{food.category}</Text>
    <Text>⭐ {food.rating}</Text>
  </TouchableOpacity>
))}
```

### Flutter
```dart
final foods = [
  {'id': 1, 'name': 'Pizza', 'category': 'Italian', 'rating': 4.5},
  {'id': 2, 'name': 'Sushi', 'category': 'Japanese', 'rating': 4.8},
];

...foods.map((food) => Card(
  child: ListTile(
    title: Text(food['name']),
    subtitle: Text(food['category']),
    trailing: Text('⭐ ${food['rating']}'),
    onTap: () {
      Navigator.pushNamed(
        context,
        '/details',
        arguments: food,
      );
    },
  ),
))
```

## 6. State Management

### React Native (using hooks)
```javascript
import React, { useState } from 'react';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Sushi' },
  ]);

  const removeFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };

  return (
    <View>
      {favorites.map((food, index) => (
        <TouchableOpacity 
          key={food.id} 
          onPress={() => removeFavorite(index)}
        >
          <Text>{food.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
```

### Flutter (StatefulWidget)
```dart
class FavoritesScreen extends StatefulWidget {
  const FavoritesScreen({super.key});

  @override
  State<FavoritesScreen> createState() => _FavoritesScreenState();
}

class _FavoritesScreenState extends State<FavoritesScreen> {
  final List<Map<String, dynamic>> _favorites = [
    {'id': 1, 'name': 'Pizza'},
    {'id': 2, 'name': 'Sushi'},
  ];

  void _removeFavorite(int index) {
    setState(() {
      _favorites.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: _favorites.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(_favorites[index]['name']),
          onTap: () => _removeFavorite(index),
        );
      },
    );
  }
}
```

## 7. Styling

### React Native
```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6347',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

<View style={styles.container}>
  <Text style={styles.title}>Welcome</Text>
  <TouchableOpacity style={styles.button}>
    <Text>Click Me</Text>
  </TouchableOpacity>
</View>
```

### Flutter
```dart
Container(
  padding: const EdgeInsets.all(20),
  child: Column(
    children: [
      Text(
        'Welcome',
        style: const TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          color: Color(0xFF333333),
        ),
      ),
      ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.all(16),
          backgroundColor: const Color(0xFFFF6347),
        ),
        child: const Text('Click Me'),
      ),
    ],
  ),
)
```

## Key Differences Summary

| Aspect | React Native | Flutter |
|--------|--------------|---------|
| **Language** | JavaScript/TypeScript | Dart |
| **UI Paradigm** | JSX components | Widget tree |
| **State** | Hooks (useState, useEffect) | StatefulWidget + setState |
| **Styling** | StyleSheet object | Inline widget properties |
| **Navigation** | React Navigation library | Navigator built-in |
| **Lists** | map() or FlatList | map() or ListView.builder |
| **Images** | Image component | Image.file() / Image.network() |
| **Gestures** | TouchableOpacity | GestureDetector / InkWell |
| **Layout** | View, Flexbox | Container, Column, Row |
| **Hot Reload** | Fast Refresh | Hot Reload |

## Common Patterns

### 1. Conditional Rendering

**React Native:**
```javascript
{isLoading ? <ActivityIndicator /> : <Content />}
{items.length > 0 && <ItemList items={items} />}
```

**Flutter:**
```dart
isLoading ? CircularProgressIndicator() : Content()
if (items.isNotEmpty) ItemList(items: items)
```

### 2. Event Handling

**React Native:**
```javascript
<TouchableOpacity onPress={handlePress}>
  <Text>Click Me</Text>
</TouchableOpacity>
```

**Flutter:**
```dart
ElevatedButton(
  onPressed: handlePress,
  child: Text('Click Me'),
)
```

### 3. Form Validation

**React Native:**
```javascript
const validateEmail = (email) => {
  return email.includes('@');
};
```

**Flutter:**
```dart
validator: (value) {
  if (value == null || !value.contains('@')) {
    return 'Invalid email';
  }
  return null;
}
```

## Performance Considerations

1. **React Native**: Uses JavaScript bridge, may have slight overhead
2. **Flutter**: Compiles to native ARM code, generally faster

## Development Experience

1. **React Native**: Familiar to web developers, vast npm ecosystem
2. **Flutter**: Purpose-built for mobile, comprehensive widget library

## Choose Flutter When:
- You want native performance out of the box
- You prefer strongly-typed language (Dart)
- You need pixel-perfect UI across platforms
- You're building from scratch

## Choose React Native When:
- Your team knows JavaScript/React
- You want to share code with web apps
- You need access to specific npm packages
- You have existing React codebase
