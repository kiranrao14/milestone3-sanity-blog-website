import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
// import { apiVersion, dataset, projectId } from '../env'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET || !process.env.NEXT_PUBLIC_SANITY_API_VERSION ) {
  throw new Error("Sanity environment variables are missing! Check NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and NEXT_PUBLIC_SANITY_API_VERSION.");
}
const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
 const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET;
 const  apiVersion=process.env.NEXT_PUBLIC_SANITY_API_VERSION;
 
 

export const config={
projectId,
dataset,
apiVersion,
useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
};
export const client = createClient(config)
export const urlFor =(source:any)=>createImageUrlBuilder(config).image(source)