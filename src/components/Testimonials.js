import { React, useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">Testimonials</div>
        <div className="columns pt-0 pr-4 pl-4 ">
          <div className="column mt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              &apos;After years of playing ping pong with solicitors, we were
              getting nowhere and I am so relieved that we heard about
              mediation. Your skill in taking the heat out of our communication
              was exceptional and we were finally able to focus on what was
              important &mdash; our children&apos;s future. My ex-wife and I are
              now both on the same page and the Parenting Plan you helped us
              build has been invaluable.&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr B, Wimbledon</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;I was amazed you persuaded (my ex) to come and I think he
              was secretly disappointed when it ended!&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Mrs S, Fulham</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;Kate, I am very grateful for all the efforts and energy that
              you have invested in our mediation, I greatly appreciate how you
              tried to find a common ground.&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr I, Hampton</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;Mediation has given me the confidence and financial
              stability to focus on setting up my business and moving on with my
              life. Thank you for your patience and for showing us we could find
              a way through our financial mess.&apos;
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Ms H, Putney</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;I appreciate how sensitively you talked to my children as
              they felt you really listened to them. Thank-you Kate.&apos;{' '}
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr P, Clapham</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;I wanted to say a big thank you for the meeting on Friday,
              as you are aware I was really anxious and nervous about doing it
              but you and Jules both made it very easy for me. So a big thank
              you again.&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Ms S, Tooting</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;I am very grateful to you for getting us this far and
              supporting us through the legal complexities of the divorce
              process; without the support of mediation, I don&apos;t think
              coming to an agreement would have been so straightforward - thank
              you&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Mrs H, Kent</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;Many thanks Kathleen once again for all your help and
              guidance with mediating between us.&apos;
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr C, Fulham</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;Thank you again for your assistance during our difficult
              situation at present&apos;
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Ms T, Harrow</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;Thank you so much Kathleen for all your help.&apos;
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr P, Hammersmith</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;I really do want to thank you all for everything you have
              done and if it is possible to pass on a message to Kathleen of
              thanks, then please do so, she was excellent.&apos;
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Ms C, Putney</p>
                </i>
              </small>
            </p>
            <br />
            <p>
              &apos;Dear Kathleen, Thank you for your support throughout this
              process.&apos;
              <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr J, Ealing</p>
                </i>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
