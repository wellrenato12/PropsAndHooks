import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Tarefa } from "../../components/tarefa";

export function Home() {
  return (
    <>
      <h1 style={{ color: 'blue' }}>Home</h1>
      <Card titulo="ReactJS" content="Biblioteca JavaScript" />
      <Card titulo="Aula 05/08" content="Hooks e Props" />
      <Button />
      <Tarefa />
    </>
  )
}