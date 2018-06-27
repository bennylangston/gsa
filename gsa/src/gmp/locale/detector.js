/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2016 - 2018 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import BrowserDetector from 'i18next-browser-languagedetector';

import logger from '../log';

import {LANGUAGE_KEY} from './store';

const log = logger.getLogger('gmp.locale.detector');

const DEFAULT_OPTIONS = {
    // use url querystring and browser settings for language detection
    order: ['querystring', 'localStorage', 'navigator'],
    // use url?lang=de as querystring
    lookupQuerystring: 'lang',
    lookupLocalStorage: LANGUAGE_KEY,
    // don't let BrowserDetector set language in localStorage
    // we want to be able to use navigator instead of localStorage always
    caches: [],
};

class LanguageDetector extends BrowserDetector {

  static type = 'languageDetector';

  constructor(services, options) {
    super(services, {...DEFAULT_OPTIONS, ...options});
  }

  detect(...options) {
    const lang = super.detect(...options);

    log.debug('Detected language', lang);
    return lang;
  }
}

export default LanguageDetector;

// vim: set ts=2 sw=2 tw=80: