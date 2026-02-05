import { RichText as BaseHubRichText } from "basehub/react-rich-text";
import { highlight } from "@/lib/shiki";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const RichText = async ({ content }: { content: { json: any } }) => {
  if (!content?.json?.content) return null;

  return (
    <div className="prose prose-invert prose-brand max-w-none">
      <BaseHubRichText
        content={content.json.content}
        components={{
          h2: (props) => <h2 className="text-3xl font-bold mt-12 mb-6 text-white" {...props} />,
          h3: (props) => <h3 className="text-2xl font-bold mt-8 mb-4 text-white" {...props} />,
          p: (props) => <p className="text-lg leading-relaxed text-white/70 mb-6" {...props} />,
          ul: (props) => <ul className="list-disc list-inside space-y-3 mb-6 text-white/70" {...props} />,
          ol: (props) => <ol className="list-decimal list-inside space-y-3 mb-6 text-white/70" {...props} />,
          li: (props) => <li className="text-lg" {...props} />,
          blockquote: (props) => (
            <blockquote className="border-l-4 border-brand-primary bg-brand-primary/5 p-8 my-10 rounded-r-2xl italic text-xl text-white/90" {...props} />
          ),
          code: ({ children }) => {
             return <code className="bg-white/10 px-1.5 py-0.5 rounded text-brand-primary text-sm font-mono">{children}</code>
          },
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          "code-block": async ({ content, attrs }: any) => {
            const html = await highlight(content, attrs?.language || 'typescript');
            return (
              <div
                className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117]"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }
        }}
      />
    </div>
  );
};
