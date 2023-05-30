import { posts } from "@/data/posts";

export default function handler(req, res) {
    const {postId} = req.query;
    const reqPost = Number({postId}.postId);
    const foundPost = posts.find((post) => post.id == reqPost);
    res.status(200).json(foundPost);
}