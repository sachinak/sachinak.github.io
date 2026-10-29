interface NumberedHeadingProps {
  number: string
  title: string
}

export default function NumberedHeading({ number, title }: NumberedHeadingProps) {
  return (
    <h2 className="numbered-heading" data-number={number}>
      {title}
    </h2>
  )
}
