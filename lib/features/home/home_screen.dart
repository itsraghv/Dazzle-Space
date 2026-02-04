import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../core/widgets/melos_card.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_gradient_background.dart';
import '../mood/widgets/quick_mood_log.dart';
import '../urge/widgets/urge_log_flow.dart';
import '../relapse/widgets/relapse_log_flow.dart';
import '../meditation/meditation_screen.dart';
import '../daily_checkin/daily_checkin_screen.dart';
import '../streak/services/journey_provider.dart';

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final journeyStats = ref.watch(journeyStatsProvider);
    final journeyNotifier = ref.read(journeyStatsProvider.notifier);
    final journeyService = ref.read(journeyServiceProvider);

    return MelosGradientBackground(
      child: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Hello, Voyager', style: Theme.of(context).textTheme.bodyMedium),
                      Text('Day ${journeyStats.days}', style: Theme.of(context).textTheme.titleLarge),
                    ],
                  ),
                  IconButton(
                    icon: const Icon(Icons.self_improvement_rounded),
                    tooltip: 'Meditation',
                    onPressed: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const MeditationScreen()),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 32),
              MelosCard(
                color: Colors.deepPurple.withOpacity(0.8),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Space Journey',
                      style: TextStyle(color: Colors.white70, fontSize: 14),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      journeyNotifier.journeyFeel,
                      style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 16),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Semantics(
                        label: 'Journey progress',
                        value: '${(journeyNotifier.progressToNextMilestone * 100).toInt()}%',
                        child: LinearProgressIndicator(
                          value: journeyNotifier.progressToNextMilestone,
                          backgroundColor: Colors.white24,
                          valueColor: const AlwaysStoppedAnimation<Color>(Colors.white),
                          minHeight: 8,
                        ),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Approaching: ${journeyService.getNextMilestone(journeyStats.distanceLY)}',
                      style: const TextStyle(color: Colors.white70, fontSize: 12),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              const QuickMoodLog(),
              const SizedBox(height: 24),
              MelosCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Daily Check-in', style: Theme.of(context).textTheme.titleLarge),
                    const SizedBox(height: 8),
                    const Text('Take a moment to reflect on your day.'),
                    const SizedBox(height: 16),
                    MelosButton(
                      text: 'Check-in Now',
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => const DailyCheckinScreen()),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              Row(
                children: [
                  Expanded(
                    child: MelosButton(
                      text: 'Log Urge',
                      onPressed: () => UrgeLogFlow.show(context),
                      isPrimary: false,
                    ),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: MelosButton(
                      text: 'I Relapsed',
                      onPressed: () => RelapseLogFlow.show(context),
                      isPrimary: false,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}
