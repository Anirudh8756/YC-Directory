import StartupFrom from '@/components/StartupFrom';
import React from 'react'

const Page = () => {
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your startup</h1>
      </section>
      <StartupFrom/>
    </>
  );
}

export default Page