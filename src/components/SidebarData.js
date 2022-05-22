import { FaOilCan } from "react-icons/fa";
import { GiSpookyHouse, GiSettingsKnobs } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { FormattedMessage } from "react-intl";
export const SidebarData = [
  {
    title: <FormattedMessage id="dashboard" defaultMessage="Dashboard" />,
    path: "/dashboard",
    icons: <GoHome />,
    cname: "nav-text",
  },
  {
    title: <FormattedMessage id="parish" defaultMessage="Parish" />,
    path: "/parish",
    icons: <GiSpookyHouse />,
    cname: "nav-text",
  },
  {
    title: <FormattedMessage id="shepherd" defaultMessage="Shepherd" />,
    path: "/shepherd",
    icons: <IoIosPeople />,
    cname: "nav-text",
  },
  {
    title: <FormattedMessage id="anointment" defaultMessage="Anointment" />,
    path: "/anointment",
    icons: <FaOilCan />,
    cname: "nav-text",
  },
  {
    title: <FormattedMessage id="setting" defaultMessage="Setting" />,
    path: "/setting",
    icons: <GiSettingsKnobs />,
    cname: "nav-text",
  },
];
