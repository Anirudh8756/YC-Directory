import SearchForm from "../../components/searchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query; 
  const params = { search: query || null };
  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})
  const mappedPosts = posts.map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    author: post.author,
    views: post.views,
    description: post.description,
    category: post.category,
    image: post.image,
    pitch: post.pitch,
  } as StartupTypeCard));
  return (
    <>
    <section className="pink_container">
        <div className="heading">
          pitch your startup, <br/>
          Connect with entrepreneurs
        </div>
          <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
          <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold"> 
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

<ul className="mt-7 card_grid"> 
  {mappedPosts?.length > 0 
    ? mappedPosts.map((post: StartupTypeCard) => (
        <StartupCard key={post._id} post={post} />
      ))
    : <p className="no-results">No Startup Found</p>
  }
</ul>
      </section>
      <SanityLive/>    
    </>
  );
}
