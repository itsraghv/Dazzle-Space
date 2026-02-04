import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'core/theme/melos_theme.dart';
import 'features/auth/services/auth_service.dart';
import 'features/onboarding/onboarding_flow.dart';
import 'features/dashboard/main_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  const supabaseUrl = 'https://placeholder.supabase.co';
  const supabaseAnonKey = 'placeholder-anon-key';

  // Only initialize if keys are not placeholders to avoid crashes during development/testing
  if (supabaseUrl != 'https://placeholder.supabase.co') {
    await Supabase.initialize(
      url: supabaseUrl,
      anonKey: supabaseAnonKey,
    );
  } else {
    // For demo/prototype purposes, we don't crash but we also won't have real Supabase
    print('Supabase placeholders detected. Running in mock mode.');
  }

  runApp(
    const ProviderScope(
      child: MelosApp(),
    ),
  );
}

class MelosApp extends ConsumerWidget {
  const MelosApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userAsync = ref.watch(userProvider);

    return MaterialApp(
      title: 'Melos',
      theme: MelosTheme.lightTheme,
      debugShowCheckedModeBanner: false,
      home: userAsync.when(
        data: (user) => user == null
            ? OnboardingFlow(onComplete: () {})
            : const MainScreen(),
        loading: () => const Scaffold(body: Center(child: CircularProgressIndicator())),
        error: (err, stack) => Scaffold(body: Center(child: Text('Error: $err'))),
      ),
    );
  }
}
