import React,{useState} from 'react';
import './App.css';

function App() {

  let name = '홍길동';
  const [ename,setEname] = useState('유관순');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const btn = () => {
    alert("함수버튼 클릭");
    name = '이순신';

    // react useState 사용
    setEname('신사임당');

    // document.getElementById('d01').innerText = name; // js,ajax 데이터값 넣는 방법
  }

  const loginBtn = () => {
    alert("로그인 진행")
  }

  const pwBtn = (e) => {
    console.log('pw inputbox에 글을 입력합니다.')
    // enter키를 눌렀을때 로그인버튼이 클릭되도록 구현
    if(e.keyCode == 13){
      loginBtn()
    }
  }

  return (
    <div className='main'>
      <h2>게시판</h2>
      <div id='d01'>{name}</div>
      <div id='d02'>{ename}</div>
      <br/>
      <input type='text' name='id' className='id' onChange={(event) => setId(event.target.value)} value={id} placeholder='아이디를 입력하세요.'/>
      <br/>
      <input type='text' name='pw' className='pw' onChange={(event) => setPw(event.target.value)} onKeyUp={pwBtn} placeholder='패스워드를 입력하세요.'/>
      <br/>
      <button onClick={loginBtn}>로그인</button>

      <button onClick={()=>alert("하이")}>변경</button> {/* onclick(js) > onClick(react) */}
      <button onClick={btn}>함수버튼</button> {/* onclick(js) > onClick(react) */}
      {/*<div>{name=='홍길동'?(<h3>홍길동입니다.</h3>):(<h3>홍길동이 아닙니다.</h3>)}</div>*/}
    </div>
  );
}

export default App;
