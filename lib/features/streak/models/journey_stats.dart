class JourneyStats {
  final double distanceLY;
  final int days;
  final DateTime lastCheckIn;

  JourneyStats({
    required this.distanceLY,
    required this.days,
    required this.lastCheckIn,
  });

  factory JourneyStats.initial() {
    return JourneyStats(
      distanceLY: 0.0,
      days: 0,
      lastCheckIn: DateTime.now(),
    );
  }

  JourneyStats copyWith({
    double? distanceLY,
    int? days,
    DateTime? lastCheckIn,
  }) {
    return JourneyStats(
      distanceLY: distanceLY ?? this.distanceLY,
      days: days ?? this.days,
      lastCheckIn: lastCheckIn ?? this.lastCheckIn,
    );
  }
}
