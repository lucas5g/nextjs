import { ReactNode } from "react";
import { Button } from "./Button";
import { Card } from "./Card";

interface Props {
  handleSubmit: Function
  children: ReactNode
}

export default function Form({ handleSubmit, children }: Props) {

  function handleCreate(data: any) {
    console.log('dados login', data)
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit(handleCreate)}
        className="w-full flex flex-col gap-5"
      >
        {children}
        <footer className="flex justify-end">
          <Button type="submit" value='Acessar' />
        </footer>
      </form>
    </Card>
  );
}