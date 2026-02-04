import 'package:flutter/material.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_gradient_background.dart';

class PledgeScreen extends StatelessWidget {
  const PledgeScreen({super.key, required this.onPledge});

  final VoidCallback onPledge;

  @override
  Widget build(BuildContext context) {
    return MelosGradientBackground(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.favorite_rounded, size: 60, color: Colors.pinkAccent),
            const SizedBox(height: 24),
            Text(
              'Your Pledge',
              style: Theme.of(context).textTheme.displayLarge,
            ),
            const SizedBox(height: 16),
            const Text(
              '“I commit to my growth, recognizing that progress is measured in distance, not just time. I will be kind to myself on difficult days and celebrate every step forward.”',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 18,
                fontStyle: FontStyle.italic,
                height: 1.5,
              ),
            ),
            const Spacer(),
            MelosButton(
              text: 'I Pledge',
              onPressed: onPledge,
            ),
          ],
        ),
      ),
    );
  }
}
