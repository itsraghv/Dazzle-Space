import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/journey_stats.dart';
import '../services/journey_service.dart';

class JourneyNotifier extends StateNotifier<JourneyStats> {
  final JourneyService _service;

  JourneyNotifier(this._service) : super(JourneyStats.initial());

  void logDay(DayOutcome outcome) {
    state = _service.processDay(state, outcome);
  }

  String get journeyFeel {
    final distance = state.distanceLY;
    if (distance < 1) return "Course stabilizing...";
    if (distance < 4.25) return "Steady momentum";
    if (distance < 10) return "Accelerating through the void";
    return "Warp speed engaged";
  }

  double get progressToNextMilestone {
    final distance = state.distanceLY;
    if (distance < 4.25) return distance / 4.25;
    if (distance < 6.00) return (distance - 4.25) / (6.00 - 4.25);
    if (distance < 8.58) return (distance - 6.00) / (8.58 - 6.00);
    return 1.0;
  }
}

final journeyServiceProvider = Provider((ref) => JourneyService());

final journeyStatsProvider = StateNotifierProvider<JourneyNotifier, JourneyStats>((ref) {
  final service = ref.watch(journeyServiceProvider);
  return JourneyNotifier(service);
});
