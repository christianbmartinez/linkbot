'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Bot,
  FileTerminal,
  AreaChart,
  User2,
  Settings,
  LogOut,
} from 'lucide-react'

import { cn } from '@/lib/utils'

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    color: 'text-sky-500',
    href: '/dashboard',
  },
  {
    label: 'My Bot',
    icon: Bot,
    color: 'text-violet-500',
    href: '/dashboard/my-bot',
  },
  {
    label: 'Prompts',
    icon: FileTerminal,
    color: 'text-pink-700',
    href: '/dashboard/prompts',
  },
  {
    label: 'Analytics',
    icon: AreaChart,
    color: 'text-orange-700',
    href: '/dashboard/analytics',
  },
  {
    label: 'My Account',
    icon: User2,
    color: 'text-green-700',
    href: '/dashboard/my-account',
  },
  {
    label: 'Settings',
    icon: Settings,
    color: 'text-red-700',
    href: '/dashboard/settings',
  },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <nav className='h-full space-y-4 bg-slate-900 text-zinc-100'>
      <div className='flex-1 px-[15px] py-[18px]'>
        <Link href='/dashboard' className='flex items-center pb-4'>
          <div className='relative mr-3 h-8 w-8'>
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
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-zinc-100/10 hover:text-white',
                pathname === route.href
                  ? 'bg-white/10 text-zinc-100'
                  : 'text-zinc-400'
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
      <div className='absolute bottom-6 w-1/6 px-3 py-2'>
        <Link
          href='/'
          className='flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium text-zinc-400 transition hover:bg-zinc-100/10 hover:text-zinc-100'
        >
          <LogOut className='mr-3 h-5 w-5 text-cyan-700' />
          Logout
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
