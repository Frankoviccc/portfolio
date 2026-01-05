export const useContent = async () => {
    const { locale } = useI18n()
    const blogPosts = (await import(`~/assets/data/${locale.value}/blog-posts.json`)).default
    const projects = (await import(`~/assets/data/${locale.value}/projects.json`)).default

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