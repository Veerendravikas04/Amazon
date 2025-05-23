import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:amazon/constants/utils.dart';

void httpErrorHandle({
  required http.Response response,
  required BuildContext context,
  required VoidCallback onSuccess,
}) {
  switch (response.statusCode) {
    case 200:
    case 201:
      onSuccess();
      break;
    case 400:
    case 500:
      String message = jsonDecode(response.body)['message'] ?? "Error occurred";
      print(message);
      showSnackBar(context, message, Colors.red);
      break;
    default:
      showSnackBar(context, "Something went wrong", Colors.red);
  }
}
