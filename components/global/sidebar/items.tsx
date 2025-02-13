import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    page:string
    slug:string
}

const Items = ({page,slug}: Props) => {
  return SIDEBAR_MENU.map((item)=> <Link key={item.id} 
  href={`/dashboard/${slug}/${item.label==='home'? '/' : item.label}`}
  className={cn('capitalize flex gap-x-2 rounded-full p-3')}
  
  
  />)
}

export default Items