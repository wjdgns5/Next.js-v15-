import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const {id} = router.query;
    console.log(id);
    console.log(router);


    return <h1>Book {id}</h1>;
    // 동적 경로에 해당하는 파일이다.

    // http://localhost:3000/book/1557/1111 여기서 {1557, 1111} 데이터를 낚아챈다.
    // [...id].tsx 에서  ...은 모든 구간을 낚아챈다. 라는 의미이다. Catch All Segment 라고 하는 거 같음
    // Segment 는 구간이라는 뜻이다. 
    // 단점은 만약에 http://localhost:3000/book/ 이렇게 오게 되면 뒤에 아무것도 가져올게 없기 때문에 오류가 발생

    // 그런 단점을 보안하기 위해서는 [[...id]].tsx 괄호를 한번 더 쳐주면 된다.
    // [[...id]].tsx 는 Optional Catch All Segment 라고 한다.
    // /book/ 뒤 경로에 들어오든 안들어오든 모두 대응이 된다.

}