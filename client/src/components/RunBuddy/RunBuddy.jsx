import React from "react";

const RunBuddy = () => {
  return (
    <div className="body">
      <header>
        <h1>
          <a href="/">RUN BUDDY</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#what-we-do">What We Do</a>
            </li>
            <li>
              <a href="#what-you-do">What You Do</a>
            </li>
            <li>
              <a href="#your-trainers">Your Trainers</a>
            </li>
            <li>
              <a href="#reach-out">Reach Out</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-cta">
          <h2>Start Building Habits.</h2>
          <p>
            It was a lonely vigil. Just after I had taken my place I heard a
            distant clock strike twelve, and in time came one and two. I was
            chilled and unnerved, and angry with the Professor for taking me on
            such an errand and with myself for coming. I was too cold and too
            sleepy to be keenly observant, and not sleepy enough to betray my
            trust so altogether I had a dreary, miserable time.
          </p>
        </div>
        <div className="hero-form">
          <h3>Get Started Today</h3>
          <p>
            Fill out this form and one of our trainers will schedule a consult
          </p>
          <form>
            <label htmlFor="name">Enter full name:</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              className="form-input"
            />
            <label htmlFor="email">Enter email address:</label>
            <input
              type="email"
              placeholder="email@address.com"
              name="email"
              id="email"
              className="form-input"
            />
            <label htmlFor="phone">Enter phone number:</label>
            <input
              type="tel"
              placeholder="(555) 555-5555"
              name="phone"
              id="phone"
              className="form-input"
            />
            <p>
              Have you worked out with a trainer before?
              <span className="radio-wrapper">
                <input type="radio" name="trainer-confirm" id="trainer-yes" />
                <label htmlFor="trainer-yes">Yes</label>
              </span>
              <span className="radio-wrapper">
                <input type="radio" name="trainer-confirm" id="trainer-no" />
                <label htmlFor="trainer-no">No</label>
              </span>
            </p>
            <p>
              <span className="checkbox-wrapper">
                <input type="checkbox" name="age-confirm" id="age-confirm" />
                <label htmlFor="age-confirm">
                  I acknowledge that I am at least 18 years of age
                </label>
              </span>
            </p>
            <button type="submit" className="submit-button">
              Get Running!
            </button>
          </form>
        </div>
      </section>

      <section id="what-we-do" className="intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">What We Do</h2>
        </div>
        <div className="flex-row">
          <p>
            I'm baby banh mi gastropub affogato tattooed. Waistcoat hot chicken
            echo park raw denim next level banh mi etsy jean shorts XOXO. Kitsch
            direct trade franzen, succulents chartreuse bicycle rights gochujang
            messenger bag brooklyn man braid art party vinyl butcher. Irony
            gluten-free craft beer, blog small batch waistcoat humblebrag fixie
            pug. Cronut slow-carb gluten-free synth, vice DIY deep v man braid.
          </p>
        </div>
      </section>

      <section id="what-you-do" className="steps">
        <div className="flex-row">
          <h2 className="section-title secondary-border">What You Do</h2>
        </div>
        <div className="step">
          <h3>Step 1.</h3>
          <div className="step-info">
            <div className="step-img">
              <img
                src="https://laszlo-ratesic.github.io/run-buddy/assets/images/step-1.svg"
                alt=""
              />
            </div>
            <div className="step-text">
              <h4>Fill Out The Form Above</h4>
              <p>You're already here, so why not?</p>
            </div>
          </div>
        </div>
        <div className="step">
          <h3>Step 2.</h3>
          <div className="step-info">
            <div className="step-img">
              <img
                src="https://laszlo-ratesic.github.io/run-buddy/assets/images/step-2.svg"
                alt=""
              />
            </div>
            <div className="step-text">
              <h4>Consult With One Of Our Trainers</h4>
              <p>
                Are you here to build muscles, lose weight, or just feel good?
              </p>
            </div>
          </div>
        </div>
        <div className="step">
          <h3>Step 3.</h3>
          <div className="step-info">
            <div className="step-img">
              <img
                src="https://laszlo-ratesic.github.io/run-buddy/assets/images/step-3.svg"
                alt=""
              />
            </div>
            <div className="step-text">
              <h4>Get Running</h4>
              <p>
                Hit the ground running (literally) once your trainer lays out
                your plan.
              </p>
            </div>
          </div>
        </div>
        <div className="step">
          <h3>Step 4.</h3>
          <div className="step-info">
            <div className="step-img">
              <img
                src="https://laszlo-ratesic.github.io/run-buddy/assets/images/step-4.svg"
                alt=""
              />
            </div>
            <div className="step-text">
              <h4>See Results</h4>
              <p>Bi-Weekly checkins with your trainer will keep you focused.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="your-trainers">
        <div className="flex-row">
          <h2 className="section-title primary-border">Meet The Trainers</h2>
        </div>

        <div className="trainers">
          <article className="trainer">
            <img
              src="https://laszlo-ratesic.github.io/run-buddy/assets/images/trainer-1.jpg"
              alt="Arron Stephens in his workout clothes, ready to pump iron"
            />
            <div className="trainer-bio">
              <h3 className="trainer-name">Arron Stephens</h3>
              <h4 className="trainer-role">Speed / Strength</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

          <article className="trainer">
            <img
              src="https://laszlo-ratesic.github.io/run-buddy/assets/images/trainer-2.jpg"
              alt="Joanna Gill cooling off after a workout"
            />
            <div className="trainer-bio">
              <h3 className="trainer-name">Joanna Gill</h3>
              <h4 className="trainer-role">Endurance</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

          <article className="trainer">
            <img
              src="https://laszlo-ratesic.github.io/run-buddy/assets/images/trainer-3.jpg"
              alt="Harry Smith wearing a headband and lifting comically small pink weights"
            />
            <div className="trainer-bio">
              <h3 className="trainer-name">Harry "the Headband" Smith</h3>
              <h4 className="trainer-role">Strength</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="reach-out" className="contact">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Reach Out</h2>
        </div>

        <div className="contact-info">
          <div>
            <h3>Run Buddy</h3>
            <p>
              Any questions or concerns before signing up?
              <br />
              Let us know and we'll be happy to talk to you!
            </p>

            <address>
              55 Main Street
              <br />
              Some Town, Ca
              <br />
              12345
              <br />
              P:
              <a href="tel:555.786.2839">555.RUN.BUDZ (555.786.2839)</a>
              <br />
              E:
              <a href="mailto://info@runbuddy.io">info@runbuddy.io</a>
            </address>
          </div>

          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <label htmlFor="contact-name">Your Name</label>
              <input type="text" id="contact-name" placeholder="Your Name" />

              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13847.049934074454!2d-95.50111957031744!3d29.813405529285678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c4334767fae7%3A0xf933a69e9f106fd3!2s2200%20Ridgecrest%20Dr%2C%20Houston%2C%20TX%2077055!5e0!3m2!1sen!2sus!4v1639239784796!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer>
        <h2>
          <span>❤️</span>
          Made with love by Run Buddy.
        </h2>
        <div>
          <a href="./privacy-policy.html">Read Our Privacy Policy</a>
          <br />
          &copy; 2019 Run Buddy, Inc.
        </div>
      </footer>
    </div>
  );
};

export default RunBuddy;
