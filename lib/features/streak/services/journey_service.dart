import '../models/journey_stats.dart';

enum DayOutcome {
  cleanLowUrge,
  cleanHighUrge,
  urgeResisted,
  passiveRelapse,
  plannedRelapse,
  multipleRelapses
}

class JourneyService {
  double calculateLYEffect(DayOutcome outcome) {
    switch (outcome) {
      case DayOutcome.cleanLowUrge:
        return 1.2;
      case DayOutcome.cleanHighUrge:
        return 1.8;
      case DayOutcome.urgeResisted:
        return 2.2;
      case DayOutcome.passiveRelapse:
        return 0.3;
      case DayOutcome.plannedRelapse:
        return 0.0;
      case DayOutcome.multipleRelapses:
        return 0.05; // "Drift only"
    }
  }

  JourneyStats processDay(JourneyStats current, DayOutcome outcome) {
    final effect = calculateLYEffect(outcome);
    return current.copyWith(
      distanceLY: current.distanceLY + effect,
      days: current.days + 1,
      lastCheckIn: DateTime.now(),
    );
  }

  String getNextMilestone(double distance) {
    if (distance < 4.25) return "Proxima Centauri (4.25 LY)";
    if (distance < 6.00) return "Barnard's Star (6.00 LY)";
    if (distance < 8.58) return "Sirius (8.58 LY)";
    if (distance < 15.30) return "Gliese 876 (15.30 LY)";
    return "Further into the Void";
  }
}
