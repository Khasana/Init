import { FunctionComponent } from 'react'

export interface AboutProps {
  id: number
  name: string
}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default About
