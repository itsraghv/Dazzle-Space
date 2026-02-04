import 'package:flutter/material.dart';

class RelapseHeatmap extends StatelessWidget {
  const RelapseHeatmap({super.key});

  @override
  Widget build(BuildContext context) {
    // Placeholder for a heatmap grid
    // 7 days x 4 time blocks (Morning, Afternoon, Evening, Night)
    final days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    final timeBlocks = ['M', 'A', 'E', 'N'];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Danger Zones', style: Theme.of(context).textTheme.titleLarge),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(24),
          ),
          child: Column(
            children: [
              Row(
                children: [
                  const SizedBox(width: 40),
                  ...days.map((d) => Expanded(child: Center(child: Text(d, style: const TextStyle(fontSize: 10))))),
                ],
              ),
              const SizedBox(height: 8),
              ...List.generate(timeBlocks.length, (rowIndex) {
                return Padding(
                  padding: const EdgeInsets.symmetric(vertical: 4),
                  child: Row(
                    children: [
                      SizedBox(width: 40, child: Text(timeBlocks[rowIndex], style: const TextStyle(fontSize: 10))),
                      ...List.generate(7, (colIndex) {
                        // Random intensity for demo
                        final intensity = (rowIndex + colIndex) % 4;
                        return Expanded(
                          child: Container(
                            height: 20,
                            margin: const EdgeInsets.symmetric(horizontal: 2),
                            decoration: BoxDecoration(
                              color: _getColorForIntensity(intensity),
                              borderRadius: BorderRadius.circular(4),
                            ),
                          ),
                        );
                      }),
                    ],
                  ),
                );
              }),
            ],
          ),
        ),
      ],
    );
  }

  Color _getColorForIntensity(int intensity) {
    switch (intensity) {
      case 0: return Colors.grey.withOpacity(0.1);
      case 1: return Colors.orange.withOpacity(0.3);
      case 2: return Colors.orange.withOpacity(0.6);
      case 3: return Colors.red.withOpacity(0.8);
      default: return Colors.grey.withOpacity(0.1);
    }
  }
}
