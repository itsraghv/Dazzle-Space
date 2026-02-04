import 'package:flutter/material.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_gradient_background.dart';

class DailyCheckinScreen extends StatefulWidget {
  const DailyCheckinScreen({super.key});

  @override
  State<DailyCheckinScreen> createState() => _DailyCheckinScreenState();
}

class _DailyCheckinScreenState extends State<DailyCheckinScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

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
                    icon: const Icon(Icons.close_rounded),
                    onPressed: () => Navigator.pop(context),
                  ),
                  const Text('Daily Check-in', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
            Expanded(
              child: PageView(
                controller: _pageController,
                physics: const NeverScrollableScrollPhysics(),
                onPageChanged: (page) => setState(() => _currentPage = page),
                children: [
                  _buildMoodStep(),
                  _buildUrgeStep(),
                  _buildReflectionStep(),
                  _buildSuccessStep(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMoodStep() {
    return _buildStepTemplate(
      title: 'How was your mood today?',
      child: Wrap(
        spacing: 16,
        runSpacing: 16,
        children: ['😢', '😕', '😐', '🙂', '😊'].map((e) => InkWell(
          onTap: () => _nextPage(),
          child: Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(20),
            ),
            child: Text(e, style: const TextStyle(fontSize: 32)),
          ),
        )).toList(),
      ),
    );
  }

  Widget _buildUrgeStep() {
    return _buildStepTemplate(
      title: 'Average urge level today?',
      child: Column(
        children: [
          Slider(value: 3, min: 1, max: 10, onChanged: (v){}),
          const SizedBox(height: 32),
          MelosButton(text: 'Next', onPressed: () => _nextPage()),
        ],
      ),
    );
  }

  Widget _buildReflectionStep() {
    return _buildStepTemplate(
      title: 'Any wins or challenges?',
      child: Column(
        children: [
          const TextField(
            maxLines: 5,
            decoration: InputDecoration(
              hintText: 'Today I felt...',
              border: OutlineInputBorder(borderRadius: BorderRadius.all(Radius.circular(16))),
            ),
          ),
          const SizedBox(height: 32),
          MelosButton(text: 'Complete Check-in', onPressed: () => _nextPage()),
        ],
      ),
    );
  }

  Widget _buildSuccessStep() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Icon(Icons.star_rounded, size: 80, color: Colors.amber),
        const SizedBox(height: 24),
        Text('Well Done!', style: Theme.of(context).textTheme.displayLarge),
        const SizedBox(height: 16),
        const Text('You completed your daily check-in.'),
        const SizedBox(height: 48),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 48),
          child: MelosButton(text: 'Back to Home', onPressed: () => Navigator.pop(context)),
        ),
      ],
    );
  }

  Widget _buildStepTemplate({required String title, required Widget child}) {
    return Padding(
      padding: const EdgeInsets.all(24.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 32),
          child,
        ],
      ),
    );
  }

  void _nextPage() {
    _pageController.nextPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
  }
}
