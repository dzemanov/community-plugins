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
import { useShadowRootElements } from '@backstage/plugin-techdocs-react';
import { useEffect } from 'react';

/**
 * Props customizing the <ReportIssue /> Addon.
 *
 * @public
 */
export type ColorTitleProps = {
  /**
   * Color for titles
   */
  color?: string;
};

/**
 * Change color of titles
 *
 * @public
 */
export const ColorTitleAddon = ({ color = 'red' }: ColorTitleProps) => {
  const elements = useShadowRootElements(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

  useEffect(() => {
    if (elements) {
      elements.forEach(elem => {
        elem.style.color = color;
      });
    }
  }, [elements, color]);

  return null;
};
