'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bot, FileTerminal, LayoutDashboard, User2, Settings, AreaChart } from 'lucide-react'

import { cn } from '@/lib/utils'

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'My Bot',
    icon: Bot,
    href: '/my-bot',
    color: 'text-violet-500',
  },
  {
    label: 'Prompts',
    icon: FileTerminal,
    color: 'text-pink-700',
    href: '/prompts',
  },
  {
    label: 'Analytics',
    icon: AreaChart,
    color: 'text-orange-700',
    href: '/analytics',
  },
  {
    label: 'My Account',
    icon: User2,
    color: 'text-green-700',
    href: '/my-account',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className='flex h-screen w-1/6 flex-col space-y-4 bg-slate-900 py-4 text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href='/dashboard' className='flex items-center pb-4'>
          <div className='relative mr-4 h-8 w-8'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className='text-2xl font-bold text-zinc-100'>Linkbot</h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white',
                pathname === route.href ? 'bg-white/10 text-white' : 'text-zinc-400'
              )}
            >
              <div className='flex flex-1 items-center'>
                <route.icon className={`mr-3 h-5 w-5 ${route.color}`} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
