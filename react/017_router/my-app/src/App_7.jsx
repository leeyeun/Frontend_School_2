import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  const style = {
    margin:'5px'
  }
  return (
    <BrowserRouter>
      <Link to="/" style={style}>Home </Link>
      <Link to="/about" style={style}>About </Link>
      <Link to="/contact" style={style}>ConTact </Link>
      <Link to="/blog" style={style}>Blog</Link>


      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={ConTact} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blogdetail/:id" exact component={BlogDetail} />
    </BrowserRouter>
  );
}

function Home(){
  return <h1>home</h1>
}

function About(){
  return <h1>about</h1>
}

function ConTact(){
  return <h1>contact</h1>
}

function Blog(){
  return <h1>blog</h1>
}

function BlogDetail({match}){
  console.log(match)
  console.log(match.params.id)
  //http://localhost:3000/blogdetail:3
  //fetch, axios와 같은 get 요청을 할 수 있는 코드를 작성
  //http://test.api.weniv.co.kr/mall/1
  // const url = 'http://test.api.weniv.co.kr/mall/' + match.params.id
  // console.log(url)
  return (
    <div>
      <h1>BlogDetailPage</h1>
      <p>{match.params.id}번 게시물이 로드되었습니다.</p>
    </div>
  )
}



export default App;