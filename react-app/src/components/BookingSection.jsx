import React, { useState } from 'react';

/*
  BookingSection

  - Netlify: this form uses a plain HTML form so Netlify can capture submissions.
    Important attributes:
      - name="booking"  (form name used by Netlify)
      - data-netlify="true"
      - data-netlify-honeypot="bot-field" (simple honeypot)
      - <input type="hidden" name="form-name" value="booking" /> (required)

  - After deploy: to enable email notifications for this form, go to Netlify dashboard
    > Site settings → Forms → Notifications and add an email notification for the
    "booking" form (or use Integrations → Slack/Zapier for SMS). See comments below
    for a short Zapier → Twilio note.

  UX notes:
  - Uses HTML5 validation plus a small client-side check to give nicer inline errors.
  - The form posts to `/booking-success.html` for graceful fallback, but we intercept
    the submit in JS to show an inline success banner while still sending data to
    Netlify. With JS disabled the redirect will still work.
*/

const BookingSection = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const phonePattern = /^\+?[0-9\s()\-]{7,20}$/;

  function validate(form) {
    const e = {};
    const name = form.get('parentName')?.trim();
    const phone = form.get('phone')?.trim();
    const age = Number(form.get('childAge'));
    const service = form.get('service');
    const childAbility = form.get('childAbility');

    if (!name) e.parentName = 'Please enter parent or guardian name.';
    if (!phone) e.phone = 'Please enter a phone number.';
    else if (!phonePattern.test(phone)) e.phone = 'Enter a valid phone number (numbers, spaces, +, parentheses).';
    if (!age && age !== 0) e.childAge = 'Please enter your child\'s age.';
    else if (isNaN(age) || age < 4 || age > 18) e.childAge = 'Age must be a number between 4 and 18.';
    if (!service) e.service = 'Please choose a service preference.';
    if (!childAbility) e.childAbility = 'Please select your child\'s ability.';

    return e;
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const formEl = ev.target;
    const formData = new FormData(formEl);
    const e = validate(formData);

    if (Object.keys(e).length > 0) {
      setErrors(e);
      setIsSubmitting(false);
      setShowSuccess(false);
      // focus first invalid field
      const first = Object.keys(e)[0];
      const input = formEl.querySelector(`[name="${first}"]`);
      if (input) input.focus();
      return;
    }
    setErrors({});
    setSubmitError('');
    setShowSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error(`Netlify form submission failed: ${response.status}`);
      }

      formEl.reset();
      ['childAbility', 'service'].forEach((name) => {
        const field = formEl.querySelector(`[name="${name}"]`);
        if (field) field.value = '';
      });

      setShowSuccess(true);
      setSubmitError('');
    } catch (error) {
      console.error('Booking submission failed', error);
      setSubmitError('Something went wrong. Please try again or contact us directly.');
      setShowSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-section" id="book">
      <div className="container">
        <h2 className="section-heading text-center">Book a Session</h2>
        <p className="section-subtitle text-center">Tell us a few details and We will be in touch to confirm availability. We respect your privacy and won't share details with third parties.</p>

        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Netlify Ghost Form */}
          <form name="booking" netlify>
            <input type="text" name="parentName" />
            <input type="text" name="phone" />
            <input type="text" name="childAge" />
            <input type="text" name="childAbility" />
            <input type="text" name="service" />
            <input type="text" name="comments" />
          </form>
        </div>

        <span
          aria-hidden="true"
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: '<!-- Netlify booking form start -->' }}
        />

        <form
          name="booking"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/booking-success.html"
          className="booking-form"
          onSubmit={handleSubmit}
        >
          {/* Netlify required hidden input */}
          <input type="hidden" name="form-name" value="booking" />
          <input type="hidden" name="bot-field" />

          {showSuccess && (
            <div className="success-banner" role="status">
              <div className="success-content">
                <strong>Request received!</strong>
                <span>Thanks for booking. We'll confirm availability shortly.</span>
              </div>
              <button
                type="button"
                className="btn"
                aria-label="Dismiss success message"
                onClick={() => setShowSuccess(false)}
              >
                Dismiss
              </button>
            </div>
          )}

          {submitError && (
            <div className="form-error" role="alert" style={{ marginBottom: '12px' }}>
              {submitError}
            </div>
          )}

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="parentName">Parent Name</label>
              <input id="parentName" name="parentName" type="text" required />
              {errors.parentName && <div className="form-error">{errors.parentName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telephone Number</label>
              <input id="phone" name="phone" type="tel" required placeholder="e.g. +44 7482 768570" />
              {errors.phone && <div className="form-error">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="childAge">Child's Age</label>
              <input id="childAge" name="childAge" type="number" min="4" max="18" required />
              {errors.childAge && <div className="form-error">{errors.childAge}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="childAbility">Child's Ability (Low, Medium, High)</label>
              <select id="childAbility" name="childAbility" required defaultValue="">
                <option value="" disabled>Choose ability...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errors.childAbility && <div className="form-error">{errors.childAbility}</div>}
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
              {errors.service && <div className="form-error">{errors.service}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="comments">Additional Comments</label>
              <textarea id="comments" name="comments" rows={4} placeholder="Any additional information (injuries, preferences, etc.)" />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Request Booking'}
              {isSubmitting && <span className="loading-spinner" aria-hidden="true" />}
            </button>
            <p className="form-help" aria-live="polite">
              {isSubmitting
                ? 'Submitting your request — please keep the tab open.'
                : 'After submission we will be in touch to confirm availability.'}
            </p>
          </div>

        </form>

        <span
          aria-hidden="true"
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: '<!-- Netlify booking form end -->' }}
        />

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
