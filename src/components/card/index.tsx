interface CardProps {
  titulo: string;
  content: string;
}

export function Card({ content, titulo }: CardProps) {
  return (
    <div>
      <h1 style={{ fontSize: '32px' }}>{titulo}</h1>
      <p>{content}</p>
    </div>
  )
}