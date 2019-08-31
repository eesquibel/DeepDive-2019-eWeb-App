export interface Address {
  adr_line1: string;
  adr_line2: string;
  adr_city: string;
  adr_state: string;
  adr_post_code: string;
  readonly adr_country: string;
}
