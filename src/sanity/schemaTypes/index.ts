import { type SchemaTypeDefinition } from 'sanity'
import {facultyType} from './facultyType'
import { About } from './About'
import { courseStructure,
    creditStructure } from './Academics'
import { 
    descriptionStructure,
    linksStructure,
    seatStructure } from './Admission'
import { announcementType } from './Announcement'
import { chairPerson } from './ChairPerson'
import { boardOfGovernor } from './BoardOfGovernor'
import { former } from './Former'
import { senate } from './Senate'
import { staff } from './Staff'
import { visitor } from './Visitor'
import { coreValues, directorMessage, mission, dateStructure,profile, profileGroup, img } from './CommonSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facultyType,
    creditStructure,
    courseStructure,
    profile,
    profileGroup,
    senate,
    staff,
    chairPerson,
    former,
    visitor,
    boardOfGovernor,
    announcementType,
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
