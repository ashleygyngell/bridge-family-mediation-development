import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    id: 1,
    header: 'Is mediation compulsory? ',
    text: (
      <p>
        No, mediation is voluntary, but prior to making an application to the
        Family Court, you are required to attend a Mediation Information and
        Assessment meeting (MIAM). The mediator will help you consider if
        mediation is a suitable way for you to resolve issues regarding
        arrangements for your children and how to divide your finances upon
        separation or divorce. Mediation can help to reduce conflict and it is
        generally quicker and cheaper than going to Court. <br></br>
        <br></br>It also has the support of the Ministry of Justice who make
        £500 available to couples using mediation via the Mediation Voucher
        Scheme
      </p>
    )
  },
  {
    id: 2,
    header: 'When is mediation not suitable?',
    text: (
      <p>
        Mediation is not suitable if either person does not feel comfortable or
        confident that they can discuss all issues freely and openly, and
        without fear of intimidation or aggression. It is also not suitable
        where there are safeguarding issues in respect of children of the
        family.
      </p>
    )
  },
  {
    id: 3,
    header: 'Is an agreement reached in mediation legally binding? ',
    text: (
      <p>
        No, because mediators are not able to give legal advice and must remain
        impartial. Any agreement reached in mediation needs to be discussed with
        a solicitor, who will turn it into a legally binding agreement. This is
        generally straightforward and not costly.
      </p>
    )
  },
  {
    id: 4,
    header: 'When should I seek legal advice?',
    text: (
      <p>
        You are free to seek legal advice at any time during the mediation
        process. On matters relating to children, a couple will generally make
        more progress discussing issues with one another, often with the help of
        a mediator, and will not need the advice of a solicitor. However, when
        you are dividing assets and property it is essential to seek legal
        advice before an agreement is finalised.
      </p>
    )
  },
  {
    id: 5,
    header: <p>Am I entitled to 50% of my partner&apos;s assets on divorce?</p>,
    text: (
      <p>
        Although a 50:50 split may be a starting point for a discussion for
        divorcing couples, there is no fixed rule about what each person may be
        entitled to upon divorce. The law is based on a consideration of several
        factors, the most important being the welfare of any children.
      </p>
    )
  },
  {
    id: 6,
    header: 'How long does mediation take? ',
    text: (
      <p>
        Mediation will last for as long as you both have issues to discuss.
        Generally, for working out child arrangements, 2 or 3 meetings may be
        required. For sorting out a division of the finances, the average is 3
        or 4 meetings, but in all cases, it depends upon the complexity of the
        issues to be resolved.
      </p>
    )
  },
  {
    id: 7,
    header: 'Do we both have to attend mediation at the same time?',
    text: (
      <p>
        Yes, it is necessary to attend the mediation meeting together so that a
        discussion can take place. Meetings take place online or in person. In
        some circumstances, it can be arranged for each person to be in a
        separate room, whether virtually or in reality, with the mediator moving
        between you. This is known as &apos;shuttle&apos; mediation. However, we
        encourage couples to come together in the same room wherever possible.
      </p>
    )
  },
  {
    id: 8,
    header: (
      <p>
        What&apos;s the difference between Family Mediation and Counselling?
      </p>
    ),
    text: (
      <p>
        Mediation helps people who&apos;ve decided to separate or divorce to
        find solutions to issues concerning children and money. Mediation does
        not help couples reconcile or get back together but is future focused
        and helps you resolve practical issues in a sensible, fair way, without
        going to court. <br></br>
        <br></br> Counsellors address patterns of behaviour and deep-seated
        issues affecting your life and relationships. It is possible to have
        counselling and mediation in tandem, but a mediator is not a qualified
        therapist and vice versa.
      </p>
    )
  },
  {
    id: 9,
    header: <p>What if one party doesn&apos;t want to attend mediation?</p>,
    text: (
      <p>
        If the other person is unwilling to attend mediation and is not
        communicating to resolve the issues, then the first party can apply to
        the family court, after attending a MIAM. The mediator can invite the
        other party to attend mediation and point out all the benefits, but
        cannot make them do so.
      </p>
    )
  }
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header ">
        <div
          className={`rc-accordion-toggle pl-5 pt-3 pb-3 pr-3 ${
            active === id ? 'active' : ''
          }`}
          onClick={() => handleToggle(id)}
        >
          <p className="pr-2">{header}</p> {''}
          <i
            className="fa fa-chevron-down rc-accordion-icon-mobile"
            id="fa-mobile"
          ></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse   ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="rc-accordion-body mediator-text">
          <p className="mt-4 p-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="">
            <div className="card">
              <div className="card-body">
                <div className="content ">
                  <div id="title-faq" className="title is-4 mt-2 mr-6 ml-6">
                    FAQs
                  </div>
                  <div className="column pt-5 pl-6 pr-6 pb-6 mediator-text  ">
                    {faqs.map((faq, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          active={active}
                          handleToggle={handleToggle}
                          faq={faq}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
