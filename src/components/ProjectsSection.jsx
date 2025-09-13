import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hospital deko",
    description:
      "Hospital Deko is a web platform that enables users to book appointments easily while providing detailed hospital information and seamless navigation.",
    image:
      "https://static.vecteezy.com/system/resources/previews/021/666/194/non_2x/hospital-building-isolated-front-view-on-a-modern-hospital-building-and-surrounding-area-on-a-piece-of-ground-3d-illustration-png.png",
    tags: ["React", "TailwindCSS", "express", "mongoDB"],
    demoUrl: "https://hospital-deko.netlify.app/",
    githubUrl: "https://github.com/imayush2/Hospital-deko-",
  },
  {
    id: 2,
    title: "Coder mate",
    description:
      "Interact with different coders and see there profile and make connections",
    image:
      "https://t3.ftcdn.net/jpg/05/57/95/88/360_F_557958891_auaiGpfEHSfsgzbKjKTXYubFdMFlXzVM.jpg",
    tags: ["React", "Node.js", "Express", "mongoDB"],
    demoUrl: "https://codermate.shop/login",
    githubUrl: "https://github.com/imayush2/DevTinderBE",
  },
  {
    id: 3,
    title: "FoodieHub",
    description:
      "FoodieHub is a web platform that connects users with their favorite restaurants, used live swiggy API.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBrUHgRD2AFch41AViei1z-CFqWhEbW86Cg&s",
    tags: ["React", "javaScript ", "Tailwind CSS"],
    demoUrl: "https://foodiehub20.netlify.app",
    githubUrl: "https://github.com/imayush2/FoodieHub",
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "A YouTube-inspired web app featuring video browsing, playback, and user-friendly navigation with additional custom features.",

    image:
      "https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFbVeOdpHjPmjEkLBCOpvPJC5eMg",
    tags: ["React", "javaScript ", "Tailwind CSS"],
    demoUrl: "https://youtube-clone20.netlify.app/",
    githubUrl: "https://github.com/imayush2/Youtube",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/imayush2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
