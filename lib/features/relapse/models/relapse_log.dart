enum RelapseType {
  impulse, // sudden, emotional
  planned, // mental negotiation
  passive  // scrolling -> trigger -> fall
}

class RelapseLog {
  final String id;
  final RelapseType type;
  final String? cause;
  final DateTime timestamp;
  final String? note;

  RelapseLog({
    required this.id,
    required this.type,
    this.cause,
    required this.timestamp,
    this.note,
  });
}
