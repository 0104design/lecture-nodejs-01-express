import express from "express";
import path from "path"

const router= express.Router();

const mockUsers = [
    { id: 1, email: "admin@test.com", password: "password123", name: "관리자" },
    { id: 2, email: "user@test.com", password: "1234", name: "일반유저" },
];

router.get("/users/login",(req, res) => {
    // const email = req.query.email;
    // const password = req.query.password;
    const {email, password} = req.query;
    res.send (`email${email}, password${password}`);
    // 1. email, password 둘 다 도착 됐는지 확인 -> 성공/ 실패
    // 2. email로 갑을 찾알을 때 맞는지              성공 / 실패
    // 3. 그 잦은 회원 정보와 비밀번호를 비교해서 맞는지 겅공 / 실패
    const successPage = path.join(process.cwd(), "public", "success,html")
    const failPage = path.join(process.cwd(), "public", "fail.html")

    if(!email || !password){
        return res.sendFile(failPage);
    }
    const user = mockUsers.find((value) => {
        return value.email === email;
    });
    if(!user){
        return res.sendFile(failPage);
    }

    if (user.password !== password){
        return res.sendFile(failPage);
    }
    res.sendFile(successPage);
})



export default router;