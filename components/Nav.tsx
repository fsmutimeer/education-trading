import { Logo } from '@/components'
import Link from 'next/link'
const menu = [
  {
    title: 'home',
    route: '/'
  },
  {
    title: 'Join Now',
    route: '/join'
  },
  {
    title: 'about us',
    route: '/about'
  },
   {
    title: 'faq',
    route: '/faq'
  }
];

const Nav = () => {
  return (
    
<nav className='container mx-auto w-[80%] top-0 left-0 right-0 absolute z-30  flex justify-center items-center pt-[2rem]'>
     {/* Logo */}
    <Link href="/"><Logo /></Link>
     {/* Title */}
     <p className='text-white font-normal text-4xl ml-auto  '> T  T  R</p>
     {/* Navigatin Menu */} 
      <ul className='flex gap-6 list-none text-gray-200 ml-auto'>
        {menu.map(ele => <li key={ele.title}>
          <Link href={ele.route.toLocaleLowerCase()} className='tracking-widest p-2 text-md active:text-orange-600 font-normal focus:ring'>{ele.title.toUpperCase()}</Link></li>)}
      <button className="tracking-widest text-md border bg-white px-4 py-1 text-slate-950 rounded-lg hover:bg-slate-300 hover:text-white">LOGIN</button>
      </ul>
    </nav>

    
  )
}

export default Nav