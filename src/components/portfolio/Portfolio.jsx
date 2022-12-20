import React from "react";
import IMG1 from "../../assets/ReactBlog.png";
import IMG2 from "../../assets/merncrud.png";
import IMG3 from "../../assets/DigitalClock.png";
import IMG4 from "../../assets/TeaxtUtils.png";
import IMG5 from "../../assets/TodoList.png";
import IMG6 from "../../assets/Album.png";
import IMG7 from "../../assets/pizzadnd.png";
import IMG8 from "../../assets/intrestcal.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "React Blog",
      img: IMG1,
      description:
        "A basic react based blog page  having functionality of adding new blog and deleting blog loaded for all screen sizes",
      technologies: "React | Node | Express | Mongodb",
      link: "https://blogprojectfrontend.vercel.app/",
      github: "https://github.com/jeeveshtewatia/mern_blog_fronted",
    },
    {
      id: 2,
      title: "MERN Crud",
      img: IMG2,
      description:
        "Create , Read , Update , Delete functionality with live working and a checkbox for completed tasks",
      technologies: "React | Node | Express | Mongodb",
      link: "https://mern-crud-app-frontend.vercel.app/",
      github: "https://github.com/jeeveshtewatia/MERN-CRUD-App_Frontend",
    },
    {
      id: 3,
      title: "Digital Alarm Clock",
      img: IMG3,
      description:
        "A personal care management clock that allow user to set time for : WakeUp , Lunch , Nap and Sleep with live updation of images",
      technologies: "JavaScript | CSS",
      link: "https://jeeveshtewatia.github.io/Digital-Clock-JsProject/",
      github: "https://github.com/jeeveshtewatia/Digital-Clock-JsProject",
    },
    {
      id: 4,
      title: "Text Utils",
      img: IMG4,
      description:
        "An application with light and dark mode which can perform operations with given text like Uppercase , Lowercase , Copy , Delete , Word Count ,Reading time and Remove extra spaces",
      technologies: "React",
      link: "https://jeevesh-text-utils-react.netlify.app/",
      github: "https://github.com/jeeveshtewatia/Text-Utils",
    },
    {
      id: 5,
      title: "TodoList",
      img: IMG5,
      description:
        "An application based on local storage for adding and deleting tasks and live updation",
      technologies: "JavaScript | CSS",
      link: "https://jeevesh-todo-app-list.netlify.app/",
      github:
        "https://github.com/jeeveshtewatia/Todo-Add-Dlt-List-Local-Storage",
    },
    {
      id: 6,
      title: "Album Creator",
      img: IMG6,
      description:
        "An application for creating slideshow where user can provide image sources and  application will create a slideshow of given images ",
      technologies: "JavaScript | CSS",
      link: "https://jeeveshtewatia.github.io/Input-Taking-Album/",
      github: "https://github.com/jeeveshtewatia/Input-Taking-Album",
    },
    {
      id: 7,
      title: "Pizza DnD",
      img: IMG7,
      description:
        "An application based on drag and drop functionality with javascript and update drag drop  ",
      technologies: "JavaScript | CSS",
      link: "https://pizzaappjeevesh.netlify.app/",
      github: "https://github.com/jeeveshtewatia/DnD_Pizza",
    },
    {
      id: 8,
      title: "Interest Calculator",
      img: IMG8,
      description:
        "An application to calculate simple interest and compound interest on yearly basis,monthly basis and daily basis",
      technologies: "JavaScript | CSS",
      link: "https://qj3ywz-3000.preview.csb.app/",
      github: "https://github.com/jeeveshtewatia/InterestCalculator",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={item.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
