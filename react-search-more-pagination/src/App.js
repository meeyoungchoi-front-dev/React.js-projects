import React, { useEffect, useState } from "react";
import UserItem from "./components/UserItem";
import './App.css';

function App() {
  const [data, setData] = useState([]); // 초기값을 빈 배열로 설정
  const [page, setPage] = useState(1); // 페이지 번호는 1부터 시작
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://reqres.in/api/users?page=${page}`);
        const json = await res.json();
        console.log("json: ", json);
        // // json.data가 배열인지 확인
        // if (Array.isArray(json.data)) {
        //   setData(json.data); // 사용자 데이터 배열만 상태로 설정
        // } else {
        //   console.error("Unexpected data format:", json);
        //   setData([]); // 데이터 형식이 예상과 다를 경우 빈 배열로 설정
        // }
        // json.data가 배열인지 확인 후 데이터 추가
        if (Array.isArray(json.data)) {
          setData(prevData => [...prevData, ...json.data]); // 새로운 데이터와 기존 데이터 병합
        } else {
          console.error("Unexpected data format:", json);
        }
        setTotalPages(json.total_pages); // 총 페이지 수 설정
      } catch (error) {
        console.log(error);
        setData([]); // 오류 발생 시 빈 배열로 설정
      }
    };
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1); // 페이지 증가
    }
  };

  return (
    <div className="App">
      {Array.isArray(data) && data.map(user => (
        <UserItem
          key={user.id}
          fullname={`${user.first_name} ${user.last_name}`} // 이름을 풀네임으로 표시
          email={user.email}
          avatar={user.avatar} // 사용자 아바타 이미지 추가
        />
      ))}
      <button onClick={handleNextPage} disabled={page >= totalPages}>
        더보기
      </button>
    </div>
  );
}

export default App;
