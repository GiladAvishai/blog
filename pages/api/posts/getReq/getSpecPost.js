import { posts } from "@/data/posts";

/* 
* This function handles the req of a specific post.
* @const postId gets the Num/Id of the post.
* then using the Number function to change the Id to a Number type.
* @const foundPost looks for specific post using find method. 
* using the if statment where, if post found then  the return value is json of the post
* and if not found then return value is 404 status.
*/
export default function handler(req, res) {
    const {postId} = req.body.postId;
    const reqPost = Number({postId}.postId);
    const foundPost = posts.find((post) => post.id == reqPost);
    if (foundPost) {
        res.status(200).json(foundPost);
    } else {
        res.status(404).send('404');
    }
    
}