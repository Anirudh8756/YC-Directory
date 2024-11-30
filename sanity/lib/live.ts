import { defineLive } from "next-sanity";
import { client } from '@/sanity/lib/client'
import "server-only";
export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: 'vX' 
  }) 
});
