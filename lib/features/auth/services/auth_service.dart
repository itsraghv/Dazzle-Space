import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'dart:async';

class AuthService {
  final _mockUserStreamController = StreamController<User?>();
  User? _mockUser;

  bool get _isSupabaseInitialized {
    try {
      Supabase.instance.client;
      return true;
    } catch (_) {
      return false;
    }
  }

  SupabaseClient? get _client => _isSupabaseInitialized ? Supabase.instance.client : null;

  User? get currentUser => _isSupabaseInitialized ? _client?.auth.currentUser : _mockUser;

  Stream<User?> get userChanges {
    if (_isSupabaseInitialized) {
      return _client!.auth.onAuthStateChange.map((event) => event.session?.user);
    } else {
      return _mockUserStreamController.stream;
    }
  }

  Future<void> signInAnonymously() async {
    if (_isSupabaseInitialized) {
      await _client!.auth.signInAnonymously();
    } else {
      // Mock sign in
      _mockUser = User(
        id: 'mock-id',
        appMetadata: {},
        userMetadata: {},
        aud: '',
        createdAt: '',
      );
      _mockUserStreamController.add(_mockUser);
    }
  }

  Future<void> signOut() async {
    if (_isSupabaseInitialized) {
      await _client!.auth.signOut();
    } else {
      _mockUser = null;
      _mockUserStreamController.add(null);
    }
  }

  String generateAnonymousUsername() {
    final adverbs = ['Calm', 'Brave', 'Steady', 'Wise', 'Quiet', 'Mindful'];
    final nouns = ['Voyager', 'Seeker', 'Traveler', 'Pioneer', 'Star', 'Path'];
    final random = DateTime.now().millisecondsSinceEpoch;
    final adverb = adverbs[random % adverbs.length];
    final noun = nouns[(random ~/ adverbs.length) % nouns.length];
    return '$adverb$noun${random % 1000}';
  }
}

final authServiceProvider = Provider<AuthService>((ref) => AuthService());

final userProvider = StreamProvider<User?>((ref) {
  return ref.watch(authServiceProvider).userChanges;
});
