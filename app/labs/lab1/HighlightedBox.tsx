import type { ReactNode } from "react";
function HighlightedBox({
  children,
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
}: {
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}
export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong> children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>
      {/* On your own: add a HighlightedBox around your goals list. */}
      <HighlightedBox backgroundColor="#dbeafe" borderColor="#2563eb">
        <h4>Sample nested tags</h4>
        <p>
          Use a <strong>strong</strong> word inside a paragraph.
        </p>
        <ol>
          <li>First step</li>
          <li>Second step</li>
        </ol>
      </HighlightedBox>
    </div>
  );
}
