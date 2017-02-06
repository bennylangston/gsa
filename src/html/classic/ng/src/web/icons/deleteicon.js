/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2017 Greenbone Networks GmbH
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

import React from 'react';

import _ from '../../locale.js';
import {is_defined} from '../../utils.js';

import Icon from './icon.js';

import SelectionType from '../selectiontype.js';

export const DeleteIcon = props => {
  let {selectionType, title, ...other} = props;
  if (!is_defined(title)) {
    if (selectionType === SelectionType.SELECTION_PAGE_CONTENTS) {
      title = _('Delete page contents');
    }
    else if (selectionType === SelectionType.SELECTION_USER) {
      title = _('Delete selection');
    }
    else if (selectionType === SelectionType.SELECTION_FILTER) {
      title = _('Delete all filtered');
    }
  }
  return (
    <Icon img="delete.svg"
      title={title} {...other}/>
  );
};

DeleteIcon.propTypes = {
  title: React.PropTypes.string,
  selectionType: React.PropTypes.string,
  onClick: React.PropTypes.func,
};


export default DeleteIcon;

// vim: set ts=2 sw=2 tw=80: