import SwiftUI
import AtlasUI

public struct AtlasButton: View {
  public enum Variant {
    case primary
    case secondary
    case danger
  }

  public let title: String
  public let variant: Variant
  public let action: () -> Void

  public init(_ title: String, variant: Variant = .primary, action: @escaping () -> Void) {
    self.title = title
    self.variant = variant
    self.action = action
  }

  public var body: some View {
    Button(action: action) {
      Text(title)
        .font(.headline)
        .frame(minHeight: 44)
        .padding(.horizontal, 16)
    }
    .buttonStyle(AtlasButtonStyle(variant: variant))
  }
}
