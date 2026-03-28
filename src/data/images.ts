// Projects
import imageToImage from '../assets/projects/Image-to-Image.png'
import publications1 from '../assets/projects/publications-1.jpg'
import publications2 from '../assets/projects/publications-2.jpg'
import publications3 from '../assets/projects/publications-3.jpg'
import publications4 from '../assets/projects/publications-4.jpg'
import publications5 from '../assets/projects/publications-5.jpg'
import publications6 from '../assets/projects/publications-6.jpg'
import publications7 from '../assets/projects/publications-7.jpg'
import sketches from '../assets/projects/sketches.png'
import traffic1 from '../assets/projects/traffic1.png'
import traffic2 from '../assets/projects/traffic2.png'

// Talk
import bestResearchPaper from '../assets/talk/best-research-paper.jpeg'
import directorGivingAward from '../assets/talk/director-giving-award.jpeg'
import krishanuTalkPhoto from '../assets/talk/krishanu-talk-photo.png'
import silverMedal from '../assets/talk/silver-medal.jpeg'
import krishanuCandid from '../assets/talk/KRISHANU-CANDID.JPG'

/**
 * Maps markdown image paths to Vite-resolved asset URLs.
 * Keys match the paths used in markdown files.
 */
export const imageMap: Record<string, string> = {
  // projects/ paths
  'projects/Image-to-Image.png': imageToImage,
  'projects/publications-1.jpg': publications1,
  'projects/publications-2.jpg': publications2,
  'projects/publications-3.jpg': publications3,
  'projects/publications-4.jpg': publications4,
  'projects/publications-5.jpg': publications5,
  'projects/publications-6.jpg': publications6,
  'projects/publications-7.jpg': publications7,
  'projects/sketches.png': sketches,
  'projects/traffic1.png': traffic1,
  'projects/traffic2.png': traffic2,

  // Talk/ paths (original markdown references with %20 and without)
  'Talk/best-resaerch%20paper.jpeg': bestResearchPaper,
  'Talk/best-resaerch paper.jpeg': bestResearchPaper,
  'Talk/director-giving-award.jpeg': directorGivingAward,
  'Talk/krishanu-talk%20photo.png': krishanuTalkPhoto,
  'Talk/krishanu-talk photo.png': krishanuTalkPhoto,
  'Talk/silver-medal.jpeg': silverMedal,
  'Talk/KRISHANU-CANDID.JPG': krishanuCandid,
}

export function resolveImagePath(src: string): string {
  // Strip leading /docs/ prefix if present
  const cleaned = src.replace(/^\/docs\//, '')
  return imageMap[cleaned] || src
}
