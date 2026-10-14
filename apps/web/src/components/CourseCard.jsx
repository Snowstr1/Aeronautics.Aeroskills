import React from 'react';
import { Clock, BarChart3, ArrowRight } from 'lucide-react';

const CourseCard = ({ course, onView }) => (
  <article className="group h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden card-premium">
    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
      <img
        src={course.image}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className="absolute top-4 left-4 inline-flex items-center rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
        {course.category}
      </span>
      {course.isPlaceholder && (
        <span className="absolute top-4 right-4 inline-flex items-center rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
          Sample
        </span>
      )}
    </div>

    <div className="flex flex-col flex-grow p-6">
      <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-5 flex-grow">{course.description}</p>

      {(course.duration || course.level) && (
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-secondary mb-6">
          {course.duration && (
            <li className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="sr-only">Duration:</span>
              {course.duration}
            </li>
          )}
          {course.level && (
            <li className="inline-flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="sr-only">Level:</span>
              {course.level}
            </li>
          )}
        </ul>
      )}

      <button
        type="button"
        onClick={() => onView(course)}
        className="mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        View Course
        <span className="sr-only">: {course.title}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </div>
  </article>
);

export default CourseCard;
