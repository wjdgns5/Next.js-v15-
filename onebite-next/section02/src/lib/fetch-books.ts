import { BookData } from "@/types";

// async : 비동기(asynchronous)란?
// 어떤 작업을 실행할 때 그 작업이 완료되지 않더라도 다음 코드를 실행하는 방식

// Promise<T> : "비동기 작업이 끝났을 때 T 타입의 값을 돌려준다" 는 의미

// q?: string : 선택적으로 문자열 q 이다.
// q?: string : q를 안 넘기면 "undefined" 가 된다. (즉, 값이 있어도 되고 없어도 됨)
export default async function fetchBooks(q?:string) : Promise<BookData[]> {
    let url = `http://localhost:12345/book`;

    if(q){
        url = url + `/search?q=${q}`
    }

    try {
        // response : 서버에서 클라이언트로 응답 메시지를 전송하는 객체
        // await : await는 비동기 함수의 실행 결과를 기다리는 키워드이다.
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error();
        }

        return await response.json();

    } catch (err) {
        console.log(err);
        return[]; // 일단 빈 배열이라도 반환하게 한다.
    }

}

