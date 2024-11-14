import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface User {
  id: number;
  username: string;
  password?: string;
  verification_code?: string | null;
  verify: boolean;
  expires_at?: string | null;
  user_info_id: number;
  company_info_id: number;
  role_id: number;
}
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
  data: any;
  id: string
  User_id: number
  Area_type: String
  Name: string
  Address: string
  Image: Image
  description: string
  Area_status: string
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
 export  interface City {
  Id: string;
  Name: string;
  Districts: District[];
}

 export  interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

 export  interface Ward {
  Id: string;
  Name: string;
}

  export interface Product {
  Name: string;
  Description: string;
  Image: Image;
  product_code: string;
  Expiry_date: string; // Assuming this is a string representing the date
  Unit: string;
  Product_status: string;
  Product_date: string; // Assuming this is a string representing the date
  Product_type: number;
  Product_packing: string;
  qr_code: string; // Assuming qr_code is a URL or string
}


export interface Image {
  url: string
}

export interface FormData {
  Name: string;
  Address: string;
  Image: File | null;
  Description: string;
}

export interface FormDataPassword  {
  old_password?: string | undefined;
  new_password?: string | undefined;
  re_new_password: string;
};

export interface FormDataEditUser  {
 phone: string ;
 email: string;

};


export interface Company {
  province_code: string
  province_name: string
  districts: District[]
}

export interface District {
  district_code: string
  district_name: string
  wards: Ward[]
}

export interface Ward {
  code: string
  name: string
  name_en: string
  full_name: string
  full_name_en: string
  code_name: string
  district_code: string
  administrative_unit_id: number
}
export interface FormEditCompany {
 description: string; Company_name: string; district_code: string; wards_code: string; provinces_code: string; Address: string;
}
interface AnyPresentValue{
}
export interface FormCreateFarm {
Name: string; Address: string; description: string; Area_type: string; Image: AnyPresentValue;
}

export interface FormVerify {
  code:string
}
export interface UserInfo {
  id: number;
  Phone: number;
  email: string;
}

export interface Users {
  id: number;
  username: string;
  password: string;
  verification_code: string | null;
  verify: boolean;
  expires_at: string | null;
  user_info_id: number;
  company_info_id: number;
  role_id: number;
}

interface Data {
  userInfo: UserInfo;
  user: Users;
  token: string;
}