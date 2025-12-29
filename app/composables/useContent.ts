import blogPosts from "~/assets/data/blog-posts.json"
import projects from "~/assets/data/projects.json"

export const useContent = () => {
    const getBlogPost = (slug: string) => {
        return blogPosts.find(post => post.slug === slug)
    }

    const getAllBlogPosts = () => {
        return blogPosts
    }

    const getProject = (slug: string) => {
        return projects.find(project => project.slug === slug)
    }

    const getAllProjects = () => {
        return projects
    }

    return {
        getBlogPost,
        getAllBlogPosts,
        getProject,
        getAllProjects
    }
}