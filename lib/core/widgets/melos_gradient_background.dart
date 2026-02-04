import 'package:flutter/material.dart';
import '../theme/melos_colors.dart';

class MelosGradientBackground extends StatelessWidget {
  final Widget child;
  final LinearGradient? gradient;

  const MelosGradientBackground({
    super.key,
    required this.child,
    this.gradient,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: gradient ?? LinearGradient(
          colors: [
            MelosColors.peach.withOpacity(0.3),
            MelosColors.lavender.withOpacity(0.3),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: child,
      ),
    );
  }
}
