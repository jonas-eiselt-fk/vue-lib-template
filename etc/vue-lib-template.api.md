## API Report File for "vue-lib-template"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

// @public (undocumented)
export const BaseInput: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

// @public (undocumented)
export const ExtendedInput: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

// @public (undocumented)
export const FooOptions: DefineComponent<ExtractPropTypes<    {
node: {
type: PropType<{
tag: string;
label: string;
description: string;
}>;
required: true;
};
}>, {}, {
tag: string;
label: string;
description: string;
}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
node: {
type: PropType<{
tag: string;
label: string;
description: string;
}>;
required: true;
};
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

// (No @packageDocumentation comment for this package)

```
