import React, { useState, useRef } from 'react';

const faqs = [
  {
    id: 1,
    header: 'Is mediation legally binding?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 2,
    header: 'Is mediation mandatory?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 3,
    header: 'Am I entitled to 50% of my partners assets?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 4,
    header: 'When should I seek legal advice? ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 5,
    header: 'Lorem ipsum dolor? ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 6,
    header: 'Lorem ipsum dolor? ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 7,
    header: 'Lorem ipsum dolor? ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  },
  {
    id: 8,
    header: 'Lorem ipsum dolor? ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi nulla suscipit consectetur, quos similique? Culpa animi dolorum voluptates a excepturi aspernatur, dicta sunt. Minus ut cupiditate ex explicabo delectus, recusandae consequatur in? Iste sit quod eos quibusdam. Non quas porro laudantium suscipit? Excepturi perferendis, inventore, maxime at, error obcaecati tenetur a praesentium quidem eum quis ipsam atque? Praesentium hic odio nihil laboriosam vero, et aperiam qui, nobis quod voluptate omnis facilis'
  }
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <p className="">{header}</p>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="rc-accordion-body mediator-text">
          <p className="mt-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
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
                  <div className="title is-3 mt-4 mr-6 ml-6">FAQ&apos;s</div>
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
