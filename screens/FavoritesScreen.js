import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Margherita Pizza', category: 'Italian', rating: 4.5 },
    { id: 2, name: 'Sushi Platter', category: 'Japanese', rating: 4.8 },
    { id: 5, name: 'Caesar Salad', category: 'American', rating: 4.4 },
  ]);

  const removeFavorite = (id) => {
    Alert.alert(
      'Remove Favorite',
      'Are you sure you want to remove this from favorites?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setFavorites(favorites.filter((item) => item.id !== id));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorite Foods</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No favorites yet!</Text>
          <Text style={styles.emptySubtext}>
            Start adding foods you love to your favorites
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.list}>
          {favorites.map((food) => (
            <View key={food.id} style={styles.foodItem}>
              <TouchableOpacity
                style={styles.foodInfo}
                onPress={() => navigation.navigate('Details', { food })}
              >
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodCategory}>{food.category}</Text>
                <Text style={styles.foodRating}>⭐ {food.rating}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFavorite(food.id)}
              >
                <Text style={styles.removeButtonText}>❌</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

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
    marginBottom: 20,
    color: '#333',
  },
  list: {
    flex: 1,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
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
  foodRating: {
    fontSize: 14,
    color: '#FF6347',
    marginTop: 4,
  },
  removeButton: {
    padding: 10,
  },
  removeButtonText: {
    fontSize: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
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
