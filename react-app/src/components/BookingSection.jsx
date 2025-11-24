import React from 'react';

/*
  BookingSection

  - Netlify: this form uses a plain HTML form so Netlify can capture submissions.
    Important attributes:
      - name="booking"  (form name used by Netlify)
      - data-netlify="true"
      - data-netlify-honeypot="bot-field" (simple honeypot)
      - <input type="hidden" name="form-name" value="booking" /> (required)

  - After deploy: configure notifications via Netlify dashboard → Forms → "booking"
    → Notifications (email, Slack, etc.). This is where confirmation emails/SMS are
    turned on for each form submission.
*/

const BookingSection = () => {
  return (
    <section className="booking-section" id="book">
      <div className="container">
        <h2 className="section-heading text-center">Book a Session</h2>
        <p className="section-subtitle text-center">Tell us a few details and We will be in touch to confirm availability. We respect your privacy and won't share details with third parties.</p>

        <form
          name="booking"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/booking-success.html"
          className="booking-form"
        >
          <input type="hidden" name="form-name" value="booking" />
          <p className="hidden" style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="parentName">Parent Name</label>
              <input id="parentName" name="parentName" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Telephone Number</label>
              <input id="phoneNumber" name="phoneNumber" type="tel" required placeholder="e.g. +44 7482 768570" />
            </div>

            <div className="form-group">
              <label htmlFor="childAge">Child's Age</label>
              <input id="childAge" name="childAge" type="number" min="4" max="18" required />
            </div>

            <div className="form-group">
              <label htmlFor="childAbility">Child's Ability (Low, Medium, High)</label>
              <select id="childAbility" name="childAbility" required defaultValue="">
                <option value="" disabled>Choose ability...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>Choose a service...</option>
                <option value="1-to-1 coaching">1-To-1 Coaching</option>
                <option value="coached matches">Coached Matches</option>
                <option value="group sessions">Group Sessions</option>
                <option value="team training">Team Training</option>
                <option value="scouting report">Scouting Report</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="additionalComments">Additional Comments</label>
              <textarea id="additionalComments" name="additionalComments" rows={4} placeholder="Any additional information (injuries, preferences, etc.)" />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Request Booking
            </button>
            <p className="form-help" aria-live="polite">
              After submission we will be in touch to confirm availability.
            </p>
          </div>

        </form>

        <div className="booking-footnote">
          <small>
            By submitting you agree to our privacy policy.
          </small>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
