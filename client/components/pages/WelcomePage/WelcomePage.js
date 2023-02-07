import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Button from 'react-bulma-companion/lib/Button';
import styles from './styles.module.css';
import RoverLeash from './rover-leash.png';
import RoverLink from './rover-link.png';
import RoverHelp from './rover-help.png';
import RoverPaw from './rover-paw.png';

export default function WelcomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, [dispatch, user]);

  return (
    <div className={styles.root}>
      <Section>
        <Container fluid>
          <Title size="3">501(c)(3) Animal Rescue & Dog Trainer</Title>
          <iframe
            width="280"
            height="158"
            src="https://www.youtube.com/embed/Ozfv8XMep1U"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <Title size="4">Mission Statement</Title>
          Handover Rover is a no-kill rescue focusing efforts on providing
          MASSIVE amounts of free content for dog owners. We do not want to
          clean up your mess, we want you to get better and train your dog. Free
          content on YouTube by searching for `Koco Garcia`, or click here:
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <img
            src={RoverLink}
            width="75px"
            height="75px"
            alt="Oh no!"
          />
          <br />
          <iframe
            width="280"
            height="158"
            src="https://www.youtube.com/embed/videoseries?list=PL7WQUkLqUG1nNRK-3WWLu1Z0o-aqoSVu1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <Title size="3">Free Training Videos</Title>
          Rescued a dog? First few months are delightful until they aren`t. What
          went wrong? Where did you go wrong? You gave the dog everything, and
          can`t figure out why they are acting aggressive all of a sudden.
          <br />
          Follow along in this video as I detail the steps necessary to undo the
          bad behaviors. More than anything, YOU have to step up as a leader.
          <br />
          There isn`t anything wrong with your dog; this is the result of you
          giving your dog everything and forgetting that just like us, dogs need
          to fulfill a purpose. They need jobs to do. Interested in adopting or
          supporting my cause?
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container>
          <img
            src={RoverLeash}
            width="75px"
            height="75px"
            alt="Oh no!"
          />
          <br />
          <iframe
            width="280"
            height="158"
            src="https://www.youtube.com/embed/vDWtHFvS1Do"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <Title size="3">Difficult Dogs</Title>
          This dog was far too dominant and pushy for a prong collar. He blew
          right thru it repeatedly, even with foundation, structure, training,
          feedback, handfeeding, I couldn`t seem to have any real break through,
          until I realized I needed to get control of his WHOLE head, not just
          his neck. If you need help with the foundation, go here:
          LeashFoundation.com
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <img
            src={RoverPaw}
            width="75px"
            height="75px"
            alt="Oh no!"
          />
          <br />
          <iframe
            width="280"
            height="158"
            src="https://www.youtube.com/embed/Z10Cu2fpVaM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <Title size="3">Rescue Videos</Title>
          This story is not over, Cash is still at my Vet undergoing treatment.
          All of this was 100% avoidable *if* his owners simply would have fed
          him. Cash was infested with ticks. Thousands of ticks. At my house, we
          tweezed off a few hundred, and a few hundred more came off in the
          bath. My vet said, `Koco, there were no less than 400 ticks in his
          kennel when we went to take him out?!` Recovery will be slow, and we
          are working on day 6 at my vet!! If you are able to contribute to
          saving Cash`s life, I would be eternally grateful!! Subscribe to this
          channel, and I`ll continue to post Cash`s journey, as well as the many
          many other rescues I have coming into my care in the next few weeks!
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container>
          <img
            src={RoverHelp}
            width="75px"
            height="75px"
            alt="Oh no!"
          />
          <br />
          <iframe
            width="280"
            height="158"
            src="https://www.youtube.com/embed/ynzU4KLEhjE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <Title size="3">Leash Class</Title>
          Need help? Sign up here.
          <br />
          https://www.leashfoundation.com
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <Title size="3">Available Dogs</Title>
          Check out our available dogs and apply to adopt.
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <Title size="3">Sign Up for the Leash Class</Title>
          Learn leash foundation in a five-part video series. Laboris ea fugiat incididunt adipisicing amet offic.
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <Title size="3">Price List for Training</Title>
          Labore commodo ipsum eiusmod aliquip elit ex id exercitation ullamco
          id do laboris excepteur. Consequat non duis magna id aliqua aliquip sint consequat nulla nulla.
          <br />
          <Button static>Static</Button>
        </Container>
      </Section>
    </div>
  );
}
