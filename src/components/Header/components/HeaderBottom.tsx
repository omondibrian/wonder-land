import React from 'react'
import { Link } from 'react-router-dom'
const links = [
  {
    id:1,
    url:'/',
    title:'Home'
  },
  {
    id:2,
    title:'shop',
    url:'/shop'
  },
  {
    id:3,
    title:'flowers',
    url:'/shop/flowers'
  },
  {
    id:4,
    title:'edible',
    url:'/shop/edible'
  },
  {
    id:5,
    title:'hash',
    url:'/shop/hash'
  },
  {
    id:6,
    title:'concentrates',
    url:'/shop/concentrates'
  },
  {
    id:7,
    title:'cookies',
    url:'/shop/cookies'
  },
  {
    id:8,
    title:'cbd oil',
    url:'/shop/cbd_oil'
  },
]
const HeaderBottom = () => {
  return (
    <div className='hidden justify-between px-6 py-4 align-middle md:flex order-3 bg-[#F1F1F1]'>
      <div>
<ul className='flex px-4 py-3 space-x-4 flex-wrap'>
  {links.map(link => (
    <li key={link.id}>
      <Link to={link.url} className="font-medium font-roboto uppercase text-slate-500">{link.title}</Link>
    </li>
  ))}
</ul>
      </div>
      <div className='flex'>
      <ul className='flex space-x-1 flex-col'>
						<li>
							<Link to='/' className='text-sm'>
								About{' '}
							</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>
								Shipping{' '}
							</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>
								Faqs
							</Link>
						</li>
						<li>
							<Link to='/' className='text-sm'>
								Blogs
							</Link>
						</li>
					</ul>

      </div>
    </div>
  )
}

export default HeaderBottom