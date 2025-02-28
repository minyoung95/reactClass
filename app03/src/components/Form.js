import React,{useState} from "react";

const Form = ({addMovie}) => {

  // 함수자리

  const [count,setCount] = useState(4);
  const [no,setNo] = useState(0);
  const [title,setTitle] = useState('');
  const [date,setDate] = useState('');

  const saveBtn = () => {
    alert("영화정보 저장합니다.");
    console.log("번호 :"+count);
    console.log("제목 :"+title);
    console.log("날짜 :"+date);

    addMovie({no:count,title:title,date:date}); // 영화정보저장
    resetData();
    setCount(count+1); // 카운트 +1 (db에서 시퀀스로 대체)

  }

  // input 화면 지우기
  const resetData = () => {
    setTitle("");
    setDate("");
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">영화제목</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}
          className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">날짜</label>
          <input type="text" value={date} onChange={(e)=>setDate(e.target.value)}
           className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" onClick={saveBtn} className="btn btn-primary w-100">저장</button>
      </form>
    </>
  );
}

export default Form;