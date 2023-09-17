import { AdditionalServiceInterface } from 'interfaces/additional-service';
import { PaymentPlanInterface } from 'interfaces/payment-plan';
import { VideoInterface } from 'interfaces/video';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  additional_service?: AdditionalServiceInterface[];
  payment_plan?: PaymentPlanInterface[];
  video?: VideoInterface[];
  user?: UserInterface;
  _count?: {
    additional_service?: number;
    payment_plan?: number;
    video?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
