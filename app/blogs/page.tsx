import BlogsHero from "@/components/layouts/BlogsLayout/BlogsHero";
import FinalCTASection from "@/components/layouts/BlogsLayout/FinalCTASection";
import { blogsData } from "@/components/layouts/BlogsLayout/data";
import BlogsIndex from "@/components/layouts/BlogsLayout/BlogsIndex";

const page = () => {
    return (
        <div>
            <BlogsHero image={blogsData.hero.image} title={blogsData.hero.title} overlayOpacity={blogsData.hero.overlayOpacity} />
            <BlogsIndex />
            <FinalCTASection title={blogsData.finalCTAsection.title} subtitle={blogsData.finalCTAsection.subtitle} />
        </div>
    )
}

export default page;