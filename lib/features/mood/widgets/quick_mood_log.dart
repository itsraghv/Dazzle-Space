import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/widgets/melos_card.dart';

class QuickMoodLog extends ConsumerWidget {
  const QuickMoodLog({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final moods = [
      (emoji: '😢', label: 'Sad'),
      (emoji: '😕', label: 'Meh'),
      (emoji: '😐', label: 'Neutral'),
      (emoji: '🙂', label: 'Good'),
      (emoji: '😊', label: 'Great'),
    ];

    return MelosCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'How are you feeling?',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: List.generate(
              moods.length,
              (index) => Tooltip(
                message: moods[index].label,
                child: Semantics(
                  label: moods[index].label,
                  button: true,
                  child: InkWell(
                    onTap: () {
                      // Log mood
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(content: Text('Mood ${moods[index].emoji} logged!')),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: Colors.grey.withOpacity(0.05),
                        shape: BoxShape.circle,
                      ),
                      child: Text(
                        moods[index].emoji,
                        style: const TextStyle(fontSize: 24),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
