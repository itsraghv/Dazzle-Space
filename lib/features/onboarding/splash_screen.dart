import 'package:flutter/material.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_gradient_background.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key, required this.onGetStarted});

  final VoidCallback onGetStarted;

  @override
  Widget build(BuildContext context) {
    return MelosGradientBackground(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Spacer(),
            const Icon(Icons.auto_awesome_rounded, size: 80, color: Colors.deepPurpleAccent),
            const SizedBox(height: 24),
            Text(
              'Melos',
              style: Theme.of(context).textTheme.displayLarge,
            ),
            const SizedBox(height: 12),
            Text(
              'Beat compulsive habits with mindfulness.',
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const Spacer(),
            MelosButton(
              text: 'Get Started',
              onPressed: onGetStarted,
            ),
            const SizedBox(height: 16),
            TextButton(
              onPressed: () {}, // Sign In for existing users
              child: const Text('I already have an account'),
            ),
          ],
        ),
      ),
    );
  }
}
