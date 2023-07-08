import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8"> 
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
      </div>

      <p className="text-xl mt-20 leading-8">
        I am a passionate and dedicated individual with a strong desire to learn
        and grow in the field of software development. I have recently completed
        my education in Information Technology, where I gained a solid foundation in
        programming languages, algorithms, and data structures. 
        <br/>
        Although I am in the early stages of my career, I have already undertaken several
        personal projects to apply my theoretical knowledge in practical
        settings. These projects have allowed me to gain hands-on experience in
        coding, debugging, and problem-solving. I am continuously exploring new
        technologies and frameworks to expand my skillset.
        <br />
        Additionally, I possess excellent communication and collaboration skills, which enable
        me to work effectively in teams and contribute to the success of
        projects. I am highly motivated, detail-oriented, and always strive for
        excellence in my work. As a software developer beginner, I am excited
        about the opportunity to work with experienced professionals and
        contribute to the development of innovative software solutions. I am
        eager to embrace challenges, learn from setbacks, and grow both
        technically and professionally in this dynamic industry.
      </p><br />
      
      </div> 
    </div>
  );
};

export default About;
