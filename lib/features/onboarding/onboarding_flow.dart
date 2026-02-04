import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'splash_screen.dart';
import 'evaluation_screen.dart';
import 'pledge_screen.dart';
import 'evaluation_report_screen.dart';
import '../auth/services/auth_service.dart';

enum OnboardingStep { splash, evaluation, pledge, report }

final onboardingStepProvider = StateProvider<OnboardingStep>((ref) => OnboardingStep.splash);

class OnboardingFlow extends ConsumerWidget {
  const OnboardingFlow({super.key, required this.onComplete});

  final VoidCallback onComplete;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final step = ref.watch(onboardingStepProvider);

    switch (step) {
      case OnboardingStep.splash:
        return SplashScreen(
          onGetStarted: () => ref.read(onboardingStepProvider.notifier).state = OnboardingStep.evaluation,
        );
      case OnboardingStep.evaluation:
        return EvaluationScreen(
          onComplete: () => ref.read(onboardingStepProvider.notifier).state = OnboardingStep.pledge,
        );
      case OnboardingStep.pledge:
        return PledgeScreen(
          onPledge: () => ref.read(onboardingStepProvider.notifier).state = OnboardingStep.report,
        );
      case OnboardingStep.report:
        return EvaluationReportScreen(
          onStart: () async {
            // Sign in anonymously and complete onboarding
            await ref.read(authServiceProvider).signInAnonymously();
            onComplete();
          },
        );
      default:
        return const Scaffold(body: Center(child: Text('Unknown Step')));
    }
  }
}
