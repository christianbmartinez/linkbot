import Sidebar from '@/components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='h-screen w-1/6'>
        <Sidebar />
      </div>
      <div className='h-screen w-5/6'>{children}</div>
    </div>
  )
}

export default DashboardLayout
