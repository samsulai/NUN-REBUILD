"use client"

import { useState } from "react"
import { Check, Link2 } from "lucide-react"
import { FaFacebookF, FaWhatsapp, FaXTwitter, FaLinkedinIn } from "react-icons/fa6"

function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const links = [
    {
      label: "Share on X",
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "Share on Facebook",
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "Share on LinkedIn",
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "Share on WhatsApp",
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
  ]

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore clipboard errors (unsupported browser, permissions, etc.)
    }
  }

  const iconButtonClass =
    "flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2fb] text-navy transition-colors hover:bg-navy hover:text-white"

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">Share</span>
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={iconButtonClass}
          >
            <link.icon className="h-4 w-4" />
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          aria-label="Copy link"
          className={iconButtonClass}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}

export default ShareButtons
