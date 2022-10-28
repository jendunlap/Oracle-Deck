import { useNavigate } from 'react-router-dom'

let navigate = useNavigate

const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutLeft">
          <img
            className="aboutImage"
            src="https://i.imgur.com/fnc5tFO.png"
          ></img>
        </div>
        <div className="aboutRight">
          <div className="aboutKeywords">
            <div className="moons">
              <img src="https://i.imgur.com/1FQFvDq.jpeg" />
              <img src="https://i.imgur.com/yMYW27q.jpg" />
            </div>
            <h5 className="magic">MAY YOU FIND THE MAGIC YOU SEEK</h5>
            <h5 className="created">created by erin alise borzak</h5>
          </div>
          <div className="aboutDescription">
            <h5>
              Inspired by the beauty of the natural world around us, The Hollow
              Valley Deck of Symbols is an oracle deck that offers us the
              opportunity to see meaning in the prevalent symbolism that the
              universe presents to us. Once we begin to familiarize ourselves
              with the cards, it becomes easier to notice when symbols come to
              us as messages. There is no correct or incorrect way to use this
              deck. You may wish to pull a card daily for guidance, and watch
              for that symbol to present itself phsycially as you move through
              the day. You can also use this deck for more in-depth spreads and
              reflections, similar to any other oracle or tarot deck. The more
              you reflect on the cards, their meanings, and their symbology, the
              more open you will be to acknowledging the power of these symbols
              in your life. You will become more conscious of the universe
              placing them in your path as a reminder of the deep wisdom you
              hold within you. <br></br>
              <br></br>Symbolism creates our stories and guides us through them.
              This deck connects us to something greater than ourselves - a
              power that comes from history, ancestry, and the tales passed down
              by generations of people across the world. The archetypal symbols
              in this deck are pulled from a vast range of symbols that saturate
              the art, literature, and mythology from the entirety of human
              existence. The beauty of symbolism is that it’s a language we
              already know - symbolism is woven into the fabric of our lives
              already. Noticing the magical thread is astoundingly easy if you
              are actively looking for it. No matter where you sit now, one of
              the symbols from these cards is calling to you. See them as allies
              - guides on the journey to deeper understanding of ourselves and
              the nature of humanity. Sometimes they bring us great news: that
              we are heading in the right direction. Sometimes, they illuminate
              harmful stories we are telling ourselves, giving us the
              opportunity to release them. Let the expansiveness of these
              symbols remind you that you are not alone. This deck is for
              finding magic in the everyday, in the simplicity and simultaneous
              vastness of our lives.{' '}
            </h5>
          </div>
          <div className="cardSymbols">
            <div className="symbolImage">
              <div className="imgageWrapper">
                <img
                  src="https://i.imgur.com/leApeWR.jpeg"
                  alt="purchase"
                ></img>
              </div>
              <div className="infoWrapper">
                <a
                  className="symbolName"
                  target="_blank"
                  href="https://www.hollowvalley.com/shop/edxf00rqom69eej4bxunpzrk12r0rc"
                >
                  PURCHASE
                </a>
                <p className="symbolsList">
                  your own<br></br>deck
                </p>
              </div>
            </div>
            <div className="symbolImage">
              <div className="imgageWrapper">
                <img
                  src="https://i.imgur.com/GAXRdJa.jpg"
                  alt="instagram"
                ></img>
              </div>
              <div className="infoWrapper">
                <a
                  className="symbolName"
                  target="_blank"
                  href="https://www.instagram.com/thehollowvalley/"
                >
                  INSTAGRAM
                </a>
                <p className="symbolsList">
                  erin's<br></br>IG
                </p>
              </div>
            </div>
            <div className="symbolImage">
              <div className="imgageWrapper">
                <img src="https://i.imgur.com/eB45qmZ.jpeg" alt="website"></img>
              </div>
              <div className="infoWrapper">
                <a
                  className="symbolName"
                  target="_blank"
                  href="https://www.erinalise.com/"
                >
                  WEBSITE
                </a>
                <p className="symbolsList">
                  see more<br></br>work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="backButton" onClick={() => navigate('/')}>
        BACK
      </button>
    </>
  )
}

export default About
