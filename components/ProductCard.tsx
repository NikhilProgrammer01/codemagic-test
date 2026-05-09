import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// Import the native version of Skeleton
import { Skeleton } from 'boneyard-js/native';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  category: string;
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
  description: string;
}

interface ProductCardProps {
  item: Product;
  isLoading: boolean;
}

export default function ProductCard({ item, isLoading }: ProductCardProps) {
  return (
    /* 
       The Skeleton component wraps the actual UI. 
       It will show bones when isLoading is true.
    */
    <Skeleton 
      name="product-card" 
      loading={isLoading} 
      animate={true}
      transition={300} // Smooth fade out when loaded
  /* Set the shimmering highlight color */
   dark={true}                // Forces dark mode regardless of system settings
  darkColor="#E5E7EB"        // Your custom dark bone color
  // stagger={true}
    >
      <View style={styles.card}>
        <Text style={styles.category}>{item.category}</Text>

        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.rating}>⭐ {item.rating} ({item.reviews} reviews)</Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
          </View>

          <Text style={[
            styles.stock,
            { color: item.stock === 'Out of Stock' ? 'red' : 'orange' }
          ]}>
            {item.stock}
          </Text>
        </View>
      </View>
    </Skeleton>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  category: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  price: {
    color: '#2e7d32',
    fontSize: 16,
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 14,
  },
  stock: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
