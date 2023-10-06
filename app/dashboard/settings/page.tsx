import CardSettings from '@/components/cards/card-settings'
import CardProfile from '@/components/cards/card-profile'

const SettingsPage = () => {
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

export default SettingsPage
