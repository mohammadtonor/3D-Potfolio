import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>

<motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what skills i can use in your projects?</p>
        <h2 className={styles.sectionHeadText}>My skills </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mb-8 mt-12">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}  />
        </div>
      ))}
    </div>
      </>
  );
}
 
export default SectionWrapper(Tech, "");