import 'package:flutter/material.dart';

class MelosColors {
  static const Color peach = Color(0xFFFFE5D9);
  static const Color lavender = Color(0xFFE2D1F9);
  static const Color beige = Color(0xFFF7F1E3);
  static const Color softBlue = Color(0xFFD1E9F6);
  static const Color mint = Color(0xFFD4EDDA);

  static const Color background = Color(0xFFFBFBFB);
  static const Color surface = Colors.white;

  static const Color textPrimary = Color(0xFF2D3436);
  static const Color textSecondary = Color(0xFF636E72);

  static const LinearGradient primaryGradient = LinearGradient(
    colors: [peach, lavender],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient calmGradient = LinearGradient(
    colors: [softBlue, mint],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
}
