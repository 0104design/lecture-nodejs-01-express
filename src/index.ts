import express from "express";
import dotenv from "dotenv";

// 1. 환경볁수 초기화
dotenv.config();

// Express 앱 생성
const app= express();
app.get("/", (req, res)=> {
    res.send("<h1>Express서버</h1><div>이렇게 쓰는 건 너무 힘드네요</div>");
})


// app.listen : 서버를실행하는 메소드
// 매개변수 2개 : (포트번호, 함수)
app.listen(3000, () => {
    console.log("서버가 실행되었습니다. http://localhost:3000");
});
console.log("Hello World! from TypeScript!!!!");