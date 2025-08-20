'use client'
import React from 'react'
import courseData from '@/data/music_courser.json'
import Link from 'next/link'
import { Button } from "./ui/moving-border"
import { div, p } from 'framer-motion/client'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
  id:          number,
  title:       string,
  slug:        string,
  description: string,
  price:       number,
  instructor:  string,
  isFeatured:  boolean,
}

function Featuredcourses() {

const featuredCourse = courseData.courses.filter((course:Course) => course.isFeatured)
  
  return (



    <div className='py-12 bg-black  justify-items-center mt-2.5'>

      <div>
        <div>
          <div className="text-center">
             <h2 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">FEATURED COURSE</h2>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">Learn with the Best</p>
          </div>
        </div>

      </div>


      <div className='mt-10 mx-7'>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

              {featuredCourse.map((course:Course)=> (
                <div key={course.id} className="flex justtify-cente">
                  
                  <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-black  overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                  
                </div>
              ))}

            </div>

      </div>



      <div className='mt-20 text-center'>
               <Link href={"/courses"}>
                 <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    View All courses
                    </Button>
               </Link>


      </div>


    </div>
  )
}

export default Featuredcourses