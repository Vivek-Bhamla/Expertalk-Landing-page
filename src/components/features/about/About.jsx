import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-20 lg:px-32 text-gray-800">
      <div id="about" className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900 animate-fade-in">
          About <span className="text-blue-600">EXPERTALK</span>
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed animate-fade-in delay-100">
          <strong>EXPERT TALK</strong> is your all-in-one destination for
          professional guidance and insight. From legal consultations to tech
          advice, we simplify your access to trusted experts across diverse
          industries—all in one place.
        </p>
        <p className="text-lg md:text-xl mb-6 leading-relaxed animate-fade-in delay-200">
          We’re built on the idea that expert support should be fast, reliable,
          and personalized. Our platform eliminates the guesswork—no more
          jumping between websites or digging through directories. Just clear,
          professional help when you need it most.
        </p>
        <p className="text-lg md:text-xl leading-relaxed animate-fade-in delay-300">
          Whether you're a startup founder, student, or someone in need of quick
          answers, <strong>EXPERTALK</strong> gives you direct access to a
          handpicked network of experts, ready to help you move forward with
          confidence.
        </p>
      </div>
    </section>
  );
};

export default About;
