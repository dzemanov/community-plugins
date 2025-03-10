/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  createTechDocsAddonExtension,
  TechDocsAddonLocations,
} from '@backstage/plugin-techdocs-react';
import { createPlugin } from '@backstage/core-plugin-api';
import { ColorTitleAddon, ColorTitleProps } from './ColorTitle';

export const techdocsModuleAddonColorTitlePlugin = createPlugin({
  id: 'techdocs-module-addon-color-title',
});

/**
 * TechDocs addon that lets you render color titles
 *
 * @public
 */
export const ColorTitle = techdocsModuleAddonColorTitlePlugin.provide(
  createTechDocsAddonExtension<ColorTitleProps>({
    name: 'ColorTitle',
    location: TechDocsAddonLocations.Content,
    component: ColorTitleAddon,
  }),
);
