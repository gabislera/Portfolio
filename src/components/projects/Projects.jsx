import './projects.css'
import VID1 from '../../assets/video1.mp4'
import VID2 from '../../assets/video2.mp4'
import VID3 from '../../assets/video3.mp4'
import VID4 from '../../assets/video4.mp4'
import VID5 from '../../assets/video5.mp4'
import VID6 from '../../assets/video6.mp4'
import ProjectsVideo from './ProjectsVideo'

const dataVideo = [
  {
    id: 1,
    image: VID1,
    title: 'To Do List com React',
    github: 'https://github.com/gabislera/To-do-List',
    demo: 'https://gabislera.github.io/To-do-List/',
  },
  {
    id: 2,
    image: VID2,
    title: 'Rede social com React',
    github: 'https://github.com/gabislera/Cats',
    demo: 'https://gabislera.github.io/Cats/',
  },
  {
    id: 3,
    image: VID3,
    title: 'Bikcraft',
    github: 'https://github.com/gabislera/Bikcraft',
    demo: 'https://gabislera.github.io/Bikcraft/',
  },
  {
    id: 4,
    image: VID4,
    title: 'Animais Fantásticos',
    github: 'https://github.com/gabislera/Animais-Fantasticos',
    demo: 'https://gabislera.github.io/Animais-Fantasticos/',
  },
  {
    id: 5,
    image: VID5,
    title: 'Pokedéx',
    github: 'https://github.com/gabislera/Pokedex',
    demo: 'https://gabislera.github.io/Pokedex/',
  },
  {
    id: 6,
    image: VID6,
    title: 'Calculadora',
    github: 'https://github.com/gabislera/Calculadora-com-React',
    demo: 'https://gabislera.github.io/Calculadora-com-React/',
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects-container'>
        {
          dataVideo.map(({ id, image, title, github, demo }) => {
            return <ProjectsVideo
              key={id}
              id={id}
              image={image}
              title={title}
              github={github}
              demo={demo}
            />
          })
        }
      </div>
    </section>
  )
}

export default Projects