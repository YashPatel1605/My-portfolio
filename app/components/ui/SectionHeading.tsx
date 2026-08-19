type SectionHeadingProps = {
  eyebrow?: string;
  tag?: string;
  title: string;
  copy?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, tag, title, copy, center = false }: SectionHeadingProps) {
  return (
    <div className={`section-head reveal ${center ? "center" : ""}`}>
      {tag ? <div className="section-tag">{tag}</div> : null}
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
