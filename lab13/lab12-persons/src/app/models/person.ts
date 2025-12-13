export interface Address {
  city?: string;
  street?: string;
  postCode?: string;
}

export interface Person {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: Address;
}

/* ===== HAL (Spring Data REST) ===== */

export interface HalLink {
  href: string;
}

export interface PersonResource extends Person {
  _links: {
    self: HalLink;
  };
}

export interface PersonsHalResponse {
  _embedded?: {
    persons: PersonResource[];
  };
}
