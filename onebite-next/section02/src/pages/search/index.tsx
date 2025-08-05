import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

// context : 현재 브라우저에서 받은 요청(Request)에 대한 모든 정보가 들어있는 객체
// GetServerSidePropsContext : context 객체의 타입을 정의한 타입스크립트 타입
export const getServerSideProps = async(context : GetServerSidePropsContext)=> {
    
    const q = context.query.q; // 검색어 가져오기
    const books = await fetchBooks(q as string); // string 타입으로 가져오기
    return {
        props: {
            books,
        }
    };
};

export default function Page( {books}: InferGetServerSidePropsType<typeof getServerSideProps> ) {
   return (
   <div>
        {books.map((book) => (
        <BookItem key={book.id} {...book}></BookItem>))}
   </div>
   );
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};