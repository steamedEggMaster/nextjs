import { url } from "@/app/(home)/page";

async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);
    const reponse = await fetch(`${url}/${id}`);
    return reponse.json();
}

export default async function MovieInfo(
    {id} : {id:string}) {
        const movie = await getMovie(id);
        return <h6>{JSON.stringify(movie)}</h6>
}