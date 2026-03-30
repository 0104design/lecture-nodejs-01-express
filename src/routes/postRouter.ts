import express from "express";

const router = express.Router();

const mockPosts = [
    { id: 1, title: "첫 번째 택배", content: "무사히 도착했습니다." },
    { id: 2, title: "두 번째 택배", content: "파손 주의해주세요!" },
    { id: 3, title: "세 번째 택배", content: "문 앞에 두고 가주세요." },
];


router.get("/posts", (req, res) => {
    //res.json : 스트링이 아닌 객체타입의 데이터를 보낼 때 사용(단, 함수 제외)
    // res.json 메소드를 사용하려면 app.use(Express.json()) 을 꼭 써줘야함
    res.json(mockPosts);
});

// 경로를 / 로 나눴을 때 /post까지는 정해져 있고 그 뒤 어떤 값이 들어올 지 모를 떄
// : (콜론) 을 붙이고 이름표를 붙여줌 -> id 라고 하는 이름표
// 예)        / post/1 =>: 여기에 걸리고, id가 1
//           / post/300 여시에 걸리고, id가 300
router.get("/posts/:id", (req, res) => {
    // 이렇게 가져온 id값은
    // 이 안에 담겨있음. (req.params.id) <- 이건 주소에서 가져온 값이라 string
    const targetId = Number(req.params.id);
    // 1. 숫자값이 들어오면 정상적으로 형변환이 일어날 거고, 문자값으로 들어오면 NaN이 나
    // 2. target에 저장?

    //1. 정상
    // targetId를 가지고 mockPosts에서 해달하는 글 (객체) 를 찾아서 빈 박스에 넣어야 함
    const result= mockPosts.find((value) => {
        //  첫 순회 : { id: 1, title: "첫 번째 택배", content: "무사히 도착했습니다." }
        // 2 순회 : { id: 2, title: "두 번째 택배", content: "파손 주의해주세요!" },
        // 3순회 : { id: 3, title: "세 번째 택배", content: "문 앞에 두고 가주세요." }
        return value.id === targetId;
    });     // 일치하는 게 있으면 그 value가 반환되고, 없으면 undefined가
    // 1-1 깂이 반환 됐을 떄
    // 1-2 값이 없을 떄

    if (!result) {
        return  res.status(404).json({message: "post not found"});      // 에러 404 not found
    }
    // .json운 우리가 보내는 자바스크립트 객체를 json 형식으로 바꿔주는 일
    // -> 우리사 json() 안에 매개변수에 넣어준 건, 자바스크립트 객체 =>
    res.json({data: result});
});

export default router;