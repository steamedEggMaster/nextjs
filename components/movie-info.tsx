import styles from "../styles/movie-info.module.css"
import { url } from './../src/app/constants';

export async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);
    const reponse = await fetch(`${url}/${id}`);
    return reponse.json();
}

export default async function MovieInfo(
    {id} : {id:string}) {
        const movie = await getMovie(id);
        return (
            <div className={styles.container}>
                <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>
                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <h3> star!! {movie.vote_average.toFixed(1)}</h3>
                    <p>{movie.overview}</p>
                    <a href={movie.homepage}
                    target={"_blank"}>Homepage &rarr;</a>
                </div>
            </div>
        )
}