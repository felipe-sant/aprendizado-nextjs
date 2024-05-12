import { Aula } from "@/types/aula";
import getAula from "@/utils/getAula";
import Link from "next/link";

type PageParams = {
    params: {
        curso: string;
        aula: string;
    }
}

export default async function AulaPage({ params }: PageParams) {
    const aula: Aula = await getAula(params.curso, params.aula);

    return (
        <main>
            <h1>{aula.nome}</h1>
            <hr />
            <p>{aula.descricao}</p>
            <p>Tempo: {aula.tempo} minutos</p>
            <Link href={"/cursos/" + params.curso}>voltar</Link>
        </main>
    )
}