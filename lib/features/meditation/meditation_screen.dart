import 'package:flutter/material.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_gradient_background.dart';

class MeditationScreen extends StatefulWidget {
  const MeditationScreen({super.key});

  @override
  State<MeditationScreen> createState() => _MeditationScreenState();
}

class _MeditationScreenState extends State<MeditationScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  int _selectedMinutes = 5;
  bool _isPlaying = false;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(minutes: _selectedMinutes),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _togglePlay() {
    setState(() {
      _isPlaying = !_isPlaying;
      if (_isPlaying) {
        _controller.forward();
      } else {
        _controller.stop();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return MelosGradientBackground(
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back_rounded),
                    onPressed: () => Navigator.pop(context),
                  ),
                  const Text('Meditation', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
            const Spacer(),
            AnimatedBuilder(
              animation: _controller,
              builder: (context, child) {
                return Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      width: 250,
                      height: 250,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: RadialGradient(
                          colors: [
                            Colors.blue.withOpacity(0.3 + (0.4 * _controller.value)),
                            Colors.purple.withOpacity(0.1 + (0.2 * _controller.value)),
                          ],
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 280,
                      height: 280,
                      child: CircularProgressIndicator(
                        value: _controller.value,
                        strokeWidth: 4,
                        color: Colors.deepPurpleAccent,
                      ),
                    ),
                    Text(
                      _formatDuration(_controller.duration! * (1 - _controller.value)),
                      style: const TextStyle(fontSize: 48, fontWeight: FontWeight.w300),
                    ),
                  ],
                );
              },
            ),
            const Spacer(),
            if (!_isPlaying)
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [5, 10, 20].map((m) => Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 8),
                  child: ChoiceChip(
                    label: Text('$m min'),
                    selected: _selectedMinutes == m,
                    onSelected: (selected) {
                      if (selected) {
                        setState(() {
                          _selectedMinutes = m;
                          _controller.duration = Duration(minutes: m);
                          _controller.reset();
                        });
                      }
                    },
                  ),
                )).toList(),
              ),
            const SizedBox(height: 32),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 48),
              child: MelosButton(
                text: _isPlaying ? 'Pause' : 'Start Session',
                onPressed: _togglePlay,
              ),
            ),
            const SizedBox(height: 48),
          ],
        ),
      ),
    );
  }

  String _formatDuration(Duration duration) {
    String minutes = duration.inMinutes.remainder(60).toString().padLeft(2, '0');
    String seconds = duration.inSeconds.remainder(60).toString().padLeft(2, '0');
    return '$minutes:$seconds';
  }
}
