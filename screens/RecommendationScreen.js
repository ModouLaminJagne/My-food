import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function RecommendationScreen({ navigation }) {
  const recommendations = [
    {
      id: 1,
      name: 'Grilled Salmon',
      category: 'Seafood',
      rating: 4.7,
      reason: 'Based on your love for healthy options',
    },
    {
      id: 2,
      name: 'Chicken Tikka Masala',
      category: 'Indian',
      rating: 4.6,
      reason: 'Popular in your area',
    },
    {
      id: 3,
      name: 'Greek Salad',
      category: 'Mediterranean',
      rating: 4.5,
      reason: 'Perfect for lunch',
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      category: 'Dessert',
      rating: 4.9,
      reason: 'Highly rated dessert',
    },
    {
      id: 5,
      name: 'Ramen Bowl',
      category: 'Japanese',
      rating: 4.8,
      reason: 'Trending this week',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended for You</Text>
      <Text style={styles.subtitle}>Foods you might enjoy</Text>

      <ScrollView style={styles.list}>
        {recommendations.map((food) => (
          <TouchableOpacity
            key={food.id}
            style={styles.foodItem}
            onPress={() => navigation.navigate('Details', { food })}
          >
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodCategory}>{food.category}</Text>
              <Text style={styles.foodReason}>💡 {food.reason}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.foodRating}>⭐ {food.rating}</Text>
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  list: {
    flex: 1,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  foodCategory: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  foodReason: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 6,
    fontStyle: 'italic',
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  foodRating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  arrow: {
    fontSize: 20,
    color: '#999',
    marginTop: 5,
  },
  backButton: {
    backgroundColor: '#FF6347',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
