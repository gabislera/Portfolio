import './projects.css'
import VID1 from '../../assets/video1.mp4'
import VID2 from '../../assets/video2.mp4'
import VID3 from '../../assets/video3.mp4'
import VID4 from '../../assets/video4.mp4'
import VID7 from '../../assets/video7.mp4'
import VID8 from '../../assets/video8.mp4'
import ProjectsVideo from './ProjectsVideo'

const dataVideo = [
  {
    id: 1,
    image: VID7,
    title: 'NLW Spacerocket',
    github: 'https://github.com/gabislera/NLW-Spacetime',
    demo: 'https://github.com/gabislera/NLW-Spacetime',
  },
  {
    id: 2,
    image: VID8,
    title: 'Feed de comentários',
    github: 'https://github.com/gabislera/Post-feed',
    demo: 'https://gabislera.github.io/Post-feed/',
  },
  {
    id: 3,
    image: VID2,
    title: 'Rede social para pets',
    github: 'https://github.com/gabislera/Cats',
    demo: 'https://gabislera.github.io/Cats/',
  },
  {
    id: 4,
    image: VID3,
    title: 'Bikcraft',
    github: 'https://github.com/gabislera/Bikcraft',
    demo: 'https://gabislera.github.io/Bikcraft/',
  },
  {
    id: 5,
    image: VID1,
    title: 'To Do List',
    github: 'https://github.com/gabislera/To-do-List',
    demo: 'https://gabislera.github.io/To-do-List/',
  },
  {
    id: 6,
    image: VID4,
    title: 'Animais Fantásticos',
    github: 'https://github.com/gabislera/Animais-Fantasticos',
    demo: 'https://gabislera.github.io/Animais-Fantasticos/',
  },

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