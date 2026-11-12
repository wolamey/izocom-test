import { Link, useParams } from 'react-router-dom';
import { Eye, Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import type { ArticleBlock } from '../data/articles';

function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'heading':
      return block.level === 3
        ? <h3 className="text-xl font-bold text-white mt-8 mb-3">{block.text}</h3>
        : <h2 className="text-2xl lg:text-3xl font-bold text-white mt-10 mb-4">{block.text}</h2>;
    case 'image':
      return (
        <figure className="my-8">
          <img src={block.image} alt={block.caption || ''} className="w-full rounded-2xl border border-white/10" loading="lazy" />
          {block.caption && <figcaption className="text-sm text-gray-500 text-center mt-2">{block.caption}</figcaption>}
        </figure>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-brand-500 pl-4 my-6 italic text-gray-300">
          {block.text}
        </blockquote>
      );
    case 'paragraph':
    default:
      return <p className="text-gray-300 leading-relaxed mb-4">{block.text}</p>;
  }
}

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Статья не найдена</h1>
          <Link to="/about-pipes" className="text-brand-400 hover:underline">← Вернуться к блогу</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedArticles(article);

  return (
    <div>
      {/* Hero статьи */}
      <section className="relative bg-gray-900 py-12 lg:py-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/about-pipes" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors mb-6">
            <ArrowLeft size={16} />
            Все статьи блога
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-full flex items-center gap-1">
                <Tag size={10} />{tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Eye size={14} /> {article.views}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
          </div>
        </div>
      </section>

      {/* Контент статьи */}
      <section className="bg-gray-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.coverImage && (
            <img src={article.coverImage} alt={article.title} className="w-full rounded-2xl mb-8 border border-white/10" />
          )}
          <article>
            {article.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </article>
        </div>
      </section>

      {/* Похожие статьи */}
      {related.length > 0 && (
        <section className="bg-gray-900 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Похожие статьи</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link
                  key={a.id}
                  to={`/articles/${a.slug}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all"
                >
                  <div className="aspect-video bg-gray-800 overflow-hidden">
                    {a.coverImage ? (
                      <img src={a.coverImage} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">Нет изображения</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors line-clamp-3">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Нужна <span className="text-brand-500">консультация?</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Наши эксперты готовы ответить на ваши вопросы о трубопроводных системах
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton to="/request" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
              Запросить расчёт
            </LinkButton>
            <LinkButton to="/contacts" variant="outline" size="lg">
              Связаться с нами
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}