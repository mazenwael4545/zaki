import { CircleUserRound, SquareMenu } from "lucide-react"
import { Card } from "./ui/card"
import { Avatar } from "./ui/avatar"

const Topbar = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center">
      <Card className="w-full flex justify-between items-center p-4">
        <SquareMenu className="w-8 h-8"/>
        <CircleUserRound className="w-8 h-8"/>
      </Card>
    </div>
  )
}

export default Topbar
