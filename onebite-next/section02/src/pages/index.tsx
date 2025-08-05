// CSS Module 
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";
import style from "./index.module.css";


export const getServerSideProps = async() => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수

  // 직렬적인 방식으로 작동한다.
  // const allBooks = await fetchBooks(); 
  // const recoBooks = await fetchRandomBooks();

  // 병렬 방식으로 연결한 거다.
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

// Infer : 추론하다 (타입을 자동으로 파악하다).
// GetServerSidePropsType<> : 함수가 반환한 Props 객체의 타입을 얻는다.?
// <typeof getServerSideProps> : getServerSideProps 라는 함수형 변수의 타입을 가져온다.
export default function Home({allBooks, recoBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  console.log(allBooks);

  return (
          <div className={style.container}>
           <section>
            <h3>지금 추천하는 도서</h3>
            {recoBooks.map((book)=> <BookItem key={book.id} {...book}></BookItem>)}
            {/* {...book} 사용이유 : key:value가 많을수록, 아래처럼 일일이 다 적기는 너무 비효율적이므로 사용*/}
           </section>

           <section>
            <h3>등록된 모든 도서</h3>
            {allBooks.map((book)=> <BookItem key={book.id} {...book}></BookItem>)}
           </section>
          </div>
        );
      }

Home.getLayout = (page:ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}