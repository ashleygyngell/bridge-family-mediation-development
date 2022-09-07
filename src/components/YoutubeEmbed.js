import React from 'react';

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      className="responsive-iframe"
      src={'https://www.youtube.com/embed/HvO1QI_xlB0'}
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="How Mediation Works"
    />
  </div>
);

export default YoutubeEmbed;
