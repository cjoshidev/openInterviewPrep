import {
  NavigationMenu,
} from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu"


const Navigation = () => {

  return (
    <NavigationMenu style={{ display: 'flex', gap: '40px', fontSize: '24px' }}>
      <Link
        style={{ fontSize: '16px' }}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Learn
      </Link>
      <Link
        onClick={() => window.location.href = "/dashboard"}
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
      <Link
        style={{ fontSize: '16px' }}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Roadmap
      </Link>
      <Link
        style={{ fontSize: '16px' }}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Discuss
      </Link>
      <Link
        style={{ fontSize: '16px' }}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Referrals
      </Link>
    </NavigationMenu >
  )

}


export default Navigation