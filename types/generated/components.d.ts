import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    description: '';
    displayName: 'features item';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_component_service_items';
  info: {
    description: '';
    displayName: 'service item';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneBanner extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_call_to_actions';
  info: {
    description: '';
    displayName: 'call to action';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneFeatures extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    features: Schema.Attribute.Component<'component.features', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_intros';
  info: {
    description: '';
    displayName: 'intro';
    icon: 'globe';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'rich text';
  };
  attributes: {
    rich_text: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'hashtag';
  };
  attributes: {
    meta_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.features': ComponentFeatures;
      'component.service-item': ComponentServiceItem;
      'dynamic-zone.banner': DynamicZoneBanner;
      'dynamic-zone.call-to-action': DynamicZoneCallToAction;
      'dynamic-zone.features': DynamicZoneFeatures;
      'shared.button': SharedButton;
      'shared.gallery': SharedGallery;
      'shared.intro': SharedIntro;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
