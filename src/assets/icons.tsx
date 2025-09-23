import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Cloud,
  Eye,
  EyeOff,
  Trash,
  LayoutDashboard,
  ListOrderedIcon,
  NewspaperIcon,
  UserCircle,
  UserPenIcon,
  LogOutIcon,
  CreditCard,
  Bell,
  Table,
  SunIcon,
  MoonIcon,
  SquareSplitHorizontalIcon,
  SearchIcon,
  ShoppingBagIcon,
  UsersIcon,
  MailPlusIcon,
  UserPlusIcon,
  CrossIcon,
  ArrowDownUpIcon,
  XIcon,
  CheckIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  PlusCircleIcon,
  CalendarIcon,
  Settings2Icon,
  EllipsisVerticalIcon,
  EditIcon,
} from "lucide-react";
import file from "./svg/file.svg";
import github from "./svg/github.svg";
import globe from "./svg/globe.svg";
import google from "./svg/google.svg";
import microsoft from "./svg/microsoft.svg";
import window from "./svg/window.svg";

const IconList = {
  google,
  microsoft,
  github,
  globe,
  file,
  window,
  eye: Eye,
  eyeOff: EyeOff,
  trash: Trash,
  cloud: Cloud,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  layoutDashboard: LayoutDashboard,
  listOrderedIcon: ListOrderedIcon,
  newspaperIcon: NewspaperIcon,
  userCircle: UserCircle,
  userPenIcon: UserPenIcon,
  logOutIcon: LogOutIcon,
  creditCard: CreditCard,
  bell: Bell,
  table: Table,
  sun: SunIcon,
  moon: MoonIcon,
  squareSplitHorizontal: SquareSplitHorizontalIcon,
  search: SearchIcon,
  shoppingBag: ShoppingBagIcon,
  users: UsersIcon,
  mailPlusIcon: MailPlusIcon,
  userPlusIcon: UserPlusIcon,
  arrowDownUp: ArrowDownUpIcon,
  cross: CrossIcon,
  x: XIcon,
  check: CheckIcon,
  chevronsLeft: ChevronsLeftIcon,
  chevronsRight: ChevronsRightIcon,
  plusCircle: PlusCircleIcon,
  calendar: CalendarIcon,
  settings: Settings2Icon,
  dotsVertical: EllipsisVerticalIcon,
  edit: EditIcon,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
