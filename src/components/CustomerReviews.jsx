import React from "react";
import { reviewsData } from "../data/reviewsData";
import { Star, ShieldCheck, MapPin, MessageSquareQuote, Info } from "lucide-react";

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-200 text-coral text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight">
            What Drivers Say About Puncture Patrol
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-muted leading-relaxed">
            From late-night motorway blowouts to early morning driveway punctures, here is how our Scottish mobile team delivers fast peace of mind.
          </p>

          {/* Honest Transparency Label */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-50 text-navy-800 text-xs font-semibold border border-navy-200">
            <Info className="w-4 h-4 text-coral flex-shrink-0" />
            <span>Illustrative placeholder customer reviews representing typical Scottish roadside scenarios.</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-surface-light rounded-2xl p-6 border-2 border-gray-200 hover:border-coral transition-all duration-300 shadow-sm hover:shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-coral text-coral"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-coral-100 text-coral">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-surface-muted leading-relaxed italic mb-6">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-gray-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-navy-800">
                      {review.name}
                    </h4>
                    <div className="text-xs text-surface-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-coral" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-navy-800 bg-white px-2 py-1 rounded border border-gray-200 block">
                      {review.vehicle}
                    </span>
                    <span className="text-[10px] text-surface-muted mt-0.5 block">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust summary footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-surface-muted">
            <ShieldCheck className="w-4 h-4 text-coral" />
            <span>Committed to prompt, courteous service and transparent pricing across all Scottish callouts.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

