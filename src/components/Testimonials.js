import { React, useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">Testimonials</div>
        <div className="columns pt-5 pr-4 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              &apos;Many thanks to you for your time, guidance and support. I
              greatly appreciate it.&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr W, Hammersmith</p>
                </i>
              </small>
            </p>
            <br />
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
              they felt you really listened to them.&apos; <br />
              <small>
                <i id="testimonial-name">
                  <p>Mr P, Clapham</p>
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
