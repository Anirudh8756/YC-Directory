import { formatDate } from '@/lib/utils'
import React from 'react'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import {Button } from './ui/button';
import { format } from 'path';
const StartupCard = ({post}: {post: startupTypeCard}) => {
  const { _createdAt , views , description ,author:{_id: authorId , name , image: profile_url} , title , category , _id , image: startup_image } = post;
  return (
    <li className="startup-card group">
        <div className="flex flex-between">
            <p className="startup_card_date"> 
              {formatDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary"/>
                <p>{views}</p>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/users/${authorId}`}>
            <p className="text-16-medium line-clamp-1"> 
              {name}
            </p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className='text-26-semibold line-clamp-1'>
                {title}
              </h3>
              </Link>
          </div>
          <Link href={`users/${authorId}`} className="w-[48px] h-[48px] border-[3px] border-black flex items-center justify-center rounded-[50%] overflow-hidden object-cover">
              <img src={profile_url} alt="" width="48" height="48"/>
          </Link>
        </div>
        <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">
          {description}
        </p>
        <img src={startup_image} alt="placeholder" className="startup-card_img object-cover"   />
        </Link>
        <div className="flex-betweem gap-3 mt-5">
          <Link href={`/?qurey=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
        </div>
        <Button className="startup-card_btn" asChild>
          <a href={`startup/${_id}`}>
            View Startups
          </a>
        </Button>

    </li>
  )
}

export default StartupCard