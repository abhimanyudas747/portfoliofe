import Content from '../../components/Content/Content';
import "./style.css";

const Skills = () => {
    const skills = [
        'React',
        'Javascript',
        'Typescript',
        'CSS',
        'SASS',
        'Webpack',
        'Docker'
    ]
    const expOverview = 'Lorem ipsum dolor sit amet consectetur. Et dolor proin sed ac vitae ipsum viverra. Mi at in arcu duis convallis diam vulputate elit maecenas. Cras vel ultricies congue suspendisse ac. Sagittis urna massa gravida volutpat et dictum molestie. Leo tincidunt gravida condimentum justo. Leo eget at tristique elit nisl morbi duis nisl.'
    return (
        <div className='skills-outer-div'>
            <h1>Skills</h1>
            <div className='skill-holder'>
               {
                   skills.map(skill => <Content text={skill} background='#04385D' />)
               } 
            </div>
            <h1>Over the years...</h1>
            <Content text={expOverview} background='#04385D' />
        </div>
    )
}

export default Skills;