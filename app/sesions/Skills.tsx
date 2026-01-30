import { technologies } from "@/app/data";
import { CardMarginBorders } from "../components/ui/MovingBorders.tsx";

const Skills = () => {
  return (
    <section
      className="w-full py-8">
      <h1 className="heading">
        Acerca <span className="text-primaryColor">de mi</span>
      </h1>
      <div className="w-full py-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {technologies.map((tech) => (
          <CardMarginBorders
            key={tech.id}
            duration={10000 + ((tech.id * 1234) % 10000)}
            borderRadius="1.15rem"
            style={{
              borderRadius: `calc(1.15rem* 0.96)`,
            }}
            className="flex-1 text-primary border-slate-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5 flex flex-col gap-4 items-start justify-center">
                <h3 className="text-start text-xl md:text-2xl font-bold">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardMarginBorders>
        ))}
      </div>
    </section>
  );
};

export default Skills;
