import CardSettings from '@/components/card-settings'
import CardProfile from '@/components/card-profile'

const Settings = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <div className='pl-4 pr-0 lg:w-8/12'>
          <CardSettings />
        </div>
        <div className='pl-0 pr-4 lg:w-4/12'>
          <CardProfile />
        </div>
      </div>
    </>
  )
}

export default Settings
