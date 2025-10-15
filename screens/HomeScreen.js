import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'You need to grant camera permissions to take photos.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCapturedImages([...capturedImages, result.assets[0].uri]);
      Alert.alert('Success', 'Photo captured successfully!');
    }
  };

  const sampleFoods = [
    { id: 1, name: 'Margherita Pizza', category: 'Italian', rating: 4.5 },
    { id: 2, name: 'Sushi Platter', category: 'Japanese', rating: 4.8 },
    { id: 3, name: 'Beef Burger', category: 'American', rating: 4.3 },
    { id: 4, name: 'Pad Thai', category: 'Thai', rating: 4.6 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to My Food!</Text>

        <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
          <Text style={styles.cameraButtonText}>📷 Take Food Photo</Text>
        </TouchableOpacity>

        {capturedImages.length > 0 && (
          <View style={styles.capturedSection}>
            <Text style={styles.sectionTitle}>Your Food Photos</Text>
            <ScrollView horizontal style={styles.imageList}>
              {capturedImages.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.capturedImage} />
              ))}
            </ScrollView>
          </View>
        )}

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Popular Foods</Text>
          {sampleFoods.map((food) => (
            <TouchableOpacity
              key={food.id}
              style={styles.foodItem}
              onPress={() => navigation.navigate('Details', { food })}
            >
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodCategory}>{food.category}</Text>
              </View>
              <Text style={styles.foodRating}>⭐ {food.rating}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Favorites')}
          >
            <Text style={styles.navButtonText}>❤️ Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Recommendation')}
          >
            <Text style={styles.navButtonText}>💡 Recommendations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  cameraButton: {
    backgroundColor: '#FF6347',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  capturedSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  imageList: {
    marginBottom: 10,
  },
  capturedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  menuSection: {
    marginBottom: 20,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
