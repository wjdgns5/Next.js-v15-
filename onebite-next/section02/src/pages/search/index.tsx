import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();

    // console.log(router);

    const w = router.query.w;
    console.log(w);

    // 쿼리스트링 : http://localhost:3000/search?q=이정환
    const { q } = router.query;
    

    return <h1>Search {q}</h1>;
}