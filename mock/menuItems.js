import { ACgProfile} from "react-icons/fa";
import { PiNotebookBold} from "react-icons/fa";
import { MdPayment} from "react-icons/fa";

const sidebarItems = [
  {
    name: "Profile",
    href: "/profile",
    icon: ACgProfile,
  },
  {
    name: "My Learnings",
    href: "/my-learnings",
    icon: PiNotebookBold,
  },
  {
    name: "Payment History",
    href: "/payment-history",
    icon: MdPayment,
  },
];

export default sidebarItems;



