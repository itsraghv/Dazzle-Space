class UrgeLog {
  final String id;
  final int intensity; // 1 to 10
  final String? trigger;
  final String? copingAction;
  final DateTime timestamp;
  final String? note;

  UrgeLog({
    required this.id,
    required this.intensity,
    this.trigger,
    this.copingAction,
    required this.timestamp,
    this.note,
  });
}
