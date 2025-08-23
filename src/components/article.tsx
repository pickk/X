import react from "react";

interface ArticleProps {
  title: string;
  content: string;
}
export const Article: react.FC<ArticleProps> = ({ title, content }) => {
  return (
    <article className="prose lg:prose-xl dark:prose-invert max-w-none">
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
};
