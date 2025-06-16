// CSS Module 
import style from "./index.module.css";

export default function Home() {
  return (
          <>
            {/* <h1 style={{ color: "red" }}>인덱스</h1> */}
            <h1 className={style.h1}>인덱스</h1>
            <h2 className={style.h2}>H2</h2>
          </>
        )
      }
