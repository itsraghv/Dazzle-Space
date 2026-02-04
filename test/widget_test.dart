import 'package:flutter_test/flutter_test.dart';
import 'package:melos/main.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter/material.dart';
import 'package:melos/features/auth/services/auth_service.dart';

void main() {
  testWidgets('App starts and shows onboarding', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          // Override userProvider to immediately emit null
          userProvider.overrideWith((ref) => Stream.value(null)),
        ],
        child: const MelosApp(),
      ),
    );

    // Initial build
    await tester.pump();
    // Wait for stream value to be processed
    await tester.pump(const Duration(milliseconds: 100));

    // Now we should see the Onboarding Splash
    expect(find.text('Melos'), findsOneWidget);
    expect(find.text('Get Started'), findsOneWidget);
  });
}
