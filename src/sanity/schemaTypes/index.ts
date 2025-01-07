import { type SchemaTypeDefinition } from 'sanity'
import {facultyType} from './facultyType'
import { About } from './About'
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
import { cseDetail } from './CSEAcademics'
import { eceDetail } from './ECEAcademics'
import { dsaiDetail } from './DSAIAcademics'
import { cseCredit } from './CreditCSE'
import { eceCredit } from './CreditECE'
import { dsaiCredit } from './CreditDSAI'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facultyType,
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
    cseDetail,
    eceDetail,
    dsaiDetail,
    cseCredit,
    eceCredit,
    dsaiCredit,
  ],
}
