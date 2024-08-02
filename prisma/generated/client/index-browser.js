
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  role: 'role',
  name: 'name',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  address: 'address',
  desc: 'desc',
  social_media: 'social_media',
  email: 'email',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  locationStand: 'locationStand'
};

exports.Prisma.RequirementScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  min_age: 'min_age',
  max_age: 'max_age',
  gender: 'gender',
  position: 'position',
  desc_job: 'desc_job',
  skill: 'skill',
  keyword: 'keyword',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RequirementEducationScalarFieldEnum = {
  id: 'id',
  requirement_id: 'requirement_id',
  degree: 'degree',
  grade: 'grade',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  major: 'major'
};

exports.Prisma.JobFairScalarFieldEnum = {
  id: 'id',
  name: 'name',
  start: 'start',
  end: 'end',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StandScalarFieldEnum = {
  id: 'id',
  job_fair_id: 'job_fair_id',
  number: 'number',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RentScalarFieldEnum = {
  id: 'id',
  stand_id: 'stand_id',
  company_id: 'company_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CVScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  address: 'address',
  email: 'email',
  gender: 'gender',
  phone: 'phone',
  birth_date: 'birth_date',
  social_media: 'social_media',
  desc: 'desc',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  name: 'name',
  skill: 'skill'
};

exports.Prisma.AchievementScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  name: 'name',
  provider: 'provider',
  year: 'year'
};

exports.Prisma.ExperienceScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  name: 'name',
  description: 'description'
};

exports.Prisma.CVRequirementScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  requirement_id: 'requirement_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EducationScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  name: 'name',
  degree: 'degree',
  major: 'major',
  address: 'address',
  start_at: 'start_at',
  end_at: 'end_at',
  grade: 'grade',
  desc: 'desc',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WorkExperienceScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  name: 'name',
  position: 'position',
  start_at: 'start_at',
  end_at: 'end_at',
  address: 'address',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  desc: 'desc'
};

exports.Prisma.CertificateScalarFieldEnum = {
  id: 'id',
  cv_id: 'cv_id',
  name: 'name',
  image: 'image',
  desc: 'desc',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  Panitia: 'Panitia',
  Pelamar: 'Pelamar'
};

exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.Prisma.ModelName = {
  User: 'User',
  Company: 'Company',
  Requirement: 'Requirement',
  RequirementEducation: 'RequirementEducation',
  JobFair: 'JobFair',
  Stand: 'Stand',
  Rent: 'Rent',
  CV: 'CV',
  Skills: 'Skills',
  Achievement: 'Achievement',
  Experience: 'Experience',
  CVRequirement: 'CVRequirement',
  Education: 'Education',
  WorkExperience: 'WorkExperience',
  Certificate: 'Certificate'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
