import { Aula } from "@/types/aula";
import { Curso } from "@/types/curso";

export default async function getCurso(curso: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
    const data = await response.json();
    return data as Curso & { aulas: Aula[] };
}