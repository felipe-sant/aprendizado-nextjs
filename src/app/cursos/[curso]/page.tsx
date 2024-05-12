import getCurso from "@/utils/getCurso";
import Link from "next/link";

type PageParams = {
    params: {
        curso: string;
    }
}

export default async function CursoPage({ params }: PageParams) {
    const curso = await getCurso(params.curso);

    return (
        <main>
            <h1>{curso.nome} - <span style={{ color: "#ddd" }}>{curso.total_horas} horas</span></h1>
            <hr />
            <p>{curso.descricao}</p>
            <h2>Aulas: </h2>
            <ul>
                {curso.aulas.map((aula) => {
                    return (
                        <li key={aula.id}>
                            <Link href={`/cursos/${curso.slug}/${aula.slug}`}>{aula.nome}</Link>
                        </li>
                    );
                })}
            </ul>
            <Link href="/cursos">voltar</Link>
        </main>
    );
}