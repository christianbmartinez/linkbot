'use client'

import Sidebar from '@/components/sidebar'
import Menu from '@/components/menu'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='hidden h-screen lg:block lg:w-1/6'>
        <Sidebar />
      </div>
      <div className='block h-screen w-full lg:hidden'>
        <Menu />
      </div>
      <div className='hidden h-screen w-5/6'>{children}</div>
    </div>
  )
}

export default DashboardLayout
