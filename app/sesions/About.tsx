import Timeline from "../components/ui/Timeline"

const About = () => {
  return (
    <section
      id='about'
      className="w-full py-8"
    >
      <h1 className="heading">
        My <span className="text-primaryColor">work experience</span>
      </h1>
      <Timeline />
    </section>
  )
}
export default About