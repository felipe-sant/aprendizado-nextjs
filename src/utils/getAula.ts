import { Aula } from "@/types/aula"

export default async function getAula(curso: string, aula: string): Promise<Aula> {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
    const data = await response.json();
    return data as Aula;
}
