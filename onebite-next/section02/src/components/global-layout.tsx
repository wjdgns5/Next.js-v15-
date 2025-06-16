import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";
// child 구조분해 : child 타입
export default function GlobalLayout({children, }: {children: ReactNode}){
     return(
    <>
      <div className={style.container}>
        <header className={style.header}>
            <Link href={'/'}>📚 OneBite Books</Link>
        </header>
        <main className={style.main}>
          {children}
        </main>
        <footer className={style.footer}>제작 @winter_lood</footer>
      </div>
    </>
  );  
}