import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
    const router = useRouter();

    // console.log(router);

    const w = router.query.w;
    console.log(w);

    // 쿼리스트링 : http://localhost:3000/search?q=이정환
    const { q } = router.query;
    console.log(q);

    return <h1>Search {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};