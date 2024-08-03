import {
  NavigationMenu,
} from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu"


const Navigation = () => {

  return (
    <NavigationMenu style={{ display: 'flex', gap: '24px', fontSize: '24px' }}>
      <Link
        style={{ fontSize: '16px' }}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Learn
      </Link>
      <Link
        style={{ fontSize: '16px' }}

        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Practice
      </Link>
      <Link
        style={{ fontSize: '16px' }}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Read
      </Link>
    </NavigationMenu>
  )

}


export default Navigation