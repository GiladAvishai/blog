import { posts } from "@/data/posts";

export default function handler(req, res) {
    const {postId} = req.query;
    const reqPost = Number({postId}.postId);
    const foundPost = posts.find((post) => post.id == reqPost);
    if (foundPost) {
        res.status(200).json(foundPost);
    } else {
        res.status(404).send('404');
    }
    
}