export default function WithLineBreak(content: string) {
  return content.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
}
