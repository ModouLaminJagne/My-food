import 'package:flutter/material.dart';
import 'screens/signin_screen.dart';
import 'screens/signup_screen.dart';
import 'screens/home_screen.dart';
import 'screens/favorites_screen.dart';
import 'screens/recommendation_screen.dart';
import 'screens/details_screen.dart';

void main() {
  runApp(const MyFoodApp());
}

class MyFoodApp extends StatelessWidget {
  const MyFoodApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Food',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
        useMaterial3: true,
      ),
      initialRoute: '/signin',
      routes: {
        '/signin': (context) => const SignInScreen(),
        '/signup': (context) => const SignUpScreen(),
        '/home': (context) => const HomeScreen(),
        '/favorites': (context) => const FavoritesScreen(),
        '/recommendation': (context) => const RecommendationScreen(),
        '/details': (context) => const DetailsScreen(),
      },
    );
  }
}
