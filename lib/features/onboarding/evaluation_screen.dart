import 'package:flutter/material.dart';
import '../../core/widgets/melos_button.dart';
import '../../core/widgets/melos_card.dart';
import '../../core/widgets/melos_gradient_background.dart';

class EvaluationScreen extends StatefulWidget {
  const EvaluationScreen({super.key, required this.onComplete});

  final VoidCallback onComplete;

  @override
  State<EvaluationScreen> createState() => _EvaluationScreenState();
}

class _EvaluationScreenState extends State<EvaluationScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  final List<Map<String, dynamic>> _questions = [
    {
      'question': 'How often do you feel an urge to engage in the habit?',
      'options': ['Rarely', 'Weekly', 'Daily', 'Multiple times a day'],
    },
    {
      'question': 'What is your main trigger?',
      'options': ['Stress', 'Boredom', 'Loneliness', 'Social Media'],
    },
    {
      'question': 'Have you tried quitting before?',
      'options': ['Never', 'Once', 'A few times', 'Many times'],
    },
    {
      'question': 'How committed are you to this journey?',
      'options': ['Curious', 'Somewhat', 'Committed', 'Whatever it takes'],
    },
  ];

  void _nextPage() {
    if (_currentPage < _questions.length - 1) {
      _pageController.nextPage(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      );
    } else {
      widget.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) {
    return MelosGradientBackground(
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Semantics(
                label: 'Evaluation progress',
                value: '${((_currentPage + 1) / _questions.length * 100).toInt()}%',
                child: LinearProgressIndicator(
                  value: (_currentPage + 1) / _questions.length,
                  backgroundColor: Colors.white.withOpacity(0.3),
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              const SizedBox(height: 40),
              Expanded(
                child: PageView.builder(
                  controller: _pageController,
                  physics: const NeverScrollableScrollPhysics(),
                  onPageChanged: (page) => setState(() => _currentPage = page),
                  itemCount: _questions.length,
                  itemBuilder: (context, index) {
                    final q = _questions[index];
                    return Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Question ${index + 1}',
                          style: Theme.of(context).textTheme.bodyMedium,
                        ),
                        const SizedBox(height: 8),
                        Text(
                          q['question'],
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const SizedBox(height: 32),
                        ...List.generate(
                          q['options'].length,
                          (i) => Padding(
                            padding: const EdgeInsets.only(bottom: 12),
                            child: InkWell(
                              onTap: _nextPage,
                              child: MelosCard(
                                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
                                child: Row(
                                  children: [
                                    Expanded(child: Text(q['options'][i])),
                                    const Icon(Icons.chevron_right_rounded, color: Colors.grey),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
