import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/postRouter.ts";
import userRouter from "./routes/userRouter.ts";
import * as path from "path";

// 1. 환경볁수 초기화
dotenv.config();

// Express 앱 생성
const app= express();// 데이터베이스가 없어서 임시로 만든 데이터 변수 (mock)
app.use(express.json()); // app.use메소드 : 미들웨어를 사용하게 할 떄 사용.
app.use(express.static(path.join(process.cwd(),"public")));


// app,get ("/" () => {});
app.get("/", (req, res) => {
    // v파일 경로 -> 응답에 파일 내용을 담아 전달
    // path join: 경로를 합쳐주는 메소드
    // process.cwd() : 현재 실행중인  node.js 프로세스가 실행되는 디렉토리 경로를 반환
    res.sendFile(path.join(process.cwd(), "public","login.html"));
});

// res.send는 스트링을 내보낼 때만 사용.
app.get("/hello", (a, b)=> {
    b.send("여기는 hello주소로 들어왔습니다.");
});

app.use(postRouter);
app.use(userRouter);

app.get("/", (req, res)=> {
    res.send("<h1>Express서버</h1><div>이렇게 쓰는 건 너무 힘드네요</div>");
})

// app.listen : 서버를실행하는 메소드
// 매개변수 2개 : (포트번호, 함수)
app.listen(process.env.PORT, () => {
    console.log(`서버가 실행되었습니다. http://localhost:${process.env.PORT}`);
});
console.log("Hello World! from TypeScript!!!!");