import { type SchemaTypeDefinition } from 'sanity';
import { About } from './About';
import {
  descriptionStructure,
  linksStructure,
  seatStructure,
} from './Admission';
import { boardOfGovernor } from './governanceAndAdministration/BoardOfGovernor';
import { cseDetail } from './CSEAcademics';
import { campusData } from './CampusData';
import { chairPerson } from './ChairPerson';
import { Credit } from './Credits';
import { dsaiDetail } from './DSAIAcademics';
import { eceDetail } from './ECEAcademics';
import { facilities } from './Facilities';
import { former } from './Former';
import { formerBoardOfGovernor } from './FormerBoardOfGovernor';
import { Jobs } from './Jobs';
import { krcData } from './KrcData';
import { krcDataTel } from './KrcDataTel';
import { krcDataTelFull } from './KrcDataTelFull';
import { FacultyAdvisor, Issues, Member, Team } from './Magazine';
import { Club } from './Members';
import { NIRF } from './reportsAndRankings/Nirf';
import { research, advertisement } from './Research';
import { senate } from './governanceAndAdministration/Senate';
import { staff } from './Staff';
import { visitor } from './Visitor';
import { facultyType } from './facultyType';
import { announcementType } from './newsAndUpdates/Announcement';
import { Tender } from './newsAndUpdates/Tenders';

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
