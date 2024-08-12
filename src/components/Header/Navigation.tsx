import { useState } from "react"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 text-gray-700"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>


      <NavigationMenu
        className={`${isOpen ? "block " : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg sm:text-2xl absolute sm:relative bg-white sm:bg-transparent h-full sm:w-auto p-4 sm:p-0 cursor-pointer`}
      >
        <Link className="text-sm font-medium transition-colors hover:text-primary">
          Learn
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Practice
        </Link>
        <Link className="text-sm font-medium transition-colors hover:text-primary">
          Read
        </Link>
        <Link className="text-sm font-medium transition-colors hover:text-primary">
          Roadmap
        </Link>
        <Link className="text-sm font-medium transition-colors hover:text-primary">
          Discuss
        </Link>
        <Link className="text-sm font-medium transition-colors hover:text-primary">
          Referrals
        </Link>
      </NavigationMenu>
    </div>
  )
}

export default Navigation
