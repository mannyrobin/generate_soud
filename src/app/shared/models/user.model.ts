import { CouponModel } from './coupon.model';

export class UserModel {
  id: number;
  uid: number;
  active: string;
  address: string;
  avatar: string;
  birth: string;
  branch_id: string;
  city_id: string;
  comment: string;
  created_at: string;
  created_by: string;
  deleted_by: string;
  email: string;
  email_verified_at: string;
  emp_status: string;
  empcode: string;
  empcodeLink: string;
  invitedCode: string;
  invitedLink: string;
  invitedLinkName: string;
  last_login: string;
  last_name: string;
  name: string;
  parentLink: string;
  parent_id: string;
  password: string;
  phone: string;
  remember_token: string;
  role: string;
  role_id: string;
  rolename: string;
  trash: string;
  unique_id: string;
  updated_at: string;
  coupons: CouponModel[];

  constructor (data: Partial<UserModel> = {}) {
    Object.assign(this, data, {
      coupons: data && data.coupons ? data.coupons.map(it => new CouponModel(it)) : [],
    });
  }
}
