/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'atmosphere' | 'gatherings' | 'rituals' | 'moments' | 'house' | 'begin';

export interface EventStory {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  details: string[];
  imageUrl: string;
  category: string;
}

export interface RitualItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  imageUrl: string;
}

export interface MomentItem {
  id: string;
  title: string;
  location: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface MenuItem {
  name: string;
  nameJa?: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  titleJa?: string;
  items: MenuItem[];
}

export interface EnquiryFormState {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  venue: string;
  message: string;
}
