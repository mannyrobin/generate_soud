export class CouponModel {
  id: number;
  created_at: string;
  date_activated: string;
  date_expires: string;
  deleted_by: string;
  expires: string;
  number: string;
  pack: string;
  pack_id: string;
  packname: string;
  packprice: number;
  status: string;
  trash: string;
  updated_at: string;
  user_id: string;

  constructor (data: Partial<CouponModel> = {}) {
    Object.assign(this, data);
  }
}
