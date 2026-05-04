package com.atlas.ui.button

import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

enum class AtlasButtonVariant {
  Primary,
  Secondary,
  Danger
}

@Composable
fun AtlasButton(
  label: String,
  variant: AtlasButtonVariant = AtlasButtonVariant.Primary,
  onClick: () -> Unit,
) {
  Button(
    onClick = onClick,
    shape = AtlasButtonTokens.shape,
    colors = AtlasButtonTokens.colors(variant),
  ) {
    Text(label)
  }
}
