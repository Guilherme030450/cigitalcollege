import { Button } from "@/components/button";
import { SubTitle } from "@/components/subtitle";
import { Title } from "@/components/title";

export default function Home() {
  const name = 'Guilherme Jansen'

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <Title content={name} />
      <SubTitle content="Full Stack Developer" />
      <div className="flex flex-col mt-6 gap-6">
        <Button title="Adicionar" variant="" />
        <Button title="Sair" variant="danger" />
        <Button title="Entrar" variant="success" />
      </div>
    </div>
  );
}
