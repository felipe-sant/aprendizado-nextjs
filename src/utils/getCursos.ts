import { Curso } from "@/types/curso";

export default async function getCursos() {
    const response = await fetch('https://api.origamid.online/cursos');
    const data = (await response.json());
    return data as Curso[];
}