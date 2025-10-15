import 'package:flutter/material.dart';

class RecommendationScreen extends StatelessWidget {
  const RecommendationScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final List<Map<String, dynamic>> recommendedFoods = [
      {
        'id': 1,
        'name': 'Chicken Tikka Masala',
        'category': 'Indian',
        'rating': 4.7,
        'reason': 'Based on your love for spicy foods'
      },
      {
        'id': 2,
        'name': 'Ramen Bowl',
        'category': 'Japanese',
        'rating': 4.6,
        'reason': 'You enjoyed similar noodle dishes'
      },
      {
        'id': 3,
        'name': 'Greek Salad',
        'category': 'Mediterranean',
        'rating': 4.4,
        'reason': 'Healthy option you might like'
      },
      {
        'id': 4,
        'name': 'Fish and Chips',
        'category': 'British',
        'rating': 4.3,
        'reason': 'Popular choice among food lovers'
      },
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Recommendations'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(20),
        itemCount: recommendedFoods.length,
        itemBuilder: (context, index) {
          final food = recommendedFoods[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 15),
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          food['name'],
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      Row(
                        children: [
                          const Icon(Icons.star, color: Colors.amber, size: 20),
                          Text(
                            ' ${food['rating']}',
                            style: const TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 5),
                  Text(
                    food['category'],
                    style: const TextStyle(
                      fontSize: 14,
                      color: Colors.grey,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    children: [
                      const Icon(
                        Icons.lightbulb_outline,
                        size: 16,
                        color: Colors.orange,
                      ),
                      const SizedBox(width: 5),
                      Expanded(
                        child: Text(
                          food['reason'],
                          style: const TextStyle(
                            fontSize: 14,
                            fontStyle: FontStyle.italic,
                            color: Colors.orange,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(
                        context,
                        '/details',
                        arguments: food,
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.deepOrange,
                      foregroundColor: Colors.white,
                    ),
                    child: const Text('View Details'),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
