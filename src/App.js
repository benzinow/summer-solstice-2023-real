import "./App.css";
import Header from "./components/Header";
import Help from "./components/Help";
import Rsvp from "./components/Rsvp";
import Email from "./images/email.svg";
import Phone from "./images/phone.svg";

function App() {
  return (
    <div className="App">
      <div className="background" />

      <div className="content">
        <header className="App-header">
          <Header />
          <div className="cards">
            <div className="card description" id="#description">
              <h3>The Longest Day</h3>
              <p>
                This Summer Solstice celebration is a happy gathering to honor
                the bountiful gifts of the earth and the mighty sun. As we come
                together on the longest day of the year, let's embrace a special
                ritual to celebrate life and nourishment, surrounded by good
                friends and the beauty of nature.
              </p>
              <p>
                The Summer Solstice, or midsummer, is when the sun is at its
                highest point in the sky. It represents abundance, growth, and
                the peak of vitality. Today, I invite you to join me in taking
                time to appreciate the richness that surrounds us. We're talking
                about delicious food and the meaningful relationships and pure
                joy that make life beautiful. Contribute to the feast by
                bringing a dish to share for the potluck.
              </p>
              <p>
                As the sun shines bright, let's rejoice in the blessings that
                nourish our bodies and souls. The feast before us will represent
                the plenty of nature's offerings and the wonderful flavors that
                delight our senses. Together, we'll enjoy juicy fruits,
                wholesome grains, a colorful variety of fresh vegetables, and
                meats—gifts from the earth herself. By sharing this meal, we
                strengthen our connections and feel grateful for the nourishment
                we receive.
              </p>
              <p>
                The Summer Solstice is about more than just food—it's a time to
                honor and connect with others. It's a moment to engage with
                life's simple indulgences and feel the sheer satisfaction of
                being alive. So, let's embrace affection and joy. Hugging,
                kissing, and expressions of happiness are encouraged as we
                herald summer's warmth and energy.
              </p>
              <p>
                Let's create a space filled with love, laughter, and fondness in
                the company of dear friends, loved ones, and intriguing
                strangers. We'll make memories, share stories, and engage in
                expressive conversations that strengthen our bonds. Together, we
                can create a special place where laughter, music, and dancing
                blend with the sun's warm energy.
              </p>
              <p>
                Join in as we observe the Summer Solstice—a day of joy and
                gratitude. Let's honor the earth, seize the sun's life-giving
                power, and relish in surplus in our lives. Together, we'll
                embody the spirit of midsummer, creating a harmonious mix of
                nourishment, friendship, and sheer pleasure in this special
                celebration of life.
              </p>
            </div>
            <div className="card wear">
              <h3>What to Wear</h3>
              <p>From 2pm - 8pm</p>
              <p>
                I encourage yellows, oranges, fiery reds, golds and sun
                symbology. Most importantly, wear what makes you feel
                comfortable, beautiful, and happy!
              </p>
              <p>From 8pm - 2am</p>
              <p>
                Afer 8pm the party will become clothing optional, this might be
                a good time to do an outfit swap or taking off everything!
              </p>
            </div>
            <div className="card activities">
              <h3>Activities to Expect</h3>
              <div className="flex">
                <ul>
                  <li>Fire</li>
                  <li>Yoga</li>
                  <li>Games</li>
                  <li>Poetry</li>
                  <li>Bubbles</li>
                </ul>
                <ul>
                  <li>Dancing</li>
                  <li>Singing</li>
                  <li>Feasting</li>

                  <li>Coloring</li>
                  <li>Cuddling</li>
                </ul>
                <ul>
                  <li>Storytelling</li>
                  <li>Socializing</li>
                  <li>Collaborative Art</li>
                  <li>Avacado Pit Carving</li>
                  <li>Vulnerability Activities</li>
                </ul>
              </div>
              <p>
                At 7pm there will be a non-theistic ritual for the psychological
                benefit of the creators and any willing participants. It is
                based on a desire for pleasure, meaning, artistic expression,
                community bonding, and to be witnessed.
              </p>
            </div>
            <div className="card rsvp">
              <Rsvp />
            </div>
            <div className="card contact">
              <h3>Contact Benzi</h3>
              <p>
                If you have questions or want to invite additional people you
                can contact me.
              </p>
              <div className="flex">
                <img
                  className="contact-icon"
                  src={Email}
                  alt="email envelope icon"
                ></img>
                <p>benzinow@gmail.com</p>
              </div>
              <div className="flex">
                <img
                  className="contact-icon"
                  src={Phone}
                  alt="phone icon"
                ></img>
                <p>501-984-2925</p>
              </div>
            </div>
            <div className="card addto">
              <div className="flex">
                <a
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Y2dxM2VkaG02a3M2NGI5Z2M0bzY4YjlrNjRybTRiYjE2a3A2Y2I5azZvcW1jYzlrNmRqMzRvaHA3NCBiZW56aW5vd0Bt&tmsrc=benzinow%40gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Add to Google Calendar</button>
                </a>
                <a
                  href="https://solworship.com/SummerSolstice-A_Ritual_of_Abundance.ics"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Add to Apple Calendar</button>
                </a>
              </div>
            </div>
            <Help />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
