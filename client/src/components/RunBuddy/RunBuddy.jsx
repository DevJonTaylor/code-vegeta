import React from "react";

const RunBuddy = () => {
  return (
    <>
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
              chilled and unnerved, and angry with the Professor for taking me
              on such an errand and with myself for coming. I was too cold and
              too sleepy to be keenly observant, and not sleepy enough to betray
              my trust so altogether I had a dreary, miserable time.
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
              I'm baby banh mi gastropub affogato tattooed. Waistcoat hot
              chicken echo park raw denim next level banh mi etsy jean shorts
              XOXO. Kitsch direct trade franzen, succulents chartreuse bicycle
              rights gochujang messenger bag brooklyn man braid art party vinyl
              butcher. Irony gluten-free craft beer, blog small batch waistcoat
              humblebrag fixie pug. Cronut slow-carb gluten-free synth, vice DIY
              deep v man braid.
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
                <p>
                  Bi-Weekly checkins with your trainer will keep you focused.
                </p>
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi neque animi quo cupiditate commodi saepe culpa sed
                  itaque velit maiores optio dolorem excepturi aperiam dolores,
                  voluptatibus suscipit amet quis repellat!
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi neque animi quo cupiditate commodi saepe culpa sed
                  itaque velit maiores optio dolorem excepturi aperiam dolores,
                  voluptatibus suscipit amet quis repellat!
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi neque animi quo cupiditate commodi saepe culpa sed
                  itaque velit maiores optio dolorem excepturi aperiam dolores,
                  voluptatibus suscipit amet quis repellat!
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
      <style
        dangerouslySetInnerHTML={{
          __html: `:root {
  --primary-color: #fce138;
  --secondary-color: #024e76;
  --tertiary-color: #39a6b2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Helvetic, Aria, sans-serif;
  color: var(--tertiary-color);
}

/* HEADER / NAVBAR STYLES START */

header {
  padding: 20px 35px;
  background-color: var(--tertiary-color);
  background-image: url('https://laszlo-ratesic.github.io/run-buddy/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: 80%;
  background-attachment: fixed;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9999;
}

header h1 {
  font-weight: bold;
  font-size: 36px;
  color: var(--primary-color);
  margin: 0;
  text-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
}

header a {
  text-decoration: none;
  color: var(--primary-color);
}

header nav {
  margin: 7px 0;
}

header nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

header nav ul li a {
  padding: 10px 15px;
  font-weight: lighter;
  font-size: 1.55vw;
  text-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
}

header nav ul li a:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 15px;
  text-shadow: none;
}

/* HEADER / NAV STYLES END  */

/* FOOTER STYLES START */
footer {
  background-color: var(--primary-color);
  width: 100%;
  padding: 40px 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer h2 {
  color: var(--secondary-color);
  font-size: 30px;
  margin: 0;
}

/* EMOJI FIX */
footer h2 span {
  font-weight: lighter;
}
/* EMOJI FIX END */

footer div {
  line-height: 1.5;
  text-align: right;
}

footer a {
  color: var(--secondary-color);
}
/* FOOTER STYLES END */

/* STYLES ALL SECTION TAGS */
section {
  padding: 60px;
}

/* HERO STYLES */
.hero {
  background-image: url("https://laszlo-ratesic.github.io/run-buddy/assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: 80%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
}

.hero-cta {
  width: 35%;
  text-align: right;
  margin: 3.5%;
  color: #fff;
  font-size: 18px;
  line-height: 1.2;
}

.hero-cta h2 {
  font-style: italic;
  font-size: 55px;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.hero-form {
  color: var(--secondary-color);
  background-color: rgba(252, 226, 56, 0.8);
  padding: 20px;
  border: solid 3px var(--secondary-color);
  border-radius: 15px;
  width: 40%;
  margin: 3.5%;
}

.hero-form h3 {
  font-size: 24px;
  margin: 0;
}

.hero-form p {
  margin: 5px 0 15px 0;
}

.form-input {
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  display: block;
  padding: 7px 15px;
  font-size: 15px;
  color: var(--secondary-color);
  width: 100%;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.75);
}

.form-input:focus {
  background-color: rgba(255, 255, 255, 1);
  outline: none;
}

.hero-form label {
  margin: 0 5px;
}

.checkbox-wrapper input,
.radio-wrapper input {
  opacity: 0;
}

.checkbox-wrapper label,
.radio-wrapper label {
  position: relative;
  left: 10px;
  margin: 10px;
  line-height: 1.6;
}

.checkbox-wrapper label::before,
.radio-wrapper label::before {
  content: "";
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--secondary-color);
  position: absolute;
  top: -4px;
  left: -30px;
}

.radio-wrapper label::before {
  border-radius: 50%;
}

.radio-wrapper label::after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  background-image: radial-gradient(
    circle,
    var(--tertiary-color),
    var(--secondary-color)
  );
  position: absolute;
  left: -29px;
  top: -3px;
}

.checkbox-wrapper label::after {
  content: "";
  height: 6px;
  width: 14px;
  border-left: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  position: absolute;
  left: -26px;
  top: 1px;
  transform: rotate(-58deg);
}

.checkbox-wrapper input + label::after,
.radio-wrapper input + label::after {
  content: none;
}

.checkbox-wrapper input:checked + label::after,
.radio-wrapper input:checked + label::after {
  content: "";
}

.hero-form button {
  color: var(--primary-color);
  background-color: var(--secondary-color);
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
}

.hero-form button:hover {
  background-color: var(--tertiary-color);
}

/* END HERO STYLES */

/* SECTION TITLE STYLES */
.section-title {
  font-size: 48px;
  border-bottom: 3px solid;
  color: var(--secondary-color);
  padding-bottom: 20px;
  text-align: center;
  margin: 0 auto 35px auto;
  width: 50%;
}

.primary-border {
  border-color: var(--primary-color);
}

.secondary-border {
  border-color: var(--tertiary-color);
}
/* SECTION TITLE STYLES END */

/* WHAT WE DO */
.intro p {
  line-height: 1.7;
  color: var(--tertiary-color);
  width: 80%;
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
}
/* WHAT WE DO END */

/* WHAT YOU DO */
.steps {
  background-color: var(--primary-color);
}

.step {
  margin: 50px auto;
  padding-bottom: 50px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.step:not(:last-child) {
  border-bottom: 1px solid var(--tertiary-color);
}

.step h3 {
  color: var(--secondary-color);
  font-size: 46px;
  flex: 1 30%;
}

.step-info {
  flex: 2 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.step-img {
  flex: 1 12%;
  margin-right: 20px;
}

.step-img img {
  max-width: 100%;
}

.step-text {
  flex: 12;
}

.step-text p {
  color: var(--tertiary-color);
  font-size: 18px;
}

.step-text h4 {
  font-size: 26px;
  line-height: 1.5;
  color: var(--secondary-color);
}
/* WHAT YOU DO END */

/* MEET THE TRAINERS */
.trainers {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.trainer {
  margin: 20px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  flex: 1;
}

.trainer img {
  width: 100%;
}

.trainer-bio {
  padding: 25px;
  line-height: 1.3;
}

.trainer-bio h3 {
  font-size: 28px;
}

.trainer-bio h4 {
  font-weight: lighter;
  font-size: 22px;
  margin-bottom: 15px;
}

.trainer-bio p {
  font-size: 17px;
}
/* MEET THE TRAINERS END */

/* REACH OUT */
.contact {
  background-color: var(--secondary-color);
}

.contact h2 {
  color: var(--primary-color);
}

.contact-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.contact-info > * {
  flex: 1;
  margin: 15px;
}

.contact-info iframe {
  height: 400px;
}

.contact-info div {
  color: white;
}

.contact-info h3 {
  color: var(--primary-color);
  font-size: 32px;
}

.contact-info p,
.contact-info address {
  margin: 20px 0;
  line-height: 1.5;
  font-size: 16px;
  font-style: normal;
}

.contact-info a {
  color: var(--primary-color);
}

.contact-form input,
.contact-form textarea {
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  display: block;
  padding: 7px 15px;
  font-size: 16px;
  color: var(--secondary-color);
  width: 100%;
  margin-bottom: 15px;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.75);
}

.contact-form input:focus,
.contact-form textarea:focus {
  background-color: rgba(255, 255, 255, 1);
  outline: none;
}

.contact-form button {
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
}

.contact-form button:hover {
  color: var(--primary-color);
  background-color: var(--tertiary-color);
}

/* REACH OUT END */

/* UTILITIES */
.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.flex-row {
  display: flex;
}

/* MEDIA QUERY FOR SMALLER DESKTOP SCREENS AND SMALLER */
@media screen and (max-width: 980px) {
  header {
    padding-bottom: 0;
    justify-content: center;
    position: relative;
  }

  header h1 {
    width: 100%;
    text-align: center;
  }

  header nav ul {
    margin-top: 20px;
    width: 100%;
    justify-content: center;
  }

  header nav ul li a {
    font-size: 20px;
  }

  footer h2,
  footer div {
    text-align: center;
    width: 100%;
  }

  .hero-cta,
  .hero-form {
    width: 100%;
  }

  .hero-cta {
    text-align: center;
  }

  .section-title {
    width: 80%;
  }

  .trainer {
    flex: 0 70%;
  }

  .contact-info iframe {
    flex: 1 100%;
  }
}

/* MEDIA QUERY FOR TABLETS AND SMALLER */
@media screen and (max-width: 768px) {
  section {
    padding: 30px 15px;
  }

  .step h3 {
    flex: 1 100%;
    text-align: center;
  }

  .step-info {
    flex: 2 100%;
    text-align: center;
    justify-content: center;
  }

  .step-img {
    flex: 0 32%;
    margin-right: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .step-text {
    flex: 100%;
  }
}

/* MEDIA QUERY FOR MOBILE PHONES AND SMALLER */
@media screen and (max-width: 575px) {
  .hero-form button {
    width: 100%;
  }

  .section-title {
    width: 95%;
  }

  .intro p {
    width: 100%;
  }

  .trainer {
    flex: 0 100%;
  }

  .contact-info {
    text-align: center;
  }

  .contact-info > * {
    flex: 0 100%;
  }

  .contact-form {
    order: 3;
  }
}
`,
        }}
      />
    </>
  );
};

export default RunBuddy;
