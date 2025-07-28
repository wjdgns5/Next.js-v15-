import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from './searchable-layout.module.css';

export default function SearchableLayout({children,}: {children:ReactNode;}) {

    const router = useRouter();
    const [search, setSearch] = useState("");

    // q 를 추출한 값이 "string", "string[]", "undefined" 이거나 "1개", "2개이상"이거나, "없거나" 하기 때문이다.
    // q 뒤에 "as string" 을 붙이게 되면 string 타입으로 추론되기 때문에 타입문제를 해결할수 있다.
    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "");
    }, [q]);

    // e: React.ChangeEvent<HTMLInputElement> : 리액트에서 발생한 ChangeEvent 객체타입인데 HTMLInputElement 태그에서 발생한 타입이다.           
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmit = () => {
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            onSubmit();
        }
    };

    return( 
            <div>
                <div className={style.searchbar_container}>
                    <input value={search} onKeyDown={onKeyDown} onChange={onChangeSearch} placeholder="검색어를 입력하세요 ..."></input>
                    <button onClick={onSubmit}>검색</button>
                </div>
                {children}
           </div>
        );
}