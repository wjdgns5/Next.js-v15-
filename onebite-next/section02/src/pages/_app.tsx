import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

// 타입정의 
type NextPageWithLayout = NextPage & {
  getLayout? : (page: ReactNode) => ReactNode;
  // getLayout뒤에 "?"" 를 붙이는 이유는 bookPage 처럼 없을수 있다. 그래서 옵셔널한 타입으로 "?" 를 붙인다.
  // 타입에러를 잡을수 있게된다.
}

// App 컴포넌트: 현재 접속요청이 온 페이지 역할을 하는 컴포넌트
export default function App({ Component, pageProps }: AppProps & {Component: NextPageWithLayout;}) {
  // console.log(Component.getLayout);

  // 예외처리 하려면 ?? 를 사용해야 한다.
  const getLayout = Component.getLayout ?? ((page : ReactNode)=>page);

  return(
    <>
      <GlobalLayout>
        {getLayout( <Component {...pageProps} /> )}
          
      </GlobalLayout>

    </>
  );  
}
