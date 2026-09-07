export type Testimonial = {
  name: string
  programme: string
  poster: string
  // YouTube/Vimeo watch URL or share link. Leave empty until the video is ready.
  videoUrl: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Amara Chukwu",
    programme: "B.Eng. Computer Engineering",
    poster: "/ug2.jpeg",
    videoUrl: "",
  },
  {
    name: "David Okafor",
    programme: "M.Sc. Public Health",
    poster: "/l1.jpeg",
    videoUrl: "",
  },
  {
    name: "Zainab Bello",
    programme: "B.Sc. Business Administration",
    poster: "/ug3.jpeg",
    videoUrl: "",
  },
  {
    name: "Chidi Umeh",
    programme: "LL.B. Law",
    poster: "/l2.jpeg",
    videoUrl: "",
  },
  {
    name: "Grace Adeyemi",
    programme: "B.Sc. Mass Communication",
    poster: "/l3.jpeg",
    videoUrl: "",
  },
]

// Turn a YouTube or Vimeo URL into an embeddable autoplay URL.
export function toEmbedUrl(url: string): string | null {
  if (!url) return null
  const yt = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  )
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`
  return url
}
