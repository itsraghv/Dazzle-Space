class MoodLog {
  final String id;
  final int moodLevel; // 1 to 5
  final DateTime timestamp;

  MoodLog({
    required this.id,
    required this.moodLevel,
    required this.timestamp,
  });
}
