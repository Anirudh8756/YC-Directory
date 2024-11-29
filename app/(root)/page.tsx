import SearchForm from "../../components/searchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 323, 
    author: { _id: 1, name: 'Anirudh' , joinedAt:'2 Years Ago' , user_profile_image:"https://dummyimage.com/300.png/09f/fff&text=Anirudh+Das", },
    _id: 1, 
    description: 'This is a description', 
    image: 'https://picsum.photos/id/237/200/300',
    category: 'Robots',
    title: 'Wrath Corps.'
  }
];
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
