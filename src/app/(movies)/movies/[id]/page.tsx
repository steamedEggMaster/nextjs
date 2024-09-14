import { url } from "@/app/(home)/page"
import { resolve } from "path"; 
import MovieVideos from "../../../../../components/movie-videos";
import MovieInfo from "../../../../../components/movie-info";
import { Suspense } from "react";
import Loading from './loading';

export default function MovieId({
    params: { id },
}: {
    params: { id : string }
}){

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loding movie videos</h1>}>
            <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}
// loading 컴포넌트 + Promise.all을 이용한 대기는 모든 fetch가 완료되어야 내용이 표시되었음
// suspense 사용 시, 각각의 fetch가 될 때마다 내용이 바로바로 표시됨
// fallback은 로딩되는 동안의 메세지를 띄움