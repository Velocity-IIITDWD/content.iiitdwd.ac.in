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
import { Jobs } from './Jobs';
import { Member, FacultyAdvisor, Team, Issues } from './Magazine';
import { Club } from './Members';
import { NIRF } from './Nirf';
import { Tender } from './Tenders';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facultyType,
    senate,
    staff,
    chairPerson,
    former,
    visitor,
    boardOfGovernor,
    announcementType,
    linksStructure,
    seatStructure,
    descriptionStructure,
    About,
    cseDetail,
    eceDetail,
    dsaiDetail,
    Credit,

    // Updated be me
    Jobs,
    Member,
    FacultyAdvisor,
    Team,
    Issues,
    Club,
    NIRF,
    Tender,
  ],
};
