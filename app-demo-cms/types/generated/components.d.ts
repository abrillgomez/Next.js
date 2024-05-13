import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonsButtonPrimary extends Schema.Component {
  collectionName: 'components_buttons_button_primaries';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buttons.button-primary': ButtonsButtonPrimary;
    }
  }
}
