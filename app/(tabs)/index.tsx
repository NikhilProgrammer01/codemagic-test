import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard, { Product } from '../../components/ProductCard';
const products:Product[] = [
  {
    "id": "1",
    "name": "Wireless Headphones",
    "price": 99.99,
    "oldPrice": 129.99,
    "rating": 4.5,
    "reviews": 128,
    "category": "Electronics",
    "stock": "In Stock",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop",
    "description": "Noise-cancelling over-ear headphones."
  },
  {
    "id": "2",
    "name": "Smart Watch",
    "price": 149.50,
    "oldPrice": 199.00,
    "rating": 4.2,
    "reviews": 85,
    "category": "Wearables",
    "stock": "Low Stock",
    "image": "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=878&auto=format&fit=crop",
    "description": "Fitness tracking and notifications."
  },
  {
    "id": "3",
    "name": "Leather Wallet",
    "price": 45.00,
    "oldPrice": 60.00,
    "rating": 4.8,
    "reviews": 210,
    "category": "Accessories",
    "stock": "In Stock",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
    "description": "Genuine brown leather bi-fold."
  },
  {
    "id": "4",
    "name": "Mechanical Keyboard",
    "price": 120.00,
    "oldPrice": 150.00,
    "rating": 4.7,
    "reviews": 45,
    "category": "Electronics",
    "stock": "In Stock",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop",
    "description": "RGB backlit with tactile switches."
  },
  {
    "id": "5",
    "name": "Coffee Tumbler",
    "price": 25.99,
    "oldPrice": 35.00,
    "rating": 4.0,
    "reviews": 320,
    "category": "Kitchen",
    "stock": "Out of Stock",
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop",
    "description": "Insulated stainless steel mug."
  }
];



export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
    // Simple mock to toggle loading state for testing
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} isLoading={isLoading} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
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
  infoContainer: {
    alignItems: 'center',
    width: '100%',
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

  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3, // Shadow for Android
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  }
});
