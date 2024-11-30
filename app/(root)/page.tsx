import { client } from "@/sanity/lib/client";
import SearchForm from "../../components/searchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { json } from "stream/consumers";
export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query; 

  const posts = await client.fetch(STARTUPS_QUERY);
  console.log(JSON.stringify(posts))
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
          {
            posts?.length > 0 
            ? posts.map((post: StartupCardType , index: number) => (
              <StartupCard key={post?.id} post={post} />
            ))
            : (<p className="no-results">No Startup Found</p>)
          }
        </ul>
      </section>    
    </>
  );
}
