import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { APP_NAME } from '@/lib/constants'

const categories = ['men', 'women', 'kids', 'accessories']

export default function Search() {
  return (
    <form action='/search' method='GET' className='flex items-stretch h-10'>
      {/* Category Select */}
      <Select name='category'>
        <SelectTrigger
          className='select-trigger
    px-3
    bg-gray-100 text-black
    border border-gray-300
    rounded-l-md rounded-r-none'
        >
          <SelectValue placeholder='All' />
        </SelectTrigger>

        <SelectContent position='popper'>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        className='
          flex-1 h-full rounded-none
          bg-gray-100 text-black text-base
          border border-gray-300 border-x-0
        '
        placeholder={`Search Site ${APP_NAME}`}
        name='q'
        type='search'
      />

      {/* Search Button */}
      <button
        type='submit'
        className='
          h-full px-3
          bg-primary text-primary-foreground
          rounded-l-none rounded-r-md
          flex items-center justify-center
        '
      >
        <SearchIcon className='w-5 h-5' />
      </button>
    </form>
  )
}
