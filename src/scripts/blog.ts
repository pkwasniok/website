import { getCollection, getEntryBySlug } from "astro:content";

async function getAllPosts() {
    let posts = await getCollection("blog");
    posts = posts.filter((post) => post.data.draft !== true);
    return posts;
}

async function getPostBySlug(slug: string) {
    let post = await getEntryBySlug("blog", slug);

    if (post == undefined || post.data.draft == true) {
        return undefined
    }

    return post;
}

async function getFeaturedPost() {
    const posts = await getAllPosts();

    if (posts.length == 0) {
        return undefined;
    }

    return posts[0];
}

export const blog= {
    getAllPosts,
    getPostBySlug,
    getFeaturedPost,
};

export default blog;
