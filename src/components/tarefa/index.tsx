import { useEffect, useState } from "react"

export function Tarefa() {
  const [isCompleted, setIsCompleted] = useState(false)

  function isCompletedTask() {
    setIsCompleted(true)
  }

  useEffect(() => {
    if(isCompleted) {
      alert('Parabéns!')
    }
  }, [isCompleted])
  return (
    <div>
      {!isCompleted ? (
        <h1 style={{ fontSize: '24px' }}>Clique no botão para concluir sua tarefa</h1>
      ) : (
        <h1 style={{ fontSize: '24px' }}>Tarefa concluída com sucesso!</h1>
      )}

      <button disabled={isCompleted} onClick={isCompletedTask}>Concluir tarefa</button>
    </div>
  )
}