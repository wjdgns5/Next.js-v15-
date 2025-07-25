// CSS Module 
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() {
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