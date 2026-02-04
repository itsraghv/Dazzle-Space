import 'package:flutter/material.dart';
import '../../../core/widgets/melos_button.dart';
import '../../../core/widgets/melos_card.dart';

class UrgeLogFlow extends StatefulWidget {
  const UrgeLogFlow({super.key});

  static void show(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const UrgeLogFlow(),
    );
  }

  @override
  State<UrgeLogFlow> createState() => _UrgeLogFlowState();
}

class _UrgeLogFlowState extends State<UrgeLogFlow> {
  int _step = 1;
  int _intensity = 5;
  String? _selectedTrigger;

  final List<String> _triggers = ['Stress', 'Boredom', 'Anxiety', 'Social Media', 'Tiredness'];

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(32)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (_step == 1) ...[
            Text('How strong is the urge?', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 24),
            Slider(
              value: _intensity.toDouble(),
              min: 1,
              max: 10,
              divisions: 9,
              label: _intensity.toString(),
              onChanged: (val) => setState(() => _intensity = val.toInt()),
            ),
            const SizedBox(height: 32),
            MelosButton(text: 'Next', onPressed: () => setState(() => _step = 2)),
          ] else if (_step == 2) ...[
            Text('What triggered it?', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: _triggers.map((t) => ChoiceChip(
                label: Text(t),
                selected: _selectedTrigger == t,
                onSelected: (selected) => setState(() => _selectedTrigger = selected ? t : null),
              )).toList(),
            ),
            const SizedBox(height: 32),
            MelosButton(text: 'Log Urge', onPressed: () => setState(() => _step = 3)),
          ] else ...[
            const Icon(Icons.check_circle_outline_rounded, size: 64, color: Colors.green),
            const SizedBox(height: 16),
            Text('Urge Logged', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 8),
            const Text('You are doing great. Keep going!'),
            const SizedBox(height: 32),
            MelosButton(text: 'Close', onPressed: () => Navigator.pop(context)),
          ],
          const SizedBox(height: 16),
        ],
      ),
    );
  }
}
