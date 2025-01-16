import { type SchemaTypeDefinition } from 'sanity';
import { facultyType } from './facultyType';
import { About } from './About';
import {
  descriptionStructure,
  linksStructure,
  seatStructure,
} from './Admission';
import { announcementType } from './Announcement';
import { chairPerson } from './ChairPerson';
import { boardOfGovernor } from './BoardOfGovernor';
import { former } from './Former';
import { senate } from './Senate';
import { staff } from './Staff';
import { visitor } from './Visitor';
import { cseDetail } from './CSEAcademics';
import { eceDetail } from './ECEAcademics';
import { dsaiDetail } from './DSAIAcademics';
import { Credit } from './Credits';
import { advertisement, research } from './Research';
import { formerBoardOfGovernor } from './FormerBoardOfGovernor';
import { campusData } from './CampusData';
import { facilities } from './Facilities';
import { krcData } from './KrcData';
import { krcDataTel } from './KrcDataTel';
import { krcDataTelFull } from './KrcDataTelFull';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    research,
    advertisement,
    campusData,
    facilities,
    krcData,
    krcDataTel,
    krcDataTelFull,
    facultyType,
    senate,
    staff,
    chairPerson,
    former,
    visitor,
    boardOfGovernor,
    formerBoardOfGovernor,
    announcementType,
    linksStructure,
    seatStructure,
    descriptionStructure,
    About,
    cseDetail,
    eceDetail,
    dsaiDetail,
    Credit,
  ],
};
