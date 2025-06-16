import {NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req : NextApiRequest, // request (요청) 사용자가 서버에 보내는 요청
    res : NextApiResponse // response (응답) 서버가 사용자에게 돌려주는 응답
) {
    const date = new Date();
    res.status(200).json({ time:date.toLocaleString() });
}