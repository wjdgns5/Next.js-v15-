import { BookData } from "@/types";

// Promise<T> : "비동기 작업이 끝났을 때 T 타입의 값을 돌려준다" 는 의미

export default async function fetchRandomBooks() : Promise<BookData[]> {

    const url = `http://localhost:12345/book/random`;

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error();
        }

        return await response.json();

    } catch (err) {
        console.error(err);
        return [];
    }
}