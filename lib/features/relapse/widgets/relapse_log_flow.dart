import 'package:flutter/material.dart';
import '../../../core/widgets/melos_button.dart';
import '../../../core/widgets/melos_card.dart';
import '../models/relapse_log.dart';

class RelapseLogFlow extends StatefulWidget {
  const RelapseLogFlow({super.key});

  static void show(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const RelapseLogFlow(),
    );
  }

  @override
  State<RelapseLogFlow> createState() => _RelapseLogFlowState();
}

class _RelapseLogFlowState extends State<RelapseLogFlow> {
  int _step = 1;
  RelapseType? _selectedType;

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
            Text('What happened?', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 24),
            _buildTypeOption(
              context,
              RelapseType.impulse,
              'Impulse',
              'Sudden, emotional reaction',
              Icons.flash_on_rounded,
            ),
            const SizedBox(height: 12),
            _buildTypeOption(
              context,
              RelapseType.planned,
              'Planned',
              'Mental negotiation happened',
              Icons.event_note_rounded,
            ),
            const SizedBox(height: 12),
            _buildTypeOption(
              context,
              RelapseType.passive,
              'Passive',
              'Scrolling led to trigger',
              Icons.phonelink_setup_rounded,
            ),
          ] else ...[
            const Icon(Icons.info_outline_rounded, size: 64, color: Colors.orange),
            const SizedBox(height: 16),
            Text('Relapse Logged', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 8),
            const Text('A relapse is a lesson, not a failure. Let’s learn from this.'),
            const SizedBox(height: 32),
            MelosButton(text: 'Continue', onPressed: () => Navigator.pop(context)),
          ],
          const SizedBox(height: 16),
        ],
      ),
    );
  }

  Widget _buildTypeOption(BuildContext context, RelapseType type, String title, String subtitle, IconData icon) {
    return InkWell(
      onTap: () => setState(() {
        _selectedType = type;
        _step = 2;
      }),
      child: MelosCard(
        padding: const EdgeInsets.all(16),
        color: _selectedType == type ? Colors.blue.withOpacity(0.1) : null,
        child: Row(
          children: [
            Icon(icon, color: Colors.blueAccent),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
                  Text(subtitle, style: Theme.of(context).textTheme.bodySmall),
                ],
              ),
            ),
            const Icon(Icons.chevron_right_rounded, color: Colors.grey),
          ],
        ),
      ),
    );
  }
}
