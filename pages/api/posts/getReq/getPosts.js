import { posts } from "@/data/posts";

// Sends a json of all the current posts in the DB
export default function handler(req, res) {
    res.status(200).json(posts);
}