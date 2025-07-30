// CSS Module 
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import { InferGetServerSidePropsType } from "next";
import { ReactNode, useEffect } from "react";
import style from "./index.module.css";


export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수

  const data = "hello";

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data,}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect( ()=> {
    console.log(window);
  }, [])

  return (
          <div className={style.container}>
           <section>
            <h3>지금 추천하는 도서</h3>
            {books.map((book)=> <BookItem key={book.id} {...book}></BookItem>)}
            {/* {...book} 사용이유 : key:value가 많을수록, 아래처럼 일일이 다 적기는 너무 비효율적이므로 사용*/}
           </section>

           <section>
            <h3>등록된 모든 도서</h3>
            {books.map((book)=> <BookItem key={book.id} {...book}></BookItem>)}
           </section>
          </div>
        );
      }

Home.getLayout = (page:ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}