import 'package:flutter/material.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_card.dart';
import '../../core/widgets/melos_gradient_background.dart';

class EvaluationReportScreen extends StatelessWidget {
  const EvaluationReportScreen({super.key, required this.onStart});

  final VoidCallback onStart;

  @override
  Widget build(BuildContext context) {
    return MelosGradientBackground(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SafeArea(child: SizedBox(height: 20)),
            Text(
              'Your 90-Day Projection',
              style: Theme.of(context).textTheme.displayLarge?.copyWith(fontSize: 28),
            ),
            const SizedBox(height: 16),
            const MelosCard(
              child: Column(
                children: [
                  Text(
                    'Based on your profile, you could reach Barnard’s Star in 90 days with consistent effort.',
                    style: TextStyle(fontSize: 16, height: 1.4),
                  ),
                  SizedBox(height: 12),
                  LinearProgressIndicator(value: 0.1),
                ],
              ),
            ),
            const SizedBox(height: 24),
            Text(
              'Start with small steps.',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 8),
            const Text('Focus on resisting the first urge of the day.'),
            const Spacer(),
            MelosButton(
              text: 'Enter Space Journey',
              onPressed: onStart,
            ),
          ],
        ),
      ),
    );
  }
}
