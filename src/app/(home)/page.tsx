// "use client"

// import { useEffect, useState } from "react"
import { Metadata } from 'next';
import Link from 'next/link';
import { resolve } from 'path';

// export default function Page(){

//     const [isLoading, setIsLoading] = useState(true);

//     const [movies, setMovies] = useState([]);
//     const getMovies = async() => {
//         const response = fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//         const json = await (await response).json();
//         setMovies(json);
//         setIsLoading(false)
//     }
//     useEffect(() => {
//         getMovies();
//     }, [])
//     return (
//         <div>
//             {isLoading ? "Loading..." : JSON.stringify(movies)}
//         </div>
//     )
// }
// client side !!

export const metadata: Metadata = {
    title: "Home",
};

export const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    const json = await response.json();
    return json;
    
}

export default async function HomePage(){
    const movies = await getMovies();
    return (<div>{movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</div>);
} // server fetch!
{/* 함수 안에서 await를 쓰고 싶다면 함수에 async가 있어야 함 
    Client에선 브라우저에 fetch한게 다 보였지만, Server Component라 안보이게 됨
    => 안전한 fetch가 가능해짐
    또한 Next.js가 fetch한 내용을 기억하여 캐싱하기에 속도 매우 빠름
    => 새롭게 api를 최신화하는 방법이 따로 있음*/}