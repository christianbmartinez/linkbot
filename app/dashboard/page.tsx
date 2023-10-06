//import CardLineChart from '@/components/cards/card-line-chart'
//import CardBarChart from '@/components/cards/card-bar-chart'
//import CardPageVisits from '@/components/cards/card-page-visits'
import CardSocialTraffic from '@/components/cards/card-social-traffic'

const DashboardPage = () => {
  return (
    <div className='flex flex-col pl-6 pt-32'>
      <div className='flex flex-wrap'>
        <div className='mb-12 w-full px-4 xl:mb-0 xl:w-8/12'>
          <CardSocialTraffic />
        </div>
        <div className='w-full px-4 xl:w-4/12'>
          <CardSocialTraffic />
        </div>
      </div>
      <div className='mt-4 flex flex-wrap'>
        <div className='mb-12 w-full px-4 xl:mb-0 xl:w-8/12'>
          <CardSocialTraffic />
        </div>
        <div className='w-full px-4 xl:w-4/12'>
          <CardSocialTraffic />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
