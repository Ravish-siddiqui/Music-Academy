'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/moving-border"
import { HoverEffect } from "./ui/card-hover-effect";
import { p } from 'framer-motion/client';
import { BackgroundGradient } from './ui/background-gradient';

function UpcomingWebinars() {


     const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];








  return (
  <BackgroundGradient >
    <div className='p-12 bg-black rounded-3xl'>
    
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
         
         <div className='text-center'>
            <h2 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">FEATURED COURSE</h2>
            <p className="  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">Learn with the Best</p>
         </div>

        
         <div className='mt-10'>
             
             <HoverEffect items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: webinar.slug
                 }
             ))}/>
         
         </div>


         <div className='mt-10 text-center'>
            <Link href={"/courses"}>
                 <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    View All Webinars
                    </Button>
               </Link>
         </div>

        </div>
        
    </div>
     </BackgroundGradient>
  )
}

export default UpcomingWebinars