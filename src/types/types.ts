import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SubMenuItem {
  id: number;
  name: string;
  des: string;
  link: string;
}
export interface MenuItem {
  child: any;
  id: number;
  name: string;
  isSubMenu: boolean;
  subMenu: SubMenuItem[];
}

export type NavLinkProps = {
  id: number;
  url: string;
  label: string;
};

export type headerProps = {
  title: string;
  description?: string | null;
  navLinks?: NavLinkProps[];
};

export type motionProps = {
  children: ReactNode;
  idx?: number | string;
  className?: string;
};

export type faqType = {
  id: number;
  question: string;
  answer: string;
};

export type counterElementType = {
  style: string;
  counterNumber: number;
  sizeText?: string;
};

export interface TabOption {
  key: string;
  label: string;
}

export interface IconProps {
  className?: string;
  style?: any;
  onClick?: () => void;
}
//thunk
export interface Area {
  id: number
  User_id: number
  Area_type: number
  Name: string
  Address: string
  Image: Image
  description: string
  Area_status: number
}

export interface Image {
  id: string
  url: string
}
export interface TextState {
  loading: boolean;
  data: Area[]; // Đảm bảo kiểu dữ liệu đúng ở đây
  error: string;
}

export interface Ward {
  code: string;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
  district_code: string;
  administrative_unit_id: number;
}

export interface District {
  district_code: string;
  district_name: string;
  wards: Ward[];
}

export interface Province {
  province_code: string;
  province_name: string;
  districts: District[];
}

