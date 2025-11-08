import { CalendarDays, Hourglass, ListTodo, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  const icons = [
    <ListTodo className="w-8 h-8  " onClick={()=> navigate("/")} />,
    <Hourglass className="w-8 h-8" onClick={()=> navigate("/pomo")}/>,
    <CalendarDays className="w-8 h-8" />,
    <Trophy className="w-8 h-8" />,
  ];
  return (
    <div className="absolute bottom-3 w-full p-5">
      <Card className="bg-transparent flex p-4 justify-around items-center rounded-full">
        {icons.map((icon, index) => (
          <div key={index} className="transition-all hover:bg-yellow-500 shadow-2xl p-2 rounded-full ">
            {icon}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Navbar;
