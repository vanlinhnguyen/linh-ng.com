interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Machine learning for engineers',
    description: `A short summary of common Machine Learning techniques and designs.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/ml_for_engs',
  },
]

export default projectsData
