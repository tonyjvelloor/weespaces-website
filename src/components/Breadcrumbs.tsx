"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import React from "react";

export interface BreadcrumbSegment {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  segments: BreadcrumbSegment[];
}

export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  // Construct the JSON-LD Schema for Google Sitelinks
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.weespaces.in/",
      },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2, // +2 because Home is 1
        name: segment.name,
        item: `https://www.weespaces.in${segment.url}`,
      })),
    ],
  };

  return (
    <>
      {/* Inject BreadcrumbList Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-white/60">
          <li>
            <Link href="/" className="hover:text-accent transition-colors flex items-center">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            
            return (
              <React.Fragment key={segment.url}>
                <ChevronRight className="w-4 h-4 text-white/30" />
                <li>
                  {isLast ? (
                    <span className="text-white font-medium truncate max-w-[200px] inline-block align-bottom" aria-current="page">
                      {segment.name}
                    </span>
                  ) : (
                    <Link href={segment.url} className="hover:text-accent transition-colors truncate max-w-[150px] inline-block align-bottom">
                      {segment.name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
