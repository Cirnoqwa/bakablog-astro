import { useEffect, useRef, useState } from 'react';

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState('');
  const visibleSections = useRef<Set<Element>>(new Set());
  const sectionsRef = useRef<Element[]>([]);

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const sections = Array.from(article.querySelectorAll('section'));
    sectionsRef.current = sections;

    const items: TocHeading[] = [];

    for (const section of sections) {
      const heading = section.firstElementChild;
      if (!heading || !/^H[2-6]$/.test(heading.tagName)) continue;
      if (!heading.id) continue;

      items.push({
        id: heading.id,
        text: heading.textContent?.trim() ?? '',
        level: Number(heading.tagName[1]),
      });
    }

    setHeadings(items);
    if (items.length > 0) setActiveId(items[0].id);
  }, []);

  useEffect(() => {
    if (headings.length === 0 || sectionsRef.current.length === 0) return;

    const visible = visibleSections.current;

    const updateActive = () => {
      for (const section of sectionsRef.current) {
        if (!visible.has(section)) continue;

        const heading = section.firstElementChild;
        if (!heading) continue;

        const rect = heading.getBoundingClientRect();
        if (rect.bottom > 0) {
          setActiveId(heading.id);
          return;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        updateActive();
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: 0,
      }
    );

    sectionsRef.current.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="toc" aria-label="目录">
      <ul>
        {headings.map((h) => (
          <li
            key={h.id}
            style={{ marginLeft: `${(h.level - 2) * 12}px` }}
          >
            <a
              href={`#${h.id}`}
              className={activeId === h.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
                setActiveId(h.id);
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}