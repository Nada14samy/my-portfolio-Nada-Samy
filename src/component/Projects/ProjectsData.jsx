
import projectItem_1 from "../../assets/images/project-1.webp";
import projectItem_2 from "../../assets/images/project-2.webp";
import projectItem_3 from "../../assets/images/project-3.webp";
import projectItem_4 from "../../assets/images/project-4.webp";

const ProjectsDataReact = [{
    id: 1,
    image: projectItem_1,
    NameProject: "Petopia",
    discription: "descriptionProject-3",
    tech: ["tailwind" , "react" , "node" ],
    link: "https://petopia-one.vercel.app/"
},{
    id: 2,
    image: projectItem_2,
    NameProject: "Simple House",
    discription: "descriptionProject-2",
    tech: ["tailwind" , "react"],
    link: "https://nada14samy.github.io/Simple-House/"
}];

const ProjectsDataStatic = [{
    id: 3,
    image: projectItem_3,
    NameProject: "Arsha",
    discription: "descriptionProject-1",
    tech: [ "html", "css","bootstrap"],
    link: "https://nada14samy.github.io/project-Arsha/"
},{
    id: 4,
    image: projectItem_4,
    NameProject: "ZenBlog",
    discription: "descriptionProject-1",
    tech: [ "html", "css","bootstrap"],
    link: "https://nada14samy.github.io/project-ZenBlog/"
}];

const ProjectsDataJS = [{}];

const AllProjectData = [...ProjectsDataStatic, ...ProjectsDataReact];

export {ProjectsDataStatic , ProjectsDataJS , ProjectsDataReact , AllProjectData};