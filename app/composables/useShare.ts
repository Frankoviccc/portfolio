export const useShare = () => {
    const route = useRoute()

    const getUrl = () => {
        return `https://frankstruik.nl${route.fullPath}`
    }

    const shareToFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`
        window.open(url, '_blank', 'width=600,height=400')
    }

    const shareToLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`
        window.open(url, '_blank', 'width=600,height=400')
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(getUrl())
            return true
        } catch (error) {
            console.error('Failed to copy:', error)
            return false
        }
    }

    return {
        shareToFacebook,
        shareToLinkedIn,
        copyLink
    }
}