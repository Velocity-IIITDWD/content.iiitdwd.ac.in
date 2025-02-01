import { type SchemaTypeDefinition } from 'sanity';
import { About } from './generalInfo/About';
import {
  descriptionStructure,
  linksStructure,
  seatStructure,
} from './academics/Admission';
import { boardOfGovernor } from './governanceAndAdministration/BoardOfGovernor';
import { cseDetail } from './academics/CSEAcademics';
import { campusData } from './studentLife/CampusData';
import { chairPerson } from './generalInfo/ChairPerson';
import { Credit } from './Credits';
import { dsaiDetail } from './academics/DSAIAcademics';
import { eceDetail } from './academics/ECEAcademics';
import { facilities } from './studentLife/Facilities';
import { former } from './newsAndUpdates/Former';
import { formerBoardOfGovernor } from './newsAndUpdates/FormerBoardOfGovernor';
import { Jobs } from './generalInfo/Jobs';
import { krcData } from './researchDevelopment/KrcData';
import { krcDataTel } from './researchDevelopment/KrcDataTel';
import { krcDataTelFull } from './researchDevelopment/KrcDataTelFull';
import { FacultyAdvisor, Issues, Member, Team } from './studentLife/Magazine';
import { Club } from './studentLife/Members';
import { NIRF } from './reportsAndRankings/Nirf';
import {
  research,
  researchAdvertisement,
} from './researchDevelopment/Research';
import { senate } from './governanceAndAdministration/Senate';
import { staff } from './academics/Staff';
import { visitor } from './generalInfo/Visitor';
import { Faculty } from './academics/Faculty';
import { announcementType } from './newsAndUpdates/Announcement';
import { Tender } from './newsAndUpdates/Tenders';
import { AnnualReport } from './reportsAndRankings/Annual_reports';
import { Gallery } from './governanceAndAdministration/Gallery';
import { EventInfo } from './studentLife/Events';
import { MainCarouselImage, ProgramCards, ProgramsType } from './home/HomePage';
import {
  ContactCategory,
  ContactData,
  ContactInf,
} from './generalInfo/ContactInfo';
import { building_and_works } from './newsAndUpdates/building_and_works';
import { cgc } from './cgc/cgc';
import { finance } from './generalInfo/Finance';
import { student_coordinators } from './studentLife/student_coordinators';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    research,
    researchAdvertisement,
    campusData,
    facilities,
    krcData,
    krcDataTel,
    krcDataTelFull,
    Faculty,
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
    AnnualReport,
    ContactInf,
    ContactCategory,
    ContactData,
    EventInfo,
    Gallery,
    MainCarouselImage,
    ProgramCards,
    ProgramsType,
    building_and_works,
    cgc,
    finance,
    student_coordinators,
  ],
};
