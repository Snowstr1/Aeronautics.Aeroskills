import React from 'react';
import { Clock, ClipboardCheck, BookOpen, ArrowRight } from 'lucide-react';
import { getCourseById } from '@/data/trainingCatalog.js';

const ExamCard = ({ exam, onView }) => {
  const relatedCourse = exam.relatedCourse ? getCourseById(exam.relatedCourse) : null;

  return (
    <article className="group h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden card-premium">
      {exam.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={exam.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute top-4 left-4 inline-flex items-center rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            {exam.category}
          </span>
          {exam.isPlaceholder && (
            <span className="absolute top-4 right-4 inline-flex items-center rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              Sample
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col flex-grow p-6 border-t-4 border-t-primary">
        <h3 className="text-xl font-bold text-foreground mb-3">{exam.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-5 flex-grow">{exam.description}</p>

        <dl className="space-y-2.5 text-sm mb-6">
          {relatedCourse && (
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <dt className="sr-only">Related course</dt>
              <dd className="font-medium text-secondary">{relatedCourse.title}</dd>
            </div>
          )}
          {exam.duration && (
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <dt className="sr-only">Duration</dt>
              <dd className="font-medium text-secondary">{exam.duration}</dd>
            </div>
          )}
          {exam.format && (
            <div className="flex items-start gap-2">
              <ClipboardCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <dt className="sr-only">Format</dt>
              <dd className="font-medium text-secondary">{exam.format}</dd>
            </div>
          )}
        </dl>

        <button
          type="button"
          onClick={() => onView(exam)}
          className="mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border-2 border-primary text-primary font-semibold transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          View Exam
          <span className="sr-only">: {exam.title}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default ExamCard;
