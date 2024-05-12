import { Curso } from "@/types/curso";
import getCursos from "@/utils/getCursos";
import Link from "next/link";

export default async function CursosPage() {
    const cursos: Curso[] = await getCursos();

    return (
        <main>
            <h1>Cursos</h1>
            <hr />
            <ul>
                {cursos.map((curso) => {
                    return (
                        <li key={curso.id}>
                            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}