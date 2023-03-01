import { posts } from "@/data/posts";

export default function handler(req, res) {
    const {postId} = req.query;
    res.status(200).json({postId});
}