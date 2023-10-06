import { Button } from '../ui/button'

const CardSettings = () => {
  return (
    <>
      <div className='relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg'>
        <div className='mb-0 px-6 py-6'>
          <div className='flex justify-between text-center'>
            <h6 className='text-xl font-bold text-zinc-200'>Settings</h6>
            <Button variant='gradient'>Save Settings</Button>
          </div>
        </div>
        <div className='flex-auto px-4 py-10 pt-0 lg:px-10'>
          <form>
            <hr className='border-b-1 mt-6 border-zinc-400' />

            <h6 className='mb-6 mt-3 text-sm font-bold uppercase text-zinc-200'>
              User Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    Username
                  </label>
                  <input
                    type='text'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='_coderchris'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    Email address
                  </label>
                  <input
                    type='email'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='hello@example.com'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='Christian'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='Martinez'
                  />
                </div>
              </div>
            </div>
            <hr className='border-b-1 mt-6 border-zinc-400' />
            <h6 className='mb-6 mt-3 text-sm font-bold uppercase text-zinc-200'>
              Contact Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='lg:w-12/12 w-full px-4'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    Address
                  </label>
                  <input
                    type='text'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='123 Sesame Street Apartment H'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-4/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    City
                  </label>
                  <input
                    type='email'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='Lala Land'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-4/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='state'
                  >
                    State
                  </label>
                  <input
                    type='text'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='California'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-4/12'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='90210'
                  >
                    Zip Code
                  </label>
                  <input
                    type='text'
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    defaultValue='90210'
                  />
                </div>
              </div>
            </div>

            <hr className='border-b-1 mt-6 border-zinc-400' />

            <h6 className='mb-6 mt-3 text-sm font-bold uppercase text-zinc-200'>
              About Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='lg:w-12/12 w-full px-4'>
                <div className='relative mb-3 w-full'>
                  <label
                    className='mb-2 block text-xs font-bold uppercase text-zinc-400'
                    htmlFor='grid-password'
                  >
                    About me
                  </label>
                  <textarea
                    className='w-full rounded border-0 bg-zinc-200 px-3 py-3 text-sm text-zinc-800 shadow ring-pink-500 transition-all duration-150 ease-linear focus:outline-none focus:ring'
                    rows={4}
                    defaultValue="Hey there! 🖐 I'm Christian, I build apps for the web! I have been coding for around 6 years as a hobby, although recently i decided to take action and pursue a tech career. I am currently a student at the U of U's coding bootcamp. Follow me on twitter to stay up to date on my tech journey!"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CardSettings
