import 'package:flutter_test/flutter_test.dart';
import 'package:melos/features/streak/models/journey_stats.dart';
import 'package:melos/features/streak/services/journey_service.dart';

void main() {
  group('JourneyService Tests', () {
    final service = JourneyService();

    test('LY Effect Calculation', () {
      expect(service.calculateLYEffect(DayOutcome.cleanLowUrge), 1.2);
      expect(service.calculateLYEffect(DayOutcome.urgeResisted), 2.2);
      expect(service.calculateLYEffect(DayOutcome.plannedRelapse), 0.0);
    });

    test('Process Day updates stats', () {
      final initial = JourneyStats.initial();
      final updated = service.processDay(initial, DayOutcome.urgeResisted);

      expect(updated.distanceLY, 2.2);
      expect(updated.days, 1);
    });

    test('Multiple days progression', () {
      var stats = JourneyStats.initial();
      stats = service.processDay(stats, DayOutcome.cleanLowUrge); // +1.2
      stats = service.processDay(stats, DayOutcome.urgeResisted); // +2.2

      expect(stats.distanceLY, closeTo(3.4, 0.001));
      expect(stats.days, 2);
    });
  });
}
