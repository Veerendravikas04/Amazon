import "package:amazon/common/widgets/bottom_bar.dart";
import "package:amazon/features/auth/screens/auth_screen.dart";
import "package:amazon/features/home/screens/home_screen.dart";
import "package:flutter/material.dart";

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (context) => const AuthScreen(),
      );
    case HomeScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
       
         builder: (context) => const HomeScreen(),
      );
       case BottomBar.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
       
         builder: (context) => const BottomBar(),
      );
    default:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (context) => const Scaffold(
          body: Center(
            child: Text("Page not found"),
          ),
        ),
      );
  }
}
