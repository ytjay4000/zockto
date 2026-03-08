import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children, ...props }) => {
          const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <h2 id={id} className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground scroll-mt-24" {...props}>
              {children}
            </h2>
          );
        },
        h3: ({ children, ...props }) => (
          <h3 className="font-display text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground" {...props}>
            {children}
          </h3>
        ),
        h4: ({ children, ...props }) => (
          <h4 className="font-display text-lg font-semibold mt-6 mb-2 text-foreground" {...props}>
            {children}
          </h4>
        ),
        p: ({ children, ...props }) => (
          <p className="text-muted-foreground leading-[1.7] mb-4" {...props}>
            {children}
          </p>
        ),
        a: ({ children, href, ...props }) => (
          <a
            href={href}
            className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
          >
            {children}
          </a>
        ),
        ul: ({ children, ...props }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted-foreground" {...props}>
            {children}
          </ol>
        ),
        li: ({ children, ...props }) => (
          <li className="leading-[1.7]" {...props}>
            {children}
          </li>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            className="border-l-4 border-primary pl-6 py-3 my-6 bg-primary/5 rounded-r-lg"
            {...props}
          >
            {children}
          </blockquote>
        ),
        strong: ({ children, ...props }) => (
          <strong className="font-semibold text-foreground" {...props}>
            {children}
          </strong>
        ),
        em: ({ children, ...props }) => (
          <em className="italic" {...props}>
            {children}
          </em>
        ),
        hr: () => <hr className="my-8 border-border/50" />,
        table: ({ children, ...props }) => (
          <div className="overflow-x-auto my-6 rounded-lg border border-border/50">
            <table className="w-full text-sm" {...props}>
              {children}
            </table>
          </div>
        ),
        thead: ({ children, ...props }) => (
          <thead className="bg-muted/50" {...props}>
            {children}
          </thead>
        ),
        th: ({ children, ...props }) => (
          <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border/50" {...props}>
            {children}
          </th>
        ),
        tr: ({ children, ...props }) => (
          <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors" {...props}>
            {children}
          </tr>
        ),
        td: ({ children, ...props }) => (
          <td className="px-4 py-3 text-muted-foreground" {...props}>
            {children}
          </td>
        ),
        code: ({ children, className, ...props }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
                {children}
              </code>
            );
          }
          return (
            <code className={cn("block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto", className)} {...props}>
              {children}
            </code>
          );
        },
        img: ({ src, alt, ...props }) => (
          <img
            src={src}
            alt={alt || ''}
            className="rounded-lg my-6 max-w-full"
            loading="lazy"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
