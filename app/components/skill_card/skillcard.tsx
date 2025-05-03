export default function SkillCard({category,technologies}: {category?: string, technologies?: string[]}) {
  return (
    <div className="flex flex-col items-start justify-start border p-3 mb-3 border-[color:var(--geist-border)] rounded-lg bg-[color:var(--geist-background)] dark:bg-[color:var(--geist-foreground)] dark:border-[color:var(--geist-foreground)] hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-all duration-300 ease-in-out">
      <h3 className="text-lg font-bold text-start font-[family-name:var(--font-geist-mono)] hover:underline">{category}</h3>
      <ul className="list-disc list-inside text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-[color:var(--geist-foreground)] dark:text-[color:var(--geist-background)]">
        {technologies && technologies.map((tech, index) => (
          <li key={index} className="mb-1 tracking-[-.01em] hover:text-lg transition-all duration-300 ease-in-out">
            <span className="font-semibold">{tech}</span> 
          </li>
        ))}
        
      </ul>
    </div>
  );
}