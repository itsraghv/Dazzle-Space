import 'package:flutter/material.dart';
import '../../core/widgets/melos_card.dart';
import '../../core/widgets/melos_gradient_background.dart';

class CommunityScreen extends StatelessWidget {
  const CommunityScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final mockPosts = [
      {'user': 'BraveStar42', 'text': 'Day 30! Feeling amazing and clear-headed.', 'tag': 'Milestone'},
      {'user': 'SteadyVoyager9', 'text': 'Found a new trigger today, but handled it with meditation.', 'tag': 'Insight'},
      {'user': 'CalmTraveler123', 'text': 'Anyone else find evenings difficult? Looking for tips.', 'tag': 'Support'},
    ];

    return MelosGradientBackground(
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: Text('Community', style: Theme.of(context).textTheme.displayLarge?.copyWith(fontSize: 28)),
            ),
            Expanded(
              child: ListView.builder(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                itemCount: mockPosts.length,
                itemBuilder: (context, index) {
                  final post = mockPosts[index];
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 16),
                    child: MelosCard(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(post['user']!, style: const TextStyle(fontWeight: FontWeight.bold)),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                decoration: BoxDecoration(
                                  color: Colors.blue.withOpacity(0.1),
                                  borderRadius: BorderRadius.circular(8),
                                ),
                                child: Text(post['tag']!, style: const TextStyle(fontSize: 10, color: Colors.blue)),
                              ),
                            ],
                          ),
                          const SizedBox(height: 12),
                          Text(post['text']!),
                          const SizedBox(height: 16),
                          Row(
                            children: [
                              const Icon(Icons.favorite_border_rounded, size: 18, color: Colors.grey),
                              const SizedBox(width: 4),
                              const Text('12', style: TextStyle(fontSize: 12, color: Colors.grey)),
                              const SizedBox(width: 16),
                              const Icon(Icons.chat_bubble_outline_rounded, size: 18, color: Colors.grey),
                              const SizedBox(width: 4),
                              const Text('3', style: TextStyle(fontSize: 12, color: Colors.grey)),
                            ],
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
