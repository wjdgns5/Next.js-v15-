import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style  from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-books";

// context : 현재 브라우저에서 받은 요청(Request)에 대한 모든 정보가 들어있는 객체
// GetServerSidePropsContext : context 객체의 타입을 정의한 타입스크립트 타입

export const getServerSideProps = async(context: GetServerSidePropsContext)=> {

    // params : [id].tsx 같은 동적 라우팅에서 추출한 URL 파라미터
    // ! : TypeScript에게 "params는 절대 undefined가 아니다"라고 강제로 알려줌 (non-null 단언 연산자)
    const id = context.params!.id;
    const book = await fetchOneBook(Number(id));

    return {
        props: {
            book,
        },
    };
};

export default function Page( {book} : InferGetServerSidePropsType<typeof getServerSideProps> ) {
   
    if(!book) {
        return "문제가 발생했습니다. 다시 시도하세요";
    }

    const {
        // id,
        title,
        subTitle,
        description,
        author,
        publisher,
        coverImgUrl, 
    } = book;

    return (
    <div className={style.container}>
        <div className={style.cover_img_container}
         style={{ backgroundImage: `url('${coverImgUrl}')` }}>

            <img src={coverImgUrl}></img>
        </div>

        {/* <div className={style.id}>{id}</div> */}
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>{author} | {publisher}</div>
        <div className={style.description}>{description}</div>
    </div>
    );
    // 동적 경로에 해당하는 파일이다.

    // http://localhost:3000/book/1557/1111 여기서 {1557, 1111} 데이터를 낚아챈다.
    // [...id].tsx 에서  ...은 모든 구간을 낚아챈다. 라는 의미이다. Catch All Segment 라고 하는 거 같음
    // Segment 는 구간이라는 뜻이다. 
    // 단점은 만약에 http://localhost:3000/book/ 이렇게 오게 되면 뒤에 아무것도 가져올게 없기 때문에 오류가 발생

    // 그런 단점을 보안하기 위해서는 [[...id]].tsx 괄호를 한번 더 쳐주면 된다.
    // [[...id]].tsx 는 Optional Catch All Segment 라고 한다.
    // /book/ 뒤 경로에 들어오든 안들어오든 모두 대응이 된다.

}