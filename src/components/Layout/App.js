import React, {useEffect, useState} from 'react';
import study from './assets/images/study.jpg';
import instagram from './assets/images/instagram.png';
import github from './assets/images/github.png';
import linkdin from './assets/images/linkdin.png';
import {courses} from './data/coursesList';
import {lines} from './data/lines';
import {footerCourse} from './data/footerCourse';
import Course from './course';
import Line from './line';
import Screen from './screen';
import CourseCards from './courseCards';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [showAll, setshowAll] = useState(true); //to set showAll on number of ocourses visible
  //similar to "view more" "view less"

  const [courseList, setCourseList] = useState(courses.slice(0, 4));
  const [greenIndex, setGreenIndex] = useState(0); //for choosing which line to show as green
  let list = courses.slice(0, 3);

  var currentYear = new Date().getFullYear();
  console.log(currentYear);

  const handle = () => {
    setshowAll(!showAll);
    if (showAll) {
      setCourseList(courses.slice(0, courses.length));
    } else {
      setCourseList(courses.slice(0, 4));
    }
  };

  useEffect(() => {
    let toggle = setInterval(() => {
      setGreenIndex((greenIndex + 1) % lines.length);
    }, 3000);

    return () => {
      clearInterval(toggle);
    };
  }, [greenIndex]);

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  return (
    <div className="page">
      {/* <Navbar /> */}

      <span
        className="intro"
        style={{
          marginTop: 0,
        }}>
        <div className="text">
          <h2>learn to code free</h2>

          <p>
            Learn to code with our beginner-friendly tutorials and examples.
            Read tutorials and examples, write programs, run code and learn to
            code.
          </p>

          <h2>Get the latest tutorials and updates</h2>

          <div className="input-box">
            <input type="email" placeholder="Enter your email address"></input>
            <button className="btn">Subscribe</button>
          </div>
        </div>

        <div className="image">
          <img
            src="./images/study.svg"
            alt="study pic"
            height="500px"
            width="800px"></img>
        </div>
      </span>

      <span className="intro2" style={{width: '100%'}}>
        <div className="text">
          <h2 style={{marginTop: '2rem'}}>Choose What to learn</h2>
          <p>Start learning programming language of your choice.</p>
        </div>
        <div className="courses">
          {courseList.map((course) => {
            const {index, name, image} = course;
            return (
              <Course
                key={index}
                name={name}
                image={image}
                showALl={showAll}
                link={course.link}
              />
            );
          })}
          {/* <div className="box">
            <button className="box-btn" onClick={() => handle()}>
              {showAll ? 'View all tutorials' : 'View less tutorials'}
            </button>
            {showAll ? (
              <AiOutlineArrowRight className="right arrow"></AiOutlineArrowRight>
            ) : (
              <AiOutlineArrowUp className="left arrow"></AiOutlineArrowUp>
            )}
          </div> */}
        </div>
      </span>

      <span className="intro3 grey">
        <div className="text">
          <h2 data-aos="fade-right">Programiz PRO Prepare for Your Career</h2>
          <ul data-aos="fade-right" className="options">
            {lines.map((line, index) => {
              return (
                <Line
                  key={index}
                  line={line}
                  index={index}
                  greenIndex={greenIndex}
                />
              );
            })}
          </ul>
          <button
            data-aos="flip-right"
            data-aos-duration="1000"
            className="box-btn-free"
            onClick={() => handle()}>
            Join for FREE
          </button>
        </div>

        <div className="image">
          <Screen />
        </div>
      </span>

      <span
        className="intro3 "
        style={{
          marginTop: '0rem',
          paddingTop: '5rem',
        }}>
        <div data-aos="fade-right" className="text">
          <h2>Enroll Now for FREE</h2>

          <p>
            Try our courses for FREE now! Start from our most popular courses.
          </p>
        </div>

        <div className="course-cards">
          {list.map((course) => {
            const {id, name, image} = course;
            return <CourseCards key={id} name={name} image={image} />;
          })}
          {/* <div className="card">
            <h3 style={{color: 'blue', marginBottom: '1rem'}}>
              View All Courses
            </h3>
            <AiOutlineArrowRight className="right arrow"></AiOutlineArrowRight>
          </div> */}
        </div>
      </span>

      {/* <footer className="footer">
        <div className="footer-upper">
          <div className="big-col">
            <h3>Programiz</h3>
            <p>Join our newsletter for the latest updates</p>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter your email address"></input>
              <button className="btn">Join</button>
            </div>
            <div className="playstore">
              <a href="https://play.google.com/store/apps/dev?id=8227237868464522664&referrer=utm_campaign%3Dprogramiz-footer%26utm_source%3Dprogramiz-website">
                <img
                  src="https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png"
                  alt="play store link"
                  height="100px"
                  width="300px"
                />
              </a>
            </div>
            <div className="appstore">
              <a href="https://www.apple.com/in/search/programiz?src=globalnav">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png"
                  alt="app store link"
                  height="100px"
                  width="300px"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <h3>Tutorial</h3>
            {footerCourse.map((course, key) => {
              return (
                <p className="tut" key={key}>
                  {course}
                </p>
              );
            })}
          </div>
          <div className="col">
            <h3>Examples</h3>
            {footerCourse.map((course, key) => {
              return (
                <p className="tut" key={key}>
                  {course}
                </p>
              );
            })}
          </div>
          <div className="col">
            <h3>Apps</h3>
            {footerCourse.map((course, key) => {
              return (
                <p className="tut" key={key}>
                  {course}
                </p>
              );
            })}
          </div>
        </div>

        <div className="last">
          <small>
            &copy; Copyright {currentYear}, Bhagya Website.All rights reserved
          </small>

          <div className="socials">
            <div>
              <a href="https://www.linkedin.com/in/bhagya-patel-9836081b7/">
                <img
                  src={linkdin}
                  alt="app store link"
                  height="30px"
                  width="30px"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/bhagyaspatel">
                <img
                  src={github}
                  alt="app store link"
                  height="30px"
                  width="30px"
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/_bhagya_patel_09/">
                <img
                  src={instagram}
                  alt="app store link"
                  height="30px"
                  width="30px"
                />
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default App;
