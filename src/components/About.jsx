import React from 'react';

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I am a curious student passionate about learning new technologies and exploring creative hobbies.
        As someone new to React, I'm excited to build interactive web applications and understand how components work together.
        In my free time, I enjoy various activities that keep me inspired and motivated to grow both personally and professionally.
      </p>
      <img
        src="https://placekitten.com/200/200"
        alt="My spirit animal - a cat"
        style={{
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          marginTop: '10px'
        }}
      />
    </div>
  );
}

export default About;