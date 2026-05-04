import 'package:flutter/material.dart';
import 'package:atlas_ui/atlas_tokens.dart';

enum AtlasButtonVariant { primary, secondary, danger }

class AtlasButton extends StatelessWidget {
  const AtlasButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.variant = AtlasButtonVariant.primary,
  });

  final String label;
  final VoidCallback onPressed;
  final AtlasButtonVariant variant;

  @override
  Widget build(BuildContext context) {
    return FilledButton(
      style: FilledButton.styleFrom(
        minimumSize: const Size.fromHeight(44),
        shape: RoundedRectangleBorder(borderRadius: AtlasTokens.controlRadius),
        backgroundColor: AtlasTokens.buttonColor(variant),
      ),
      onPressed: onPressed,
      child: Text(label),
    );
  }
}
