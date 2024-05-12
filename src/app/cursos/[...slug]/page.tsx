type PageParams = {
    params: {
        slug: string[];
    }
}

export default async function CursosPage({ params }: PageParams) {
    return (
        <main>
            <h1>Cursos</h1>
            {params.slug.join("/")}
        </main>
    )
}