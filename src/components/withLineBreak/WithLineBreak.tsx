export default function WithLineBreak(content: string | undefined) {
  return content?.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
}
