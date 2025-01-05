import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='flex items-center justify-center flex-col mx-36 gap-9'>
      <h1
        className='font-extrabold text-[50px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span><br /> Personalized Itineraries at Your Fingertips
      </h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom Itineraries tailored to your interests and budget.</p>
      <Button>Get Started, It's Free</Button>
    </div>
  )
}

export default Hero