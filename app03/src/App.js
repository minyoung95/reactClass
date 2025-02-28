import React,{useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Form from './components/Form';

function App() {
  // json데이터, 배열객체, 일반변수는 새로고침을 해야 적용
  // useState변수는 자동으로 화면에 적용
  const [movies,setMovies] = useState(
    [
      // useEffect를 사용하여 db에서 데이터를 가져와 movies에 저장
      {no:1,title:"해리포터 1",date:"2020-01-01"},
      {no:2,title:"해리포터 2",date:"2021-01-01"},
      {no:3,title:"해리포터 3",date:"2022-01-01"},
    ]
  );

  // 데이터추가 insert(post)
  const addMovie = (movie) => {
    // setMovies(movie); // 기존데이터를 모두지우고 저장
    setMovies([...movies,movie])
    // setMovies([movie,...movies]) // 추가한 데이터가 위쪽으로 올라옴
  }

  // 데이터삭제 delete(delete)
  const delMovie = (no) => {
    console.log("삭제번호 : "+no);

    // filter : 해당되는 데이터를 리턴해서 돌려줌
    setMovies(
      movies.filter((movie)=>{
        return(
          movie.no != no // no를 뺀 다른데이터들을 리턴
        )
      })
    )
  }

  // 데이터수정 update(put)

  // 데이터출력 select(get)
  // 반복문 map함수는 return해서 값을 돌려줌. for문 반복만 함. return없음.
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성 
  const mlist = 
  
  movies.length?
  movies.map((movie)=>{
    return(
      <MovieList movie={movie} delMovie={delMovie} key={movie.no}/>
    );
  }):"영화정보 데이터가 없습니다."; // ? : 삼항식

  // 추가, 수정, 삭제
  return (
    <div className="main">
      <h2>영화정보리스트</h2>
      <Form addMovie={addMovie}/>

      <div>
        {mlist}
      </div>
        

      
      
      
      
      {/* <MovieList uBtn="update" dBtn="delete" />
      <MovieList uBtn="변경" dBtn="제거"/>
      <MovieList/> */}


    </div>
  );
}

export default App;
