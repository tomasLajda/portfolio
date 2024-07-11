import SkillCard, { SkillCardProps } from './skill-card';

interface SkillsList {
  skills: SkillCardProps[];
}

const Skills = ({ skills }: SkillsList) => {
  return (
    <div className='mt-16'>
      <h1 className='text-5xl font-semibold text-center mb-8'>My Skills</h1>
      <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center'>
        {Array.isArray(skills) ? (
          skills.map((skill, index) => <SkillCard key={index} {...skill} />)
        ) : (
          <p>No skills available</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
