import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, X, RotateCcw, SearchX, Info, GraduationCap, ClipboardCheck, Clock, BarChart3, BookOpen, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import CourseCard from '@/components/CourseCard.jsx';
import ExamCard from '@/components/ExamCard.jsx';
import { TRAINING_CATEGORIES, courses, exams, getCourseById } from '@/data/trainingCatalog.js';

const SECTION_IDS = ['courses', 'exams'];

const TYPE_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'courses', label: 'Courses' },
  { value: 'exams', label: 'Exams' },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Scrolls to a section and moves focus to its heading so keyboard and
// screen-reader users land in the same place as sighted users.
const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  target.querySelector('[data-section-heading]')?.focus({ preventScroll: true });
};

const searchableText = (item) =>
  [
    item.title,
    item.description,
    item.category,
    item.level,
    item.format,
    item.duration,
    item.relatedCourse && getCourseById(item.relatedCourse)?.title,
    ...(item.keywords || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

const matchesFilters = (item, tokens, category) =>
  (category === 'all' || item.category === category) &&
  tokens.every((token) => searchableText(item).includes(token));

const pluralize = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

const filterButtonClass = (active) =>
  `px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
    active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-foreground hover:bg-background'
  }`;

const chipClass = (active) =>
  `shrink-0 px-3.5 py-1.5 rounded-full border text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
    active
      ? 'bg-primary border-primary text-primary-foreground'
      : 'bg-background border-border text-foreground hover:border-primary/40 hover:text-primary'
  }`;

const SectionEmptyState = ({ label, onReset }) => (
  <div className="flex flex-col items-center text-center py-14 px-6 rounded-2xl border border-dashed border-border bg-background">
    <SearchX className="w-10 h-10 text-secondary mb-4" aria-hidden="true" />
    <p className="text-lg font-semibold text-foreground mb-2">No {label} match your search</p>
    <p className="text-muted-foreground mb-6">Try a different keyword or category, or clear your filters to see everything.</p>
    <button
      type="button"
      onClick={onReset}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <RotateCcw className="w-4 h-4" aria-hidden="true" />
      Reset search and filters
    </button>
  </div>
);

const CoursesExamsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  // Deep links (/training#courses, /training#exams) from the header dropdown,
  // direct visits and refreshes. location.key re-runs this when the same
  // hash is selected again.
  useEffect(() => {
    const id = location.hash.slice(1);
    if (!SECTION_IDS.includes(id)) return;
    // Make sure the requested section is not hidden by the type filter.
    setTypeFilter((current) => (current === 'all' || current === id ? current : 'all'));
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => scrollToSection(id));
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.key]);

  const tokens = useMemo(() => query.trim().toLowerCase().split(/\s+/).filter(Boolean), [query]);

  const filteredCourses = useMemo(
    () => courses.filter((course) => matchesFilters(course, tokens, category)),
    [tokens, category]
  );
  const filteredExams = useMemo(
    () => exams.filter((exam) => matchesFilters(exam, tokens, category)),
    [tokens, category]
  );

  const showCourses = typeFilter !== 'exams';
  const showExams = typeFilter !== 'courses';
  const visibleCount = (showCourses ? filteredCourses.length : 0) + (showExams ? filteredExams.length : 0);
  const isFiltered = tokens.length > 0 || typeFilter !== 'all' || category !== 'all';
  const hasPlaceholders = [...courses, ...exams].some((item) => item.isPlaceholder);

  const resetFilters = () => {
    setQuery('');
    setTypeFilter('all');
    setCategory('all');
  };

  const goToSection = (id) => {
    navigate({ hash: id }, { replace: true });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    scrollToSection('catalog');
  };

  const resultsSummary = isFiltered
    ? visibleCount === 0
      ? `No results${tokens.length ? ` for “${query.trim()}”` : ''}`
      : `Showing ${[
          showCourses && pluralize(filteredCourses.length, 'course'),
          showExams && pluralize(filteredExams.length, 'exam'),
        ]
          .filter(Boolean)
          .join(' and ')}${tokens.length ? ` for “${query.trim()}”` : ''}`
    : `${pluralize(courses.length, 'course')} and ${pluralize(exams.length, 'exam')} available`;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const selectedIsExam = selected ? exams.includes(selected) : false;
  const selectedRelatedCourse = selected?.relatedCourse ? getCourseById(selected.relatedCourse) : null;

  return (
    <>
      <Helmet>
        <title>Courses & Exams | Aeronautics LLC</title>
        <meta
          name="description"
          content="Explore aviation training courses and examinations for pilots, cabin crew, ground handling staff and aviation professionals."
        />
      </Helmet>

      <main className="bg-background min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center border-b-8 border-secondary overflow-hidden hero-fixed-clip">
          <img
            src="/images/backgrounds/cessna-runway-mountains.webp"
            alt=""
            className="hero-fixed-media object-cover"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" aria-hidden="true"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent mb-5 text-shadow-hero">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
                Courses & Exams
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-shadow-hero">
                Explore Our Top-Rated Courses
              </h1>
              <div className="w-24 h-1.5 bg-accent rounded-full mx-auto mt-7 mb-6 shadow-sm"></div>
              <p className="text-lg md:text-xl text-white/95 font-medium leading-relaxed mx-auto text-shadow-hero">
                Discover industry-relevant aviation courses and examinations designed to develop your skills, advance your career, and meet professional aviation standards.
              </p>

              <form role="search" onSubmit={handleSearchSubmit} className="mt-10 max-w-2xl mx-auto">
                <label htmlFor="catalog-search" className="sr-only">
                  Search courses and exams
                </label>
                <div className="relative flex items-center bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 focus-within:ring-4 focus-within:ring-accent/60 transition-shadow">
                  <Search className="absolute left-5 w-5 h-5 text-secondary pointer-events-none" aria-hidden="true" />
                  <input
                    id="catalog-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search courses and exams..."
                    autoComplete="off"
                    aria-describedby="catalog-results-summary"
                    className="w-full h-14 sm:h-16 pl-14 pr-28 sm:pr-36 bg-transparent rounded-2xl text-base sm:text-lg text-foreground placeholder:text-muted-foreground outline-none [&::-webkit-search-cancel-button]:hidden"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      className="absolute right-[5.5rem] sm:right-[7.5rem] p-1.5 rounded-full text-secondary hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="absolute right-2 h-10 sm:h-12 px-4 sm:px-6 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => goToSection('courses')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl hover:brightness-110 transition-all shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                >
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  Explore Courses
                </button>
                <button
                  type="button"
                  onClick={() => goToSection('exams')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/80 text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                >
                  <ClipboardCheck className="w-5 h-5" aria-hidden="true" />
                  Browse Exams
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section id="catalog" aria-label="Filter courses and exams" className="bg-muted/60 border-b border-border scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div role="group" aria-label="Show" className="inline-flex self-start p-1 rounded-xl bg-muted border border-border">
                {TYPE_FILTERS.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={typeFilter === filter.value}
                    onClick={() => setTypeFilter(filter.value)}
                    className={filterButtonClass(typeFilter === filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <p id="catalog-results-summary" aria-live="polite" className="text-sm font-medium text-secondary">
                  {resultsSummary}
                </p>
                {isFiltered && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    Reset filters
                  </button>
                )}
              </div>
            </div>

            <div role="group" aria-label="Category" className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
              <button type="button" aria-pressed={category === 'all'} onClick={() => setCategory('all')} className={chipClass(category === 'all')}>
                All categories
              </button>
              {TRAINING_CATEGORIES.map((name) => (
                <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)} className={chipClass(category === name)}>
                  {name}
                </button>
              ))}
            </div>

            {hasPlaceholders && (
              <p className="flex items-start gap-2 text-sm text-muted-foreground max-w-none">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-secondary" aria-hidden="true" />
                Listings marked “Sample” are illustrative placeholders. Final course and examination details will be confirmed on enquiry.
              </p>
            )}
          </div>
        </section>

        {/* COURSES SECTION */}
        {showCourses && (
          <section id="courses" aria-labelledby="courses-heading" className="py-20 lg:py-24 bg-background scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <h2
                  id="courses-heading"
                  data-section-heading
                  tabIndex={-1}
                  className="text-3xl md:text-4xl font-bold text-foreground heading-underline outline-none"
                >
                  Explore Our Courses
                </h2>
                <p className="text-lg text-muted-foreground mt-8">
                  Build your aviation expertise with training programs designed for aspiring professionals and experienced industry personnel.
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course) => (
                    <li key={course.id}>
                      <CourseCard course={course} onView={setSelected} />
                    </li>
                  ))}
                </ul>
              ) : (
                <SectionEmptyState label="courses" onReset={resetFilters} />
              )}
            </div>
          </section>
        )}

        {/* EXAMINATIONS SECTION */}
        {showExams && (
          <section id="exams" aria-labelledby="exams-heading" className="py-20 lg:py-24 bg-[hsl(var(--audit-light-blue))] border-t border-border scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <h2
                  id="exams-heading"
                  data-section-heading
                  tabIndex={-1}
                  className="text-3xl md:text-4xl font-bold text-foreground heading-underline outline-none"
                >
                  Aviation Examinations
                </h2>
                <p className="text-lg text-muted-foreground mt-8">
                  Prepare for aviation examinations with resources and assessments designed to support your professional development.
                </p>
              </div>

              {filteredExams.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredExams.map((exam) => (
                    <li key={exam.id}>
                      <ExamCard exam={exam} onView={setSelected} />
                    </li>
                  ))}
                </ul>
              ) : (
                <SectionEmptyState label="exams" onReset={resetFilters} />
              )}
            </div>
          </section>
        )}

        {/* CONTACT CTA */}
        <section className="py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Looking for a specific program?</h2>
              <p className="text-white/85 text-lg">
                Tell us about your training needs and our team will help you find the right course or examination.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl hover:brightness-110 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      {/* DETAIL DIALOG */}
      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-w-lg rounded-2xl sm:rounded-2xl">
            <DialogHeader className="text-left sm:text-left">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {selectedIsExam ? 'Exam' : 'Course'} · {selected.category}
                </span>
                {selected.isPlaceholder && (
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Sample
                  </span>
                )}
              </div>
              <DialogTitle className="text-2xl font-bold text-foreground pr-6">{selected.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                {selected.description}
              </DialogDescription>
            </DialogHeader>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-muted/60 p-4 text-sm">
              {selected.duration && (
                <div>
                  <dt className="flex items-center gap-1.5 font-semibold text-foreground"><Clock className="w-4 h-4 text-accent" aria-hidden="true" />Duration</dt>
                  <dd className="text-secondary mt-1">{selected.duration}</dd>
                </div>
              )}
              {selected.level && (
                <div>
                  <dt className="flex items-center gap-1.5 font-semibold text-foreground"><BarChart3 className="w-4 h-4 text-accent" aria-hidden="true" />Level</dt>
                  <dd className="text-secondary mt-1">{selected.level}</dd>
                </div>
              )}
              {selected.format && (
                <div>
                  <dt className="flex items-center gap-1.5 font-semibold text-foreground"><ClipboardCheck className="w-4 h-4 text-accent" aria-hidden="true" />Format</dt>
                  <dd className="text-secondary mt-1">{selected.format}</dd>
                </div>
              )}
              {selectedRelatedCourse && (
                <div>
                  <dt className="flex items-center gap-1.5 font-semibold text-foreground"><BookOpen className="w-4 h-4 text-accent" aria-hidden="true" />Related course</dt>
                  <dd className="text-secondary mt-1">{selectedRelatedCourse.title}</dd>
                </div>
              )}
            </dl>

            {selected.isPlaceholder && (
              <p className="text-sm text-muted-foreground">
                This is a sample listing. Schedules, fees and requirements will be confirmed on enquiry.
              </p>
            )}

            <DialogFooter className="gap-3 sm:gap-2">
              <DialogClose asChild>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl border border-border font-semibold text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Close
                </button>
              </DialogClose>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Enquire about this {selectedIsExam ? 'exam' : 'course'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default CoursesExamsPage;
