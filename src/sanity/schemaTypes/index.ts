/* eslint-disable @typescript-eslint/no-unused-vars */
import { type SchemaTypeDefinition } from 'sanity'

import {facultyType} from './facultyType'
import { About, coreValues, directorMessage, mission } from './About'
import { courseStructure,
   creditStructure } from './Academics'
import { dateStructure,
   descriptionStructure,
   linksStructure,
   linkStructure,
   seatStructure } from './Admission'
import { announcementType } from './Announcement'
import { chairperson } from './ChairPerson'
import { boardOfGovernor } from './BoardOfGovernor'
import { former } from './Former'
import { senate } from './Senate'
import { staff } from './Staff'
import { visitor } from './Visitor'
import { profile, profileGroup } from './Profile'
import { img } from './Image'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facultyType,
    creditStructure,
    courseStructure,
    profile,
    profileGroup,
    senate,
    staff,
    chairperson,
    former,
    visitor,
    boardOfGovernor,
    announcementType,
    linkStructure,
    linksStructure,
    seatStructure,
    dateStructure,
    descriptionStructure,
    img,
    mission,
    coreValues,
    directorMessage,
    About,
  ],
}
