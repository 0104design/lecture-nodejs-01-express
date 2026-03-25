import express from "express";
import dotenv from "dotenv";

// 1. 환경볁수 초기화
dotenv.config();

// Express 앱 생성
const app= express();
app.use(express.json());        // app.use메소드 : 미들웨어를 사용하게 할 떄 사용.
// 데이터베이스가 없어서 임시로 만든 데이터 변수 (mock)
const mockPosts = [
    { id: 1, title: "첫 번째 택배", content: "무사히 도착했습니다." },
    { id: 2, title: "두 번째 택배", content: "파손 주의해주세요!" },
    { id: 3, title: "세 번째 택배", content: "문 앞에 두고 가주세요." },
];

// app,get ("/" () => {});
app.get("/", (req, res) => {
    res.send("여기는 루트입니다");
});
// res.send는 스트링을 내보낼 때만 사용.
app.get("/hello", (a, b)=> {
    b.send("여기는 hello주소로 들어왔습니다.");
});

app.get("/posts", (req, res) => {
    //res.json : 스트링이 아닌 객체타입의 데이터를 보낼 때 사용(단, 함수 제외)
    // res.json 메소드를 사용하려면 app.use(Express.json()) 을 꼭 써줘야함
    res.json(mockPosts);
})


app.get("/", (req, res)=> {
    res.send("<h1>Express서버</h1><div>이렇게 쓰는 건 너무 힘드네요</div>");
})

// app.listen : 서버를실행하는 메소드
// 매개변수 2개 : (포트번호, 함수)
app.listen(3000, () => {
    console.log("서버가 실행되었습니다. http://localhost:3000");
});
console.log("Hello World! from TypeScript!!!!");