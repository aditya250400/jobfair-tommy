
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Requirement
 * 
 */
export type Requirement = $Result.DefaultSelection<Prisma.$RequirementPayload>
/**
 * Model RequirementEducation
 * 
 */
export type RequirementEducation = $Result.DefaultSelection<Prisma.$RequirementEducationPayload>
/**
 * Model JobFair
 * 
 */
export type JobFair = $Result.DefaultSelection<Prisma.$JobFairPayload>
/**
 * Model Stand
 * 
 */
export type Stand = $Result.DefaultSelection<Prisma.$StandPayload>
/**
 * Model Rent
 * 
 */
export type Rent = $Result.DefaultSelection<Prisma.$RentPayload>
/**
 * Model CV
 * 
 */
export type CV = $Result.DefaultSelection<Prisma.$CVPayload>
/**
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model CVRequirement
 * 
 */
export type CVRequirement = $Result.DefaultSelection<Prisma.$CVRequirementPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Panitia: 'Panitia',
  Pelamar: 'Pelamar'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.requirement`: Exposes CRUD operations for the **Requirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requirements
    * const requirements = await prisma.requirement.findMany()
    * ```
    */
  get requirement(): Prisma.RequirementDelegate<ExtArgs>;

  /**
   * `prisma.requirementEducation`: Exposes CRUD operations for the **RequirementEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequirementEducations
    * const requirementEducations = await prisma.requirementEducation.findMany()
    * ```
    */
  get requirementEducation(): Prisma.RequirementEducationDelegate<ExtArgs>;

  /**
   * `prisma.jobFair`: Exposes CRUD operations for the **JobFair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobFairs
    * const jobFairs = await prisma.jobFair.findMany()
    * ```
    */
  get jobFair(): Prisma.JobFairDelegate<ExtArgs>;

  /**
   * `prisma.stand`: Exposes CRUD operations for the **Stand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stands
    * const stands = await prisma.stand.findMany()
    * ```
    */
  get stand(): Prisma.StandDelegate<ExtArgs>;

  /**
   * `prisma.rent`: Exposes CRUD operations for the **Rent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rents
    * const rents = await prisma.rent.findMany()
    * ```
    */
  get rent(): Prisma.RentDelegate<ExtArgs>;

  /**
   * `prisma.cV`: Exposes CRUD operations for the **CV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVS
    * const cVS = await prisma.cV.findMany()
    * ```
    */
  get cV(): Prisma.CVDelegate<ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs>;

  /**
   * `prisma.cVRequirement`: Exposes CRUD operations for the **CVRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVRequirements
    * const cVRequirements = await prisma.cVRequirement.findMany()
    * ```
    */
  get cVRequirement(): Prisma.CVRequirementDelegate<ExtArgs>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "company" | "requirement" | "requirementEducation" | "jobFair" | "stand" | "rent" | "cV" | "skills" | "achievement" | "experience" | "cVRequirement" | "education" | "workExperience" | "certificate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Requirement: {
        payload: Prisma.$RequirementPayload<ExtArgs>
        fields: Prisma.RequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          findFirst: {
            args: Prisma.RequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          findMany: {
            args: Prisma.RequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>[]
          }
          create: {
            args: Prisma.RequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          createMany: {
            args: Prisma.RequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>[]
          }
          delete: {
            args: Prisma.RequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          update: {
            args: Prisma.RequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          deleteMany: {
            args: Prisma.RequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          aggregate: {
            args: Prisma.RequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirement>
          }
          groupBy: {
            args: Prisma.RequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementCountAggregateOutputType> | number
          }
        }
      }
      RequirementEducation: {
        payload: Prisma.$RequirementEducationPayload<ExtArgs>
        fields: Prisma.RequirementEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>
          }
          findFirst: {
            args: Prisma.RequirementEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>
          }
          findMany: {
            args: Prisma.RequirementEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>[]
          }
          create: {
            args: Prisma.RequirementEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>
          }
          createMany: {
            args: Prisma.RequirementEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementEducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>[]
          }
          delete: {
            args: Prisma.RequirementEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>
          }
          update: {
            args: Prisma.RequirementEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>
          }
          deleteMany: {
            args: Prisma.RequirementEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequirementEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementEducationPayload>
          }
          aggregate: {
            args: Prisma.RequirementEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirementEducation>
          }
          groupBy: {
            args: Prisma.RequirementEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementEducationCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementEducationCountAggregateOutputType> | number
          }
        }
      }
      JobFair: {
        payload: Prisma.$JobFairPayload<ExtArgs>
        fields: Prisma.JobFairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>
          }
          findFirst: {
            args: Prisma.JobFairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>
          }
          findMany: {
            args: Prisma.JobFairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>[]
          }
          create: {
            args: Prisma.JobFairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>
          }
          createMany: {
            args: Prisma.JobFairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobFairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>[]
          }
          delete: {
            args: Prisma.JobFairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>
          }
          update: {
            args: Prisma.JobFairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>
          }
          deleteMany: {
            args: Prisma.JobFairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobFairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobFairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobFairPayload>
          }
          aggregate: {
            args: Prisma.JobFairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobFair>
          }
          groupBy: {
            args: Prisma.JobFairGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobFairGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobFairCountArgs<ExtArgs>
            result: $Utils.Optional<JobFairCountAggregateOutputType> | number
          }
        }
      }
      Stand: {
        payload: Prisma.$StandPayload<ExtArgs>
        fields: Prisma.StandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>
          }
          findFirst: {
            args: Prisma.StandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>
          }
          findMany: {
            args: Prisma.StandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>[]
          }
          create: {
            args: Prisma.StandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>
          }
          createMany: {
            args: Prisma.StandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>[]
          }
          delete: {
            args: Prisma.StandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>
          }
          update: {
            args: Prisma.StandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>
          }
          deleteMany: {
            args: Prisma.StandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandPayload>
          }
          aggregate: {
            args: Prisma.StandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStand>
          }
          groupBy: {
            args: Prisma.StandGroupByArgs<ExtArgs>
            result: $Utils.Optional<StandGroupByOutputType>[]
          }
          count: {
            args: Prisma.StandCountArgs<ExtArgs>
            result: $Utils.Optional<StandCountAggregateOutputType> | number
          }
        }
      }
      Rent: {
        payload: Prisma.$RentPayload<ExtArgs>
        fields: Prisma.RentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          findFirst: {
            args: Prisma.RentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          findMany: {
            args: Prisma.RentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>[]
          }
          create: {
            args: Prisma.RentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          createMany: {
            args: Prisma.RentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>[]
          }
          delete: {
            args: Prisma.RentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          update: {
            args: Prisma.RentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          deleteMany: {
            args: Prisma.RentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          aggregate: {
            args: Prisma.RentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRent>
          }
          groupBy: {
            args: Prisma.RentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentCountArgs<ExtArgs>
            result: $Utils.Optional<RentCountAggregateOutputType> | number
          }
        }
      }
      CV: {
        payload: Prisma.$CVPayload<ExtArgs>
        fields: Prisma.CVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          findFirst: {
            args: Prisma.CVFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          findMany: {
            args: Prisma.CVFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>[]
          }
          create: {
            args: Prisma.CVCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          createMany: {
            args: Prisma.CVCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CVCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>[]
          }
          delete: {
            args: Prisma.CVDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          update: {
            args: Prisma.CVUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          deleteMany: {
            args: Prisma.CVDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          aggregate: {
            args: Prisma.CVAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCV>
          }
          groupBy: {
            args: Prisma.CVGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVCountArgs<ExtArgs>
            result: $Utils.Optional<CVCountAggregateOutputType> | number
          }
        }
      }
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      CVRequirement: {
        payload: Prisma.$CVRequirementPayload<ExtArgs>
        fields: Prisma.CVRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>
          }
          findFirst: {
            args: Prisma.CVRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>
          }
          findMany: {
            args: Prisma.CVRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>[]
          }
          create: {
            args: Prisma.CVRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>
          }
          createMany: {
            args: Prisma.CVRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CVRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>[]
          }
          delete: {
            args: Prisma.CVRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>
          }
          update: {
            args: Prisma.CVRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>
          }
          deleteMany: {
            args: Prisma.CVRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVRequirementPayload>
          }
          aggregate: {
            args: Prisma.CVRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCVRequirement>
          }
          groupBy: {
            args: Prisma.CVRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<CVRequirementCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cvs: number
    companies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvs?: boolean | UserCountOutputTypeCountCvsArgs
    companies?: boolean | UserCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    rents: number
    requirements: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rents?: boolean | CompanyCountOutputTypeCountRentsArgs
    requirements?: boolean | CompanyCountOutputTypeCountRequirementsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementWhereInput
  }


  /**
   * Count Type RequirementCountOutputType
   */

  export type RequirementCountOutputType = {
    cv_requirements: number
    education: number
  }

  export type RequirementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv_requirements?: boolean | RequirementCountOutputTypeCountCv_requirementsArgs
    education?: boolean | RequirementCountOutputTypeCountEducationArgs
  }

  // Custom InputTypes
  /**
   * RequirementCountOutputType without action
   */
  export type RequirementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementCountOutputType
     */
    select?: RequirementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequirementCountOutputType without action
   */
  export type RequirementCountOutputTypeCountCv_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVRequirementWhereInput
  }

  /**
   * RequirementCountOutputType without action
   */
  export type RequirementCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementEducationWhereInput
  }


  /**
   * Count Type JobFairCountOutputType
   */

  export type JobFairCountOutputType = {
    stands: number
  }

  export type JobFairCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stands?: boolean | JobFairCountOutputTypeCountStandsArgs
  }

  // Custom InputTypes
  /**
   * JobFairCountOutputType without action
   */
  export type JobFairCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFairCountOutputType
     */
    select?: JobFairCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobFairCountOutputType without action
   */
  export type JobFairCountOutputTypeCountStandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandWhereInput
  }


  /**
   * Count Type StandCountOutputType
   */

  export type StandCountOutputType = {
    rents: number
  }

  export type StandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rents?: boolean | StandCountOutputTypeCountRentsArgs
  }

  // Custom InputTypes
  /**
   * StandCountOutputType without action
   */
  export type StandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandCountOutputType
     */
    select?: StandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StandCountOutputType without action
   */
  export type StandCountOutputTypeCountRentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
  }


  /**
   * Count Type CVCountOutputType
   */

  export type CVCountOutputType = {
    achievement: number
    cv_requirements: number
    certificates: number
    educations: number
    experience: number
    skill: number
    workExperiences: number
  }

  export type CVCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | CVCountOutputTypeCountAchievementArgs
    cv_requirements?: boolean | CVCountOutputTypeCountCv_requirementsArgs
    certificates?: boolean | CVCountOutputTypeCountCertificatesArgs
    educations?: boolean | CVCountOutputTypeCountEducationsArgs
    experience?: boolean | CVCountOutputTypeCountExperienceArgs
    skill?: boolean | CVCountOutputTypeCountSkillArgs
    workExperiences?: boolean | CVCountOutputTypeCountWorkExperiencesArgs
  }

  // Custom InputTypes
  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVCountOutputType
     */
    select?: CVCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountCv_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVRequirementWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    name: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cvs?: boolean | User$cvsArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvs?: boolean | User$cvsArgs<ExtArgs>
    companies?: boolean | User$companiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cvs: Prisma.$CVPayload<ExtArgs>[]
      companies: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.Role
      name: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cvs<T extends User$cvsArgs<ExtArgs> = {}>(args?: Subset<T, User$cvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findMany"> | Null>
    companies<T extends User$companiesArgs<ExtArgs> = {}>(args?: Subset<T, User$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.cvs
   */
  export type User$cvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    where?: CVWhereInput
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    cursor?: CVWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * User.companies
   */
  export type User$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    address: string | null
    desc: string | null
    social_media: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    locationStand: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    address: string | null
    desc: string | null
    social_media: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    locationStand: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    address: number
    desc: number
    social_media: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    locationStand: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    address?: true
    desc?: true
    social_media?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    locationStand?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    address?: true
    desc?: true
    social_media?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    locationStand?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    address?: true
    desc?: true
    social_media?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    locationStand?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    user_id: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date
    locationStand: string | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    address?: boolean
    desc?: boolean
    social_media?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationStand?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rents?: boolean | Company$rentsArgs<ExtArgs>
    requirements?: boolean | Company$requirementsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    address?: boolean
    desc?: boolean
    social_media?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationStand?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    address?: boolean
    desc?: boolean
    social_media?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationStand?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rents?: boolean | Company$rentsArgs<ExtArgs>
    requirements?: boolean | Company$requirementsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rents: Prisma.$RentPayload<ExtArgs>[]
      requirements: Prisma.$RequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      address: string
      desc: string
      social_media: string
      email: string
      phone: string
      createdAt: Date
      updatedAt: Date
      locationStand: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rents<T extends Company$rentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$rentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findMany"> | Null>
    requirements<T extends Company$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, Company$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly user_id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly desc: FieldRef<"Company", 'String'>
    readonly social_media: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
    readonly locationStand: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.rents
   */
  export type Company$rentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    where?: RentWhereInput
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    cursor?: RentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Company.requirements
   */
  export type Company$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    where?: RequirementWhereInput
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    cursor?: RequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Requirement
   */

  export type AggregateRequirement = {
    _count: RequirementCountAggregateOutputType | null
    _avg: RequirementAvgAggregateOutputType | null
    _sum: RequirementSumAggregateOutputType | null
    _min: RequirementMinAggregateOutputType | null
    _max: RequirementMaxAggregateOutputType | null
  }

  export type RequirementAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_age: number | null
    max_age: number | null
  }

  export type RequirementSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_age: number | null
    max_age: number | null
  }

  export type RequirementMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_age: number | null
    max_age: number | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_age: number | null
    max_age: number | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementCountAggregateOutputType = {
    id: number
    company_id: number
    min_age: number
    max_age: number
    gender: number
    position: number
    desc_job: number
    skill: number
    keyword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequirementAvgAggregateInputType = {
    id?: true
    company_id?: true
    min_age?: true
    max_age?: true
  }

  export type RequirementSumAggregateInputType = {
    id?: true
    company_id?: true
    min_age?: true
    max_age?: true
  }

  export type RequirementMinAggregateInputType = {
    id?: true
    company_id?: true
    min_age?: true
    max_age?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementMaxAggregateInputType = {
    id?: true
    company_id?: true
    min_age?: true
    max_age?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementCountAggregateInputType = {
    id?: true
    company_id?: true
    min_age?: true
    max_age?: true
    gender?: true
    position?: true
    desc_job?: true
    skill?: true
    keyword?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requirement to aggregate.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requirements
    **/
    _count?: true | RequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementMaxAggregateInputType
  }

  export type GetRequirementAggregateType<T extends RequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirement[P]>
      : GetScalarType<T[P], AggregateRequirement[P]>
  }




  export type RequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementWhereInput
    orderBy?: RequirementOrderByWithAggregationInput | RequirementOrderByWithAggregationInput[]
    by: RequirementScalarFieldEnum[] | RequirementScalarFieldEnum
    having?: RequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementCountAggregateInputType | true
    _avg?: RequirementAvgAggregateInputType
    _sum?: RequirementSumAggregateInputType
    _min?: RequirementMinAggregateInputType
    _max?: RequirementMaxAggregateInputType
  }

  export type RequirementGroupByOutputType = {
    id: number
    company_id: number
    min_age: number
    max_age: number
    gender: string[]
    position: string
    desc_job: string[]
    skill: string[]
    keyword: string[]
    createdAt: Date
    updatedAt: Date
    _count: RequirementCountAggregateOutputType | null
    _avg: RequirementAvgAggregateOutputType | null
    _sum: RequirementSumAggregateOutputType | null
    _min: RequirementMinAggregateOutputType | null
    _max: RequirementMaxAggregateOutputType | null
  }

  type GetRequirementGroupByPayload<T extends RequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementGroupByOutputType[P]>
        }
      >
    >


  export type RequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    position?: boolean
    desc_job?: boolean
    skill?: boolean
    keyword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv_requirements?: boolean | Requirement$cv_requirementsArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    education?: boolean | Requirement$educationArgs<ExtArgs>
    _count?: boolean | RequirementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirement"]>

  export type RequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    position?: boolean
    desc_job?: boolean
    skill?: boolean
    keyword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirement"]>

  export type RequirementSelectScalar = {
    id?: boolean
    company_id?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    position?: boolean
    desc_job?: boolean
    skill?: boolean
    keyword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv_requirements?: boolean | Requirement$cv_requirementsArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    education?: boolean | Requirement$educationArgs<ExtArgs>
    _count?: boolean | RequirementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $RequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Requirement"
    objects: {
      cv_requirements: Prisma.$CVRequirementPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs>
      education: Prisma.$RequirementEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      min_age: number
      max_age: number
      gender: string[]
      position: string
      desc_job: string[]
      skill: string[]
      keyword: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requirement"]>
    composites: {}
  }

  type RequirementGetPayload<S extends boolean | null | undefined | RequirementDefaultArgs> = $Result.GetResult<Prisma.$RequirementPayload, S>

  type RequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequirementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequirementCountAggregateInputType | true
    }

  export interface RequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Requirement'], meta: { name: 'Requirement' } }
    /**
     * Find zero or one Requirement that matches the filter.
     * @param {RequirementFindUniqueArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementFindUniqueArgs>(args: SelectSubset<T, RequirementFindUniqueArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Requirement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RequirementFindUniqueOrThrowArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Requirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementFindFirstArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementFindFirstArgs>(args?: SelectSubset<T, RequirementFindFirstArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Requirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementFindFirstOrThrowArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Requirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requirements
     * const requirements = await prisma.requirement.findMany()
     * 
     * // Get first 10 Requirements
     * const requirements = await prisma.requirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementWithIdOnly = await prisma.requirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementFindManyArgs>(args?: SelectSubset<T, RequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Requirement.
     * @param {RequirementCreateArgs} args - Arguments to create a Requirement.
     * @example
     * // Create one Requirement
     * const Requirement = await prisma.requirement.create({
     *   data: {
     *     // ... data to create a Requirement
     *   }
     * })
     * 
     */
    create<T extends RequirementCreateArgs>(args: SelectSubset<T, RequirementCreateArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Requirements.
     * @param {RequirementCreateManyArgs} args - Arguments to create many Requirements.
     * @example
     * // Create many Requirements
     * const requirement = await prisma.requirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementCreateManyArgs>(args?: SelectSubset<T, RequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requirements and returns the data saved in the database.
     * @param {RequirementCreateManyAndReturnArgs} args - Arguments to create many Requirements.
     * @example
     * // Create many Requirements
     * const requirement = await prisma.requirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requirements and only return the `id`
     * const requirementWithIdOnly = await prisma.requirement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Requirement.
     * @param {RequirementDeleteArgs} args - Arguments to delete one Requirement.
     * @example
     * // Delete one Requirement
     * const Requirement = await prisma.requirement.delete({
     *   where: {
     *     // ... filter to delete one Requirement
     *   }
     * })
     * 
     */
    delete<T extends RequirementDeleteArgs>(args: SelectSubset<T, RequirementDeleteArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Requirement.
     * @param {RequirementUpdateArgs} args - Arguments to update one Requirement.
     * @example
     * // Update one Requirement
     * const requirement = await prisma.requirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementUpdateArgs>(args: SelectSubset<T, RequirementUpdateArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Requirements.
     * @param {RequirementDeleteManyArgs} args - Arguments to filter Requirements to delete.
     * @example
     * // Delete a few Requirements
     * const { count } = await prisma.requirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementDeleteManyArgs>(args?: SelectSubset<T, RequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requirements
     * const requirement = await prisma.requirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementUpdateManyArgs>(args: SelectSubset<T, RequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Requirement.
     * @param {RequirementUpsertArgs} args - Arguments to update or create a Requirement.
     * @example
     * // Update or create a Requirement
     * const requirement = await prisma.requirement.upsert({
     *   create: {
     *     // ... data to create a Requirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requirement we want to update
     *   }
     * })
     */
    upsert<T extends RequirementUpsertArgs>(args: SelectSubset<T, RequirementUpsertArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementCountArgs} args - Arguments to filter Requirements to count.
     * @example
     * // Count the number of Requirements
     * const count = await prisma.requirement.count({
     *   where: {
     *     // ... the filter for the Requirements we want to count
     *   }
     * })
    **/
    count<T extends RequirementCountArgs>(
      args?: Subset<T, RequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementAggregateArgs>(args: Subset<T, RequirementAggregateArgs>): Prisma.PrismaPromise<GetRequirementAggregateType<T>>

    /**
     * Group by Requirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementGroupByArgs['orderBy'] }
        : { orderBy?: RequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Requirement model
   */
  readonly fields: RequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Requirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv_requirements<T extends Requirement$cv_requirementsArgs<ExtArgs> = {}>(args?: Subset<T, Requirement$cv_requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findMany"> | Null>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    education<T extends Requirement$educationArgs<ExtArgs> = {}>(args?: Subset<T, Requirement$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Requirement model
   */ 
  interface RequirementFieldRefs {
    readonly id: FieldRef<"Requirement", 'Int'>
    readonly company_id: FieldRef<"Requirement", 'Int'>
    readonly min_age: FieldRef<"Requirement", 'Int'>
    readonly max_age: FieldRef<"Requirement", 'Int'>
    readonly gender: FieldRef<"Requirement", 'String[]'>
    readonly position: FieldRef<"Requirement", 'String'>
    readonly desc_job: FieldRef<"Requirement", 'String[]'>
    readonly skill: FieldRef<"Requirement", 'String[]'>
    readonly keyword: FieldRef<"Requirement", 'String[]'>
    readonly createdAt: FieldRef<"Requirement", 'DateTime'>
    readonly updatedAt: FieldRef<"Requirement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Requirement findUnique
   */
  export type RequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement findUniqueOrThrow
   */
  export type RequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement findFirst
   */
  export type RequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requirements.
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requirements.
     */
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Requirement findFirstOrThrow
   */
  export type RequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requirements.
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requirements.
     */
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Requirement findMany
   */
  export type RequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requirements.
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Requirement create
   */
  export type RequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a Requirement.
     */
    data: XOR<RequirementCreateInput, RequirementUncheckedCreateInput>
  }

  /**
   * Requirement createMany
   */
  export type RequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requirements.
     */
    data: RequirementCreateManyInput | RequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Requirement createManyAndReturn
   */
  export type RequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Requirements.
     */
    data: RequirementCreateManyInput | RequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Requirement update
   */
  export type RequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a Requirement.
     */
    data: XOR<RequirementUpdateInput, RequirementUncheckedUpdateInput>
    /**
     * Choose, which Requirement to update.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement updateMany
   */
  export type RequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requirements.
     */
    data: XOR<RequirementUpdateManyMutationInput, RequirementUncheckedUpdateManyInput>
    /**
     * Filter which Requirements to update
     */
    where?: RequirementWhereInput
  }

  /**
   * Requirement upsert
   */
  export type RequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the Requirement to update in case it exists.
     */
    where: RequirementWhereUniqueInput
    /**
     * In case the Requirement found by the `where` argument doesn't exist, create a new Requirement with this data.
     */
    create: XOR<RequirementCreateInput, RequirementUncheckedCreateInput>
    /**
     * In case the Requirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementUpdateInput, RequirementUncheckedUpdateInput>
  }

  /**
   * Requirement delete
   */
  export type RequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter which Requirement to delete.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement deleteMany
   */
  export type RequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requirements to delete
     */
    where?: RequirementWhereInput
  }

  /**
   * Requirement.cv_requirements
   */
  export type Requirement$cv_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    where?: CVRequirementWhereInput
    orderBy?: CVRequirementOrderByWithRelationInput | CVRequirementOrderByWithRelationInput[]
    cursor?: CVRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVRequirementScalarFieldEnum | CVRequirementScalarFieldEnum[]
  }

  /**
   * Requirement.education
   */
  export type Requirement$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    where?: RequirementEducationWhereInput
    orderBy?: RequirementEducationOrderByWithRelationInput | RequirementEducationOrderByWithRelationInput[]
    cursor?: RequirementEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequirementEducationScalarFieldEnum | RequirementEducationScalarFieldEnum[]
  }

  /**
   * Requirement without action
   */
  export type RequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
  }


  /**
   * Model RequirementEducation
   */

  export type AggregateRequirementEducation = {
    _count: RequirementEducationCountAggregateOutputType | null
    _avg: RequirementEducationAvgAggregateOutputType | null
    _sum: RequirementEducationSumAggregateOutputType | null
    _min: RequirementEducationMinAggregateOutputType | null
    _max: RequirementEducationMaxAggregateOutputType | null
  }

  export type RequirementEducationAvgAggregateOutputType = {
    id: number | null
    requirement_id: number | null
    grade: number | null
  }

  export type RequirementEducationSumAggregateOutputType = {
    id: number | null
    requirement_id: number | null
    grade: number | null
  }

  export type RequirementEducationMinAggregateOutputType = {
    id: number | null
    requirement_id: number | null
    degree: string | null
    grade: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type RequirementEducationMaxAggregateOutputType = {
    id: number | null
    requirement_id: number | null
    degree: string | null
    grade: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type RequirementEducationCountAggregateOutputType = {
    id: number
    requirement_id: number
    degree: number
    grade: number
    createdAt: number
    updateAt: number
    major: number
    _all: number
  }


  export type RequirementEducationAvgAggregateInputType = {
    id?: true
    requirement_id?: true
    grade?: true
  }

  export type RequirementEducationSumAggregateInputType = {
    id?: true
    requirement_id?: true
    grade?: true
  }

  export type RequirementEducationMinAggregateInputType = {
    id?: true
    requirement_id?: true
    degree?: true
    grade?: true
    createdAt?: true
    updateAt?: true
  }

  export type RequirementEducationMaxAggregateInputType = {
    id?: true
    requirement_id?: true
    degree?: true
    grade?: true
    createdAt?: true
    updateAt?: true
  }

  export type RequirementEducationCountAggregateInputType = {
    id?: true
    requirement_id?: true
    degree?: true
    grade?: true
    createdAt?: true
    updateAt?: true
    major?: true
    _all?: true
  }

  export type RequirementEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementEducation to aggregate.
     */
    where?: RequirementEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementEducations to fetch.
     */
    orderBy?: RequirementEducationOrderByWithRelationInput | RequirementEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequirementEducations
    **/
    _count?: true | RequirementEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementEducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementEducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementEducationMaxAggregateInputType
  }

  export type GetRequirementEducationAggregateType<T extends RequirementEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirementEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirementEducation[P]>
      : GetScalarType<T[P], AggregateRequirementEducation[P]>
  }




  export type RequirementEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementEducationWhereInput
    orderBy?: RequirementEducationOrderByWithAggregationInput | RequirementEducationOrderByWithAggregationInput[]
    by: RequirementEducationScalarFieldEnum[] | RequirementEducationScalarFieldEnum
    having?: RequirementEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementEducationCountAggregateInputType | true
    _avg?: RequirementEducationAvgAggregateInputType
    _sum?: RequirementEducationSumAggregateInputType
    _min?: RequirementEducationMinAggregateInputType
    _max?: RequirementEducationMaxAggregateInputType
  }

  export type RequirementEducationGroupByOutputType = {
    id: number
    requirement_id: number
    degree: string
    grade: number
    createdAt: Date
    updateAt: Date
    major: string[]
    _count: RequirementEducationCountAggregateOutputType | null
    _avg: RequirementEducationAvgAggregateOutputType | null
    _sum: RequirementEducationSumAggregateOutputType | null
    _min: RequirementEducationMinAggregateOutputType | null
    _max: RequirementEducationMaxAggregateOutputType | null
  }

  type GetRequirementEducationGroupByPayload<T extends RequirementEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementEducationGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementEducationGroupByOutputType[P]>
        }
      >
    >


  export type RequirementEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requirement_id?: boolean
    degree?: boolean
    grade?: boolean
    createdAt?: boolean
    updateAt?: boolean
    major?: boolean
    Requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirementEducation"]>

  export type RequirementEducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requirement_id?: boolean
    degree?: boolean
    grade?: boolean
    createdAt?: boolean
    updateAt?: boolean
    major?: boolean
    Requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirementEducation"]>

  export type RequirementEducationSelectScalar = {
    id?: boolean
    requirement_id?: boolean
    degree?: boolean
    grade?: boolean
    createdAt?: boolean
    updateAt?: boolean
    major?: boolean
  }

  export type RequirementEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }
  export type RequirementEducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }

  export type $RequirementEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequirementEducation"
    objects: {
      Requirement: Prisma.$RequirementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requirement_id: number
      degree: string
      grade: number
      createdAt: Date
      updateAt: Date
      major: string[]
    }, ExtArgs["result"]["requirementEducation"]>
    composites: {}
  }

  type RequirementEducationGetPayload<S extends boolean | null | undefined | RequirementEducationDefaultArgs> = $Result.GetResult<Prisma.$RequirementEducationPayload, S>

  type RequirementEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequirementEducationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequirementEducationCountAggregateInputType | true
    }

  export interface RequirementEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequirementEducation'], meta: { name: 'RequirementEducation' } }
    /**
     * Find zero or one RequirementEducation that matches the filter.
     * @param {RequirementEducationFindUniqueArgs} args - Arguments to find a RequirementEducation
     * @example
     * // Get one RequirementEducation
     * const requirementEducation = await prisma.requirementEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementEducationFindUniqueArgs>(args: SelectSubset<T, RequirementEducationFindUniqueArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RequirementEducation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RequirementEducationFindUniqueOrThrowArgs} args - Arguments to find a RequirementEducation
     * @example
     * // Get one RequirementEducation
     * const requirementEducation = await prisma.requirementEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RequirementEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationFindFirstArgs} args - Arguments to find a RequirementEducation
     * @example
     * // Get one RequirementEducation
     * const requirementEducation = await prisma.requirementEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementEducationFindFirstArgs>(args?: SelectSubset<T, RequirementEducationFindFirstArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RequirementEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationFindFirstOrThrowArgs} args - Arguments to find a RequirementEducation
     * @example
     * // Get one RequirementEducation
     * const requirementEducation = await prisma.requirementEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RequirementEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequirementEducations
     * const requirementEducations = await prisma.requirementEducation.findMany()
     * 
     * // Get first 10 RequirementEducations
     * const requirementEducations = await prisma.requirementEducation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementEducationWithIdOnly = await prisma.requirementEducation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementEducationFindManyArgs>(args?: SelectSubset<T, RequirementEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RequirementEducation.
     * @param {RequirementEducationCreateArgs} args - Arguments to create a RequirementEducation.
     * @example
     * // Create one RequirementEducation
     * const RequirementEducation = await prisma.requirementEducation.create({
     *   data: {
     *     // ... data to create a RequirementEducation
     *   }
     * })
     * 
     */
    create<T extends RequirementEducationCreateArgs>(args: SelectSubset<T, RequirementEducationCreateArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RequirementEducations.
     * @param {RequirementEducationCreateManyArgs} args - Arguments to create many RequirementEducations.
     * @example
     * // Create many RequirementEducations
     * const requirementEducation = await prisma.requirementEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementEducationCreateManyArgs>(args?: SelectSubset<T, RequirementEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequirementEducations and returns the data saved in the database.
     * @param {RequirementEducationCreateManyAndReturnArgs} args - Arguments to create many RequirementEducations.
     * @example
     * // Create many RequirementEducations
     * const requirementEducation = await prisma.requirementEducation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequirementEducations and only return the `id`
     * const requirementEducationWithIdOnly = await prisma.requirementEducation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementEducationCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementEducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RequirementEducation.
     * @param {RequirementEducationDeleteArgs} args - Arguments to delete one RequirementEducation.
     * @example
     * // Delete one RequirementEducation
     * const RequirementEducation = await prisma.requirementEducation.delete({
     *   where: {
     *     // ... filter to delete one RequirementEducation
     *   }
     * })
     * 
     */
    delete<T extends RequirementEducationDeleteArgs>(args: SelectSubset<T, RequirementEducationDeleteArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RequirementEducation.
     * @param {RequirementEducationUpdateArgs} args - Arguments to update one RequirementEducation.
     * @example
     * // Update one RequirementEducation
     * const requirementEducation = await prisma.requirementEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementEducationUpdateArgs>(args: SelectSubset<T, RequirementEducationUpdateArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RequirementEducations.
     * @param {RequirementEducationDeleteManyArgs} args - Arguments to filter RequirementEducations to delete.
     * @example
     * // Delete a few RequirementEducations
     * const { count } = await prisma.requirementEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementEducationDeleteManyArgs>(args?: SelectSubset<T, RequirementEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequirementEducations
     * const requirementEducation = await prisma.requirementEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementEducationUpdateManyArgs>(args: SelectSubset<T, RequirementEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequirementEducation.
     * @param {RequirementEducationUpsertArgs} args - Arguments to update or create a RequirementEducation.
     * @example
     * // Update or create a RequirementEducation
     * const requirementEducation = await prisma.requirementEducation.upsert({
     *   create: {
     *     // ... data to create a RequirementEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequirementEducation we want to update
     *   }
     * })
     */
    upsert<T extends RequirementEducationUpsertArgs>(args: SelectSubset<T, RequirementEducationUpsertArgs<ExtArgs>>): Prisma__RequirementEducationClient<$Result.GetResult<Prisma.$RequirementEducationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RequirementEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationCountArgs} args - Arguments to filter RequirementEducations to count.
     * @example
     * // Count the number of RequirementEducations
     * const count = await prisma.requirementEducation.count({
     *   where: {
     *     // ... the filter for the RequirementEducations we want to count
     *   }
     * })
    **/
    count<T extends RequirementEducationCountArgs>(
      args?: Subset<T, RequirementEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequirementEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementEducationAggregateArgs>(args: Subset<T, RequirementEducationAggregateArgs>): Prisma.PrismaPromise<GetRequirementEducationAggregateType<T>>

    /**
     * Group by RequirementEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementEducationGroupByArgs['orderBy'] }
        : { orderBy?: RequirementEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequirementEducation model
   */
  readonly fields: RequirementEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequirementEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Requirement<T extends RequirementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequirementDefaultArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequirementEducation model
   */ 
  interface RequirementEducationFieldRefs {
    readonly id: FieldRef<"RequirementEducation", 'Int'>
    readonly requirement_id: FieldRef<"RequirementEducation", 'Int'>
    readonly degree: FieldRef<"RequirementEducation", 'String'>
    readonly grade: FieldRef<"RequirementEducation", 'Float'>
    readonly createdAt: FieldRef<"RequirementEducation", 'DateTime'>
    readonly updateAt: FieldRef<"RequirementEducation", 'DateTime'>
    readonly major: FieldRef<"RequirementEducation", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * RequirementEducation findUnique
   */
  export type RequirementEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * Filter, which RequirementEducation to fetch.
     */
    where: RequirementEducationWhereUniqueInput
  }

  /**
   * RequirementEducation findUniqueOrThrow
   */
  export type RequirementEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * Filter, which RequirementEducation to fetch.
     */
    where: RequirementEducationWhereUniqueInput
  }

  /**
   * RequirementEducation findFirst
   */
  export type RequirementEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * Filter, which RequirementEducation to fetch.
     */
    where?: RequirementEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementEducations to fetch.
     */
    orderBy?: RequirementEducationOrderByWithRelationInput | RequirementEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementEducations.
     */
    cursor?: RequirementEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementEducations.
     */
    distinct?: RequirementEducationScalarFieldEnum | RequirementEducationScalarFieldEnum[]
  }

  /**
   * RequirementEducation findFirstOrThrow
   */
  export type RequirementEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * Filter, which RequirementEducation to fetch.
     */
    where?: RequirementEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementEducations to fetch.
     */
    orderBy?: RequirementEducationOrderByWithRelationInput | RequirementEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementEducations.
     */
    cursor?: RequirementEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementEducations.
     */
    distinct?: RequirementEducationScalarFieldEnum | RequirementEducationScalarFieldEnum[]
  }

  /**
   * RequirementEducation findMany
   */
  export type RequirementEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * Filter, which RequirementEducations to fetch.
     */
    where?: RequirementEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementEducations to fetch.
     */
    orderBy?: RequirementEducationOrderByWithRelationInput | RequirementEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequirementEducations.
     */
    cursor?: RequirementEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementEducations.
     */
    skip?: number
    distinct?: RequirementEducationScalarFieldEnum | RequirementEducationScalarFieldEnum[]
  }

  /**
   * RequirementEducation create
   */
  export type RequirementEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a RequirementEducation.
     */
    data: XOR<RequirementEducationCreateInput, RequirementEducationUncheckedCreateInput>
  }

  /**
   * RequirementEducation createMany
   */
  export type RequirementEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequirementEducations.
     */
    data: RequirementEducationCreateManyInput | RequirementEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementEducation createManyAndReturn
   */
  export type RequirementEducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RequirementEducations.
     */
    data: RequirementEducationCreateManyInput | RequirementEducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequirementEducation update
   */
  export type RequirementEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a RequirementEducation.
     */
    data: XOR<RequirementEducationUpdateInput, RequirementEducationUncheckedUpdateInput>
    /**
     * Choose, which RequirementEducation to update.
     */
    where: RequirementEducationWhereUniqueInput
  }

  /**
   * RequirementEducation updateMany
   */
  export type RequirementEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequirementEducations.
     */
    data: XOR<RequirementEducationUpdateManyMutationInput, RequirementEducationUncheckedUpdateManyInput>
    /**
     * Filter which RequirementEducations to update
     */
    where?: RequirementEducationWhereInput
  }

  /**
   * RequirementEducation upsert
   */
  export type RequirementEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the RequirementEducation to update in case it exists.
     */
    where: RequirementEducationWhereUniqueInput
    /**
     * In case the RequirementEducation found by the `where` argument doesn't exist, create a new RequirementEducation with this data.
     */
    create: XOR<RequirementEducationCreateInput, RequirementEducationUncheckedCreateInput>
    /**
     * In case the RequirementEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementEducationUpdateInput, RequirementEducationUncheckedUpdateInput>
  }

  /**
   * RequirementEducation delete
   */
  export type RequirementEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
    /**
     * Filter which RequirementEducation to delete.
     */
    where: RequirementEducationWhereUniqueInput
  }

  /**
   * RequirementEducation deleteMany
   */
  export type RequirementEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementEducations to delete
     */
    where?: RequirementEducationWhereInput
  }

  /**
   * RequirementEducation without action
   */
  export type RequirementEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementEducation
     */
    select?: RequirementEducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementEducationInclude<ExtArgs> | null
  }


  /**
   * Model JobFair
   */

  export type AggregateJobFair = {
    _count: JobFairCountAggregateOutputType | null
    _avg: JobFairAvgAggregateOutputType | null
    _sum: JobFairSumAggregateOutputType | null
    _min: JobFairMinAggregateOutputType | null
    _max: JobFairMaxAggregateOutputType | null
  }

  export type JobFairAvgAggregateOutputType = {
    id: number | null
  }

  export type JobFairSumAggregateOutputType = {
    id: number | null
  }

  export type JobFairMinAggregateOutputType = {
    id: number | null
    name: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobFairMaxAggregateOutputType = {
    id: number | null
    name: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobFairCountAggregateOutputType = {
    id: number
    name: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobFairAvgAggregateInputType = {
    id?: true
  }

  export type JobFairSumAggregateInputType = {
    id?: true
  }

  export type JobFairMinAggregateInputType = {
    id?: true
    name?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobFairMaxAggregateInputType = {
    id?: true
    name?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobFairCountAggregateInputType = {
    id?: true
    name?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobFairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobFair to aggregate.
     */
    where?: JobFairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobFairs to fetch.
     */
    orderBy?: JobFairOrderByWithRelationInput | JobFairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobFairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobFairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobFairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobFairs
    **/
    _count?: true | JobFairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobFairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobFairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobFairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobFairMaxAggregateInputType
  }

  export type GetJobFairAggregateType<T extends JobFairAggregateArgs> = {
        [P in keyof T & keyof AggregateJobFair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobFair[P]>
      : GetScalarType<T[P], AggregateJobFair[P]>
  }




  export type JobFairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobFairWhereInput
    orderBy?: JobFairOrderByWithAggregationInput | JobFairOrderByWithAggregationInput[]
    by: JobFairScalarFieldEnum[] | JobFairScalarFieldEnum
    having?: JobFairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobFairCountAggregateInputType | true
    _avg?: JobFairAvgAggregateInputType
    _sum?: JobFairSumAggregateInputType
    _min?: JobFairMinAggregateInputType
    _max?: JobFairMaxAggregateInputType
  }

  export type JobFairGroupByOutputType = {
    id: number
    name: string
    start: Date
    end: Date
    createdAt: Date
    updatedAt: Date
    _count: JobFairCountAggregateOutputType | null
    _avg: JobFairAvgAggregateOutputType | null
    _sum: JobFairSumAggregateOutputType | null
    _min: JobFairMinAggregateOutputType | null
    _max: JobFairMaxAggregateOutputType | null
  }

  type GetJobFairGroupByPayload<T extends JobFairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobFairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobFairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobFairGroupByOutputType[P]>
            : GetScalarType<T[P], JobFairGroupByOutputType[P]>
        }
      >
    >


  export type JobFairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stands?: boolean | JobFair$standsArgs<ExtArgs>
    _count?: boolean | JobFairCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobFair"]>

  export type JobFairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobFair"]>

  export type JobFairSelectScalar = {
    id?: boolean
    name?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobFairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stands?: boolean | JobFair$standsArgs<ExtArgs>
    _count?: boolean | JobFairCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobFairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobFairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobFair"
    objects: {
      stands: Prisma.$StandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      start: Date
      end: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobFair"]>
    composites: {}
  }

  type JobFairGetPayload<S extends boolean | null | undefined | JobFairDefaultArgs> = $Result.GetResult<Prisma.$JobFairPayload, S>

  type JobFairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFairFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobFairCountAggregateInputType | true
    }

  export interface JobFairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobFair'], meta: { name: 'JobFair' } }
    /**
     * Find zero or one JobFair that matches the filter.
     * @param {JobFairFindUniqueArgs} args - Arguments to find a JobFair
     * @example
     * // Get one JobFair
     * const jobFair = await prisma.jobFair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFairFindUniqueArgs>(args: SelectSubset<T, JobFairFindUniqueArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JobFair that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobFairFindUniqueOrThrowArgs} args - Arguments to find a JobFair
     * @example
     * // Get one JobFair
     * const jobFair = await prisma.jobFair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFairFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JobFair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairFindFirstArgs} args - Arguments to find a JobFair
     * @example
     * // Get one JobFair
     * const jobFair = await prisma.jobFair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFairFindFirstArgs>(args?: SelectSubset<T, JobFairFindFirstArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JobFair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairFindFirstOrThrowArgs} args - Arguments to find a JobFair
     * @example
     * // Get one JobFair
     * const jobFair = await prisma.jobFair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFairFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFairFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JobFairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobFairs
     * const jobFairs = await prisma.jobFair.findMany()
     * 
     * // Get first 10 JobFairs
     * const jobFairs = await prisma.jobFair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobFairWithIdOnly = await prisma.jobFair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFairFindManyArgs>(args?: SelectSubset<T, JobFairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JobFair.
     * @param {JobFairCreateArgs} args - Arguments to create a JobFair.
     * @example
     * // Create one JobFair
     * const JobFair = await prisma.jobFair.create({
     *   data: {
     *     // ... data to create a JobFair
     *   }
     * })
     * 
     */
    create<T extends JobFairCreateArgs>(args: SelectSubset<T, JobFairCreateArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JobFairs.
     * @param {JobFairCreateManyArgs} args - Arguments to create many JobFairs.
     * @example
     * // Create many JobFairs
     * const jobFair = await prisma.jobFair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobFairCreateManyArgs>(args?: SelectSubset<T, JobFairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobFairs and returns the data saved in the database.
     * @param {JobFairCreateManyAndReturnArgs} args - Arguments to create many JobFairs.
     * @example
     * // Create many JobFairs
     * const jobFair = await prisma.jobFair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobFairs and only return the `id`
     * const jobFairWithIdOnly = await prisma.jobFair.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobFairCreateManyAndReturnArgs>(args?: SelectSubset<T, JobFairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JobFair.
     * @param {JobFairDeleteArgs} args - Arguments to delete one JobFair.
     * @example
     * // Delete one JobFair
     * const JobFair = await prisma.jobFair.delete({
     *   where: {
     *     // ... filter to delete one JobFair
     *   }
     * })
     * 
     */
    delete<T extends JobFairDeleteArgs>(args: SelectSubset<T, JobFairDeleteArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JobFair.
     * @param {JobFairUpdateArgs} args - Arguments to update one JobFair.
     * @example
     * // Update one JobFair
     * const jobFair = await prisma.jobFair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobFairUpdateArgs>(args: SelectSubset<T, JobFairUpdateArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JobFairs.
     * @param {JobFairDeleteManyArgs} args - Arguments to filter JobFairs to delete.
     * @example
     * // Delete a few JobFairs
     * const { count } = await prisma.jobFair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobFairDeleteManyArgs>(args?: SelectSubset<T, JobFairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobFairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobFairs
     * const jobFair = await prisma.jobFair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobFairUpdateManyArgs>(args: SelectSubset<T, JobFairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobFair.
     * @param {JobFairUpsertArgs} args - Arguments to update or create a JobFair.
     * @example
     * // Update or create a JobFair
     * const jobFair = await prisma.jobFair.upsert({
     *   create: {
     *     // ... data to create a JobFair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobFair we want to update
     *   }
     * })
     */
    upsert<T extends JobFairUpsertArgs>(args: SelectSubset<T, JobFairUpsertArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JobFairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairCountArgs} args - Arguments to filter JobFairs to count.
     * @example
     * // Count the number of JobFairs
     * const count = await prisma.jobFair.count({
     *   where: {
     *     // ... the filter for the JobFairs we want to count
     *   }
     * })
    **/
    count<T extends JobFairCountArgs>(
      args?: Subset<T, JobFairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobFairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobFair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobFairAggregateArgs>(args: Subset<T, JobFairAggregateArgs>): Prisma.PrismaPromise<GetJobFairAggregateType<T>>

    /**
     * Group by JobFair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFairGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobFairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobFairGroupByArgs['orderBy'] }
        : { orderBy?: JobFairGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobFairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobFairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobFair model
   */
  readonly fields: JobFairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobFair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobFairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stands<T extends JobFair$standsArgs<ExtArgs> = {}>(args?: Subset<T, JobFair$standsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobFair model
   */ 
  interface JobFairFieldRefs {
    readonly id: FieldRef<"JobFair", 'Int'>
    readonly name: FieldRef<"JobFair", 'String'>
    readonly start: FieldRef<"JobFair", 'DateTime'>
    readonly end: FieldRef<"JobFair", 'DateTime'>
    readonly createdAt: FieldRef<"JobFair", 'DateTime'>
    readonly updatedAt: FieldRef<"JobFair", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobFair findUnique
   */
  export type JobFairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * Filter, which JobFair to fetch.
     */
    where: JobFairWhereUniqueInput
  }

  /**
   * JobFair findUniqueOrThrow
   */
  export type JobFairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * Filter, which JobFair to fetch.
     */
    where: JobFairWhereUniqueInput
  }

  /**
   * JobFair findFirst
   */
  export type JobFairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * Filter, which JobFair to fetch.
     */
    where?: JobFairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobFairs to fetch.
     */
    orderBy?: JobFairOrderByWithRelationInput | JobFairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobFairs.
     */
    cursor?: JobFairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobFairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobFairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobFairs.
     */
    distinct?: JobFairScalarFieldEnum | JobFairScalarFieldEnum[]
  }

  /**
   * JobFair findFirstOrThrow
   */
  export type JobFairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * Filter, which JobFair to fetch.
     */
    where?: JobFairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobFairs to fetch.
     */
    orderBy?: JobFairOrderByWithRelationInput | JobFairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobFairs.
     */
    cursor?: JobFairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobFairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobFairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobFairs.
     */
    distinct?: JobFairScalarFieldEnum | JobFairScalarFieldEnum[]
  }

  /**
   * JobFair findMany
   */
  export type JobFairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * Filter, which JobFairs to fetch.
     */
    where?: JobFairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobFairs to fetch.
     */
    orderBy?: JobFairOrderByWithRelationInput | JobFairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobFairs.
     */
    cursor?: JobFairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobFairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobFairs.
     */
    skip?: number
    distinct?: JobFairScalarFieldEnum | JobFairScalarFieldEnum[]
  }

  /**
   * JobFair create
   */
  export type JobFairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * The data needed to create a JobFair.
     */
    data: XOR<JobFairCreateInput, JobFairUncheckedCreateInput>
  }

  /**
   * JobFair createMany
   */
  export type JobFairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobFairs.
     */
    data: JobFairCreateManyInput | JobFairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobFair createManyAndReturn
   */
  export type JobFairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JobFairs.
     */
    data: JobFairCreateManyInput | JobFairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobFair update
   */
  export type JobFairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * The data needed to update a JobFair.
     */
    data: XOR<JobFairUpdateInput, JobFairUncheckedUpdateInput>
    /**
     * Choose, which JobFair to update.
     */
    where: JobFairWhereUniqueInput
  }

  /**
   * JobFair updateMany
   */
  export type JobFairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobFairs.
     */
    data: XOR<JobFairUpdateManyMutationInput, JobFairUncheckedUpdateManyInput>
    /**
     * Filter which JobFairs to update
     */
    where?: JobFairWhereInput
  }

  /**
   * JobFair upsert
   */
  export type JobFairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * The filter to search for the JobFair to update in case it exists.
     */
    where: JobFairWhereUniqueInput
    /**
     * In case the JobFair found by the `where` argument doesn't exist, create a new JobFair with this data.
     */
    create: XOR<JobFairCreateInput, JobFairUncheckedCreateInput>
    /**
     * In case the JobFair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobFairUpdateInput, JobFairUncheckedUpdateInput>
  }

  /**
   * JobFair delete
   */
  export type JobFairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
    /**
     * Filter which JobFair to delete.
     */
    where: JobFairWhereUniqueInput
  }

  /**
   * JobFair deleteMany
   */
  export type JobFairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobFairs to delete
     */
    where?: JobFairWhereInput
  }

  /**
   * JobFair.stands
   */
  export type JobFair$standsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    where?: StandWhereInput
    orderBy?: StandOrderByWithRelationInput | StandOrderByWithRelationInput[]
    cursor?: StandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandScalarFieldEnum | StandScalarFieldEnum[]
  }

  /**
   * JobFair without action
   */
  export type JobFairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobFair
     */
    select?: JobFairSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobFairInclude<ExtArgs> | null
  }


  /**
   * Model Stand
   */

  export type AggregateStand = {
    _count: StandCountAggregateOutputType | null
    _avg: StandAvgAggregateOutputType | null
    _sum: StandSumAggregateOutputType | null
    _min: StandMinAggregateOutputType | null
    _max: StandMaxAggregateOutputType | null
  }

  export type StandAvgAggregateOutputType = {
    id: number | null
    job_fair_id: number | null
    number: number | null
  }

  export type StandSumAggregateOutputType = {
    id: number | null
    job_fair_id: number | null
    number: number | null
  }

  export type StandMinAggregateOutputType = {
    id: number | null
    job_fair_id: number | null
    number: number | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandMaxAggregateOutputType = {
    id: number | null
    job_fair_id: number | null
    number: number | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandCountAggregateOutputType = {
    id: number
    job_fair_id: number
    number: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StandAvgAggregateInputType = {
    id?: true
    job_fair_id?: true
    number?: true
  }

  export type StandSumAggregateInputType = {
    id?: true
    job_fair_id?: true
    number?: true
  }

  export type StandMinAggregateInputType = {
    id?: true
    job_fair_id?: true
    number?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandMaxAggregateInputType = {
    id?: true
    job_fair_id?: true
    number?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandCountAggregateInputType = {
    id?: true
    job_fair_id?: true
    number?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stand to aggregate.
     */
    where?: StandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stands to fetch.
     */
    orderBy?: StandOrderByWithRelationInput | StandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stands
    **/
    _count?: true | StandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StandMaxAggregateInputType
  }

  export type GetStandAggregateType<T extends StandAggregateArgs> = {
        [P in keyof T & keyof AggregateStand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStand[P]>
      : GetScalarType<T[P], AggregateStand[P]>
  }




  export type StandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandWhereInput
    orderBy?: StandOrderByWithAggregationInput | StandOrderByWithAggregationInput[]
    by: StandScalarFieldEnum[] | StandScalarFieldEnum
    having?: StandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StandCountAggregateInputType | true
    _avg?: StandAvgAggregateInputType
    _sum?: StandSumAggregateInputType
    _min?: StandMinAggregateInputType
    _max?: StandMaxAggregateInputType
  }

  export type StandGroupByOutputType = {
    id: number
    job_fair_id: number
    number: number
    location: string
    createdAt: Date
    updatedAt: Date
    _count: StandCountAggregateOutputType | null
    _avg: StandAvgAggregateOutputType | null
    _sum: StandSumAggregateOutputType | null
    _min: StandMinAggregateOutputType | null
    _max: StandMaxAggregateOutputType | null
  }

  type GetStandGroupByPayload<T extends StandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandGroupByOutputType[P]>
            : GetScalarType<T[P], StandGroupByOutputType[P]>
        }
      >
    >


  export type StandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_fair_id?: boolean
    number?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rents?: boolean | Stand$rentsArgs<ExtArgs>
    jobFair?: boolean | JobFairDefaultArgs<ExtArgs>
    _count?: boolean | StandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stand"]>

  export type StandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_fair_id?: boolean
    number?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobFair?: boolean | JobFairDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stand"]>

  export type StandSelectScalar = {
    id?: boolean
    job_fair_id?: boolean
    number?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rents?: boolean | Stand$rentsArgs<ExtArgs>
    jobFair?: boolean | JobFairDefaultArgs<ExtArgs>
    _count?: boolean | StandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobFair?: boolean | JobFairDefaultArgs<ExtArgs>
  }

  export type $StandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stand"
    objects: {
      rents: Prisma.$RentPayload<ExtArgs>[]
      jobFair: Prisma.$JobFairPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      job_fair_id: number
      number: number
      location: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stand"]>
    composites: {}
  }

  type StandGetPayload<S extends boolean | null | undefined | StandDefaultArgs> = $Result.GetResult<Prisma.$StandPayload, S>

  type StandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StandCountAggregateInputType | true
    }

  export interface StandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stand'], meta: { name: 'Stand' } }
    /**
     * Find zero or one Stand that matches the filter.
     * @param {StandFindUniqueArgs} args - Arguments to find a Stand
     * @example
     * // Get one Stand
     * const stand = await prisma.stand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandFindUniqueArgs>(args: SelectSubset<T, StandFindUniqueArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stand that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StandFindUniqueOrThrowArgs} args - Arguments to find a Stand
     * @example
     * // Get one Stand
     * const stand = await prisma.stand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandFindUniqueOrThrowArgs>(args: SelectSubset<T, StandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandFindFirstArgs} args - Arguments to find a Stand
     * @example
     * // Get one Stand
     * const stand = await prisma.stand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandFindFirstArgs>(args?: SelectSubset<T, StandFindFirstArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandFindFirstOrThrowArgs} args - Arguments to find a Stand
     * @example
     * // Get one Stand
     * const stand = await prisma.stand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandFindFirstOrThrowArgs>(args?: SelectSubset<T, StandFindFirstOrThrowArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stands
     * const stands = await prisma.stand.findMany()
     * 
     * // Get first 10 Stands
     * const stands = await prisma.stand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const standWithIdOnly = await prisma.stand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StandFindManyArgs>(args?: SelectSubset<T, StandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stand.
     * @param {StandCreateArgs} args - Arguments to create a Stand.
     * @example
     * // Create one Stand
     * const Stand = await prisma.stand.create({
     *   data: {
     *     // ... data to create a Stand
     *   }
     * })
     * 
     */
    create<T extends StandCreateArgs>(args: SelectSubset<T, StandCreateArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stands.
     * @param {StandCreateManyArgs} args - Arguments to create many Stands.
     * @example
     * // Create many Stands
     * const stand = await prisma.stand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StandCreateManyArgs>(args?: SelectSubset<T, StandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stands and returns the data saved in the database.
     * @param {StandCreateManyAndReturnArgs} args - Arguments to create many Stands.
     * @example
     * // Create many Stands
     * const stand = await prisma.stand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stands and only return the `id`
     * const standWithIdOnly = await prisma.stand.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StandCreateManyAndReturnArgs>(args?: SelectSubset<T, StandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stand.
     * @param {StandDeleteArgs} args - Arguments to delete one Stand.
     * @example
     * // Delete one Stand
     * const Stand = await prisma.stand.delete({
     *   where: {
     *     // ... filter to delete one Stand
     *   }
     * })
     * 
     */
    delete<T extends StandDeleteArgs>(args: SelectSubset<T, StandDeleteArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stand.
     * @param {StandUpdateArgs} args - Arguments to update one Stand.
     * @example
     * // Update one Stand
     * const stand = await prisma.stand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StandUpdateArgs>(args: SelectSubset<T, StandUpdateArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stands.
     * @param {StandDeleteManyArgs} args - Arguments to filter Stands to delete.
     * @example
     * // Delete a few Stands
     * const { count } = await prisma.stand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StandDeleteManyArgs>(args?: SelectSubset<T, StandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stands
     * const stand = await prisma.stand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StandUpdateManyArgs>(args: SelectSubset<T, StandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stand.
     * @param {StandUpsertArgs} args - Arguments to update or create a Stand.
     * @example
     * // Update or create a Stand
     * const stand = await prisma.stand.upsert({
     *   create: {
     *     // ... data to create a Stand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stand we want to update
     *   }
     * })
     */
    upsert<T extends StandUpsertArgs>(args: SelectSubset<T, StandUpsertArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandCountArgs} args - Arguments to filter Stands to count.
     * @example
     * // Count the number of Stands
     * const count = await prisma.stand.count({
     *   where: {
     *     // ... the filter for the Stands we want to count
     *   }
     * })
    **/
    count<T extends StandCountArgs>(
      args?: Subset<T, StandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StandAggregateArgs>(args: Subset<T, StandAggregateArgs>): Prisma.PrismaPromise<GetStandAggregateType<T>>

    /**
     * Group by Stand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandGroupByArgs['orderBy'] }
        : { orderBy?: StandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stand model
   */
  readonly fields: StandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rents<T extends Stand$rentsArgs<ExtArgs> = {}>(args?: Subset<T, Stand$rentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findMany"> | Null>
    jobFair<T extends JobFairDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobFairDefaultArgs<ExtArgs>>): Prisma__JobFairClient<$Result.GetResult<Prisma.$JobFairPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stand model
   */ 
  interface StandFieldRefs {
    readonly id: FieldRef<"Stand", 'Int'>
    readonly job_fair_id: FieldRef<"Stand", 'Int'>
    readonly number: FieldRef<"Stand", 'Int'>
    readonly location: FieldRef<"Stand", 'String'>
    readonly createdAt: FieldRef<"Stand", 'DateTime'>
    readonly updatedAt: FieldRef<"Stand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stand findUnique
   */
  export type StandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * Filter, which Stand to fetch.
     */
    where: StandWhereUniqueInput
  }

  /**
   * Stand findUniqueOrThrow
   */
  export type StandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * Filter, which Stand to fetch.
     */
    where: StandWhereUniqueInput
  }

  /**
   * Stand findFirst
   */
  export type StandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * Filter, which Stand to fetch.
     */
    where?: StandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stands to fetch.
     */
    orderBy?: StandOrderByWithRelationInput | StandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stands.
     */
    cursor?: StandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stands.
     */
    distinct?: StandScalarFieldEnum | StandScalarFieldEnum[]
  }

  /**
   * Stand findFirstOrThrow
   */
  export type StandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * Filter, which Stand to fetch.
     */
    where?: StandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stands to fetch.
     */
    orderBy?: StandOrderByWithRelationInput | StandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stands.
     */
    cursor?: StandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stands.
     */
    distinct?: StandScalarFieldEnum | StandScalarFieldEnum[]
  }

  /**
   * Stand findMany
   */
  export type StandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * Filter, which Stands to fetch.
     */
    where?: StandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stands to fetch.
     */
    orderBy?: StandOrderByWithRelationInput | StandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stands.
     */
    cursor?: StandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stands.
     */
    skip?: number
    distinct?: StandScalarFieldEnum | StandScalarFieldEnum[]
  }

  /**
   * Stand create
   */
  export type StandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * The data needed to create a Stand.
     */
    data: XOR<StandCreateInput, StandUncheckedCreateInput>
  }

  /**
   * Stand createMany
   */
  export type StandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stands.
     */
    data: StandCreateManyInput | StandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stand createManyAndReturn
   */
  export type StandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stands.
     */
    data: StandCreateManyInput | StandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stand update
   */
  export type StandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * The data needed to update a Stand.
     */
    data: XOR<StandUpdateInput, StandUncheckedUpdateInput>
    /**
     * Choose, which Stand to update.
     */
    where: StandWhereUniqueInput
  }

  /**
   * Stand updateMany
   */
  export type StandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stands.
     */
    data: XOR<StandUpdateManyMutationInput, StandUncheckedUpdateManyInput>
    /**
     * Filter which Stands to update
     */
    where?: StandWhereInput
  }

  /**
   * Stand upsert
   */
  export type StandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * The filter to search for the Stand to update in case it exists.
     */
    where: StandWhereUniqueInput
    /**
     * In case the Stand found by the `where` argument doesn't exist, create a new Stand with this data.
     */
    create: XOR<StandCreateInput, StandUncheckedCreateInput>
    /**
     * In case the Stand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandUpdateInput, StandUncheckedUpdateInput>
  }

  /**
   * Stand delete
   */
  export type StandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
    /**
     * Filter which Stand to delete.
     */
    where: StandWhereUniqueInput
  }

  /**
   * Stand deleteMany
   */
  export type StandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stands to delete
     */
    where?: StandWhereInput
  }

  /**
   * Stand.rents
   */
  export type Stand$rentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    where?: RentWhereInput
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    cursor?: RentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Stand without action
   */
  export type StandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stand
     */
    select?: StandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandInclude<ExtArgs> | null
  }


  /**
   * Model Rent
   */

  export type AggregateRent = {
    _count: RentCountAggregateOutputType | null
    _avg: RentAvgAggregateOutputType | null
    _sum: RentSumAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  export type RentAvgAggregateOutputType = {
    id: number | null
    stand_id: number | null
    company_id: number | null
  }

  export type RentSumAggregateOutputType = {
    id: number | null
    stand_id: number | null
    company_id: number | null
  }

  export type RentMinAggregateOutputType = {
    id: number | null
    stand_id: number | null
    company_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentMaxAggregateOutputType = {
    id: number | null
    stand_id: number | null
    company_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentCountAggregateOutputType = {
    id: number
    stand_id: number
    company_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentAvgAggregateInputType = {
    id?: true
    stand_id?: true
    company_id?: true
  }

  export type RentSumAggregateInputType = {
    id?: true
    stand_id?: true
    company_id?: true
  }

  export type RentMinAggregateInputType = {
    id?: true
    stand_id?: true
    company_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentMaxAggregateInputType = {
    id?: true
    stand_id?: true
    company_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentCountAggregateInputType = {
    id?: true
    stand_id?: true
    company_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rent to aggregate.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rents
    **/
    _count?: true | RentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentMaxAggregateInputType
  }

  export type GetRentAggregateType<T extends RentAggregateArgs> = {
        [P in keyof T & keyof AggregateRent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRent[P]>
      : GetScalarType<T[P], AggregateRent[P]>
  }




  export type RentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
    orderBy?: RentOrderByWithAggregationInput | RentOrderByWithAggregationInput[]
    by: RentScalarFieldEnum[] | RentScalarFieldEnum
    having?: RentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentCountAggregateInputType | true
    _avg?: RentAvgAggregateInputType
    _sum?: RentSumAggregateInputType
    _min?: RentMinAggregateInputType
    _max?: RentMaxAggregateInputType
  }

  export type RentGroupByOutputType = {
    id: number
    stand_id: number
    company_id: number
    createdAt: Date
    updatedAt: Date
    _count: RentCountAggregateOutputType | null
    _avg: RentAvgAggregateOutputType | null
    _sum: RentSumAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  type GetRentGroupByPayload<T extends RentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentGroupByOutputType[P]>
            : GetScalarType<T[P], RentGroupByOutputType[P]>
        }
      >
    >


  export type RentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stand_id?: boolean
    company_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    stand?: boolean | StandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>

  export type RentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stand_id?: boolean
    company_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    stand?: boolean | StandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>

  export type RentSelectScalar = {
    id?: boolean
    stand_id?: boolean
    company_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    stand?: boolean | StandDefaultArgs<ExtArgs>
  }
  export type RentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    stand?: boolean | StandDefaultArgs<ExtArgs>
  }

  export type $RentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rent"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      stand: Prisma.$StandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stand_id: number
      company_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rent"]>
    composites: {}
  }

  type RentGetPayload<S extends boolean | null | undefined | RentDefaultArgs> = $Result.GetResult<Prisma.$RentPayload, S>

  type RentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RentCountAggregateInputType | true
    }

  export interface RentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rent'], meta: { name: 'Rent' } }
    /**
     * Find zero or one Rent that matches the filter.
     * @param {RentFindUniqueArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentFindUniqueArgs>(args: SelectSubset<T, RentFindUniqueArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RentFindUniqueOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentFindUniqueOrThrowArgs>(args: SelectSubset<T, RentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindFirstArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentFindFirstArgs>(args?: SelectSubset<T, RentFindFirstArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindFirstOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentFindFirstOrThrowArgs>(args?: SelectSubset<T, RentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rents
     * const rents = await prisma.rent.findMany()
     * 
     * // Get first 10 Rents
     * const rents = await prisma.rent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentWithIdOnly = await prisma.rent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentFindManyArgs>(args?: SelectSubset<T, RentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rent.
     * @param {RentCreateArgs} args - Arguments to create a Rent.
     * @example
     * // Create one Rent
     * const Rent = await prisma.rent.create({
     *   data: {
     *     // ... data to create a Rent
     *   }
     * })
     * 
     */
    create<T extends RentCreateArgs>(args: SelectSubset<T, RentCreateArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rents.
     * @param {RentCreateManyArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rent = await prisma.rent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentCreateManyArgs>(args?: SelectSubset<T, RentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rents and returns the data saved in the database.
     * @param {RentCreateManyAndReturnArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rent = await prisma.rent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rents and only return the `id`
     * const rentWithIdOnly = await prisma.rent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentCreateManyAndReturnArgs>(args?: SelectSubset<T, RentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rent.
     * @param {RentDeleteArgs} args - Arguments to delete one Rent.
     * @example
     * // Delete one Rent
     * const Rent = await prisma.rent.delete({
     *   where: {
     *     // ... filter to delete one Rent
     *   }
     * })
     * 
     */
    delete<T extends RentDeleteArgs>(args: SelectSubset<T, RentDeleteArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rent.
     * @param {RentUpdateArgs} args - Arguments to update one Rent.
     * @example
     * // Update one Rent
     * const rent = await prisma.rent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentUpdateArgs>(args: SelectSubset<T, RentUpdateArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rents.
     * @param {RentDeleteManyArgs} args - Arguments to filter Rents to delete.
     * @example
     * // Delete a few Rents
     * const { count } = await prisma.rent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentDeleteManyArgs>(args?: SelectSubset<T, RentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rents
     * const rent = await prisma.rent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentUpdateManyArgs>(args: SelectSubset<T, RentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rent.
     * @param {RentUpsertArgs} args - Arguments to update or create a Rent.
     * @example
     * // Update or create a Rent
     * const rent = await prisma.rent.upsert({
     *   create: {
     *     // ... data to create a Rent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rent we want to update
     *   }
     * })
     */
    upsert<T extends RentUpsertArgs>(args: SelectSubset<T, RentUpsertArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentCountArgs} args - Arguments to filter Rents to count.
     * @example
     * // Count the number of Rents
     * const count = await prisma.rent.count({
     *   where: {
     *     // ... the filter for the Rents we want to count
     *   }
     * })
    **/
    count<T extends RentCountArgs>(
      args?: Subset<T, RentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentAggregateArgs>(args: Subset<T, RentAggregateArgs>): Prisma.PrismaPromise<GetRentAggregateType<T>>

    /**
     * Group by Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentGroupByArgs['orderBy'] }
        : { orderBy?: RentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rent model
   */
  readonly fields: RentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stand<T extends StandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StandDefaultArgs<ExtArgs>>): Prisma__StandClient<$Result.GetResult<Prisma.$StandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rent model
   */ 
  interface RentFieldRefs {
    readonly id: FieldRef<"Rent", 'Int'>
    readonly stand_id: FieldRef<"Rent", 'Int'>
    readonly company_id: FieldRef<"Rent", 'Int'>
    readonly createdAt: FieldRef<"Rent", 'DateTime'>
    readonly updatedAt: FieldRef<"Rent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rent findUnique
   */
  export type RentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent findUniqueOrThrow
   */
  export type RentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent findFirst
   */
  export type RentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Rent findFirstOrThrow
   */
  export type RentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Rent findMany
   */
  export type RentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rents to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Rent create
   */
  export type RentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The data needed to create a Rent.
     */
    data: XOR<RentCreateInput, RentUncheckedCreateInput>
  }

  /**
   * Rent createMany
   */
  export type RentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rents.
     */
    data: RentCreateManyInput | RentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rent createManyAndReturn
   */
  export type RentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rents.
     */
    data: RentCreateManyInput | RentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rent update
   */
  export type RentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The data needed to update a Rent.
     */
    data: XOR<RentUpdateInput, RentUncheckedUpdateInput>
    /**
     * Choose, which Rent to update.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent updateMany
   */
  export type RentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rents.
     */
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyInput>
    /**
     * Filter which Rents to update
     */
    where?: RentWhereInput
  }

  /**
   * Rent upsert
   */
  export type RentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The filter to search for the Rent to update in case it exists.
     */
    where: RentWhereUniqueInput
    /**
     * In case the Rent found by the `where` argument doesn't exist, create a new Rent with this data.
     */
    create: XOR<RentCreateInput, RentUncheckedCreateInput>
    /**
     * In case the Rent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentUpdateInput, RentUncheckedUpdateInput>
  }

  /**
   * Rent delete
   */
  export type RentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter which Rent to delete.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent deleteMany
   */
  export type RentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rents to delete
     */
    where?: RentWhereInput
  }

  /**
   * Rent without action
   */
  export type RentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
  }


  /**
   * Model CV
   */

  export type AggregateCV = {
    _count: CVCountAggregateOutputType | null
    _avg: CVAvgAggregateOutputType | null
    _sum: CVSumAggregateOutputType | null
    _min: CVMinAggregateOutputType | null
    _max: CVMaxAggregateOutputType | null
  }

  export type CVAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CVSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CVMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    address: string | null
    email: string | null
    gender: $Enums.Gender | null
    phone: string | null
    birth_date: Date | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CVMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    address: string | null
    email: string | null
    gender: $Enums.Gender | null
    phone: string | null
    birth_date: Date | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CVCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    address: number
    email: number
    gender: number
    phone: number
    birth_date: number
    social_media: number
    desc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CVAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CVSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CVMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    address?: true
    email?: true
    gender?: true
    phone?: true
    birth_date?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CVMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    address?: true
    email?: true
    gender?: true
    phone?: true
    birth_date?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CVCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    address?: true
    email?: true
    gender?: true
    phone?: true
    birth_date?: true
    social_media?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CV to aggregate.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVS
    **/
    _count?: true | CVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVMaxAggregateInputType
  }

  export type GetCVAggregateType<T extends CVAggregateArgs> = {
        [P in keyof T & keyof AggregateCV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCV[P]>
      : GetScalarType<T[P], AggregateCV[P]>
  }




  export type CVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVWhereInput
    orderBy?: CVOrderByWithAggregationInput | CVOrderByWithAggregationInput[]
    by: CVScalarFieldEnum[] | CVScalarFieldEnum
    having?: CVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVCountAggregateInputType | true
    _avg?: CVAvgAggregateInputType
    _sum?: CVSumAggregateInputType
    _min?: CVMinAggregateInputType
    _max?: CVMaxAggregateInputType
  }

  export type CVGroupByOutputType = {
    id: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date
    social_media: string[]
    desc: string
    createdAt: Date
    updatedAt: Date
    _count: CVCountAggregateOutputType | null
    _avg: CVAvgAggregateOutputType | null
    _sum: CVSumAggregateOutputType | null
    _min: CVMinAggregateOutputType | null
    _max: CVMaxAggregateOutputType | null
  }

  type GetCVGroupByPayload<T extends CVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVGroupByOutputType[P]>
            : GetScalarType<T[P], CVGroupByOutputType[P]>
        }
      >
    >


  export type CVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    birth_date?: boolean
    social_media?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    achievement?: boolean | CV$achievementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    cv_requirements?: boolean | CV$cv_requirementsArgs<ExtArgs>
    certificates?: boolean | CV$certificatesArgs<ExtArgs>
    educations?: boolean | CV$educationsArgs<ExtArgs>
    experience?: boolean | CV$experienceArgs<ExtArgs>
    skill?: boolean | CV$skillArgs<ExtArgs>
    workExperiences?: boolean | CV$workExperiencesArgs<ExtArgs>
    _count?: boolean | CVCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cV"]>

  export type CVSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    birth_date?: boolean
    social_media?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cV"]>

  export type CVSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    birth_date?: boolean
    social_media?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CVInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | CV$achievementArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    cv_requirements?: boolean | CV$cv_requirementsArgs<ExtArgs>
    certificates?: boolean | CV$certificatesArgs<ExtArgs>
    educations?: boolean | CV$educationsArgs<ExtArgs>
    experience?: boolean | CV$experienceArgs<ExtArgs>
    skill?: boolean | CV$skillArgs<ExtArgs>
    workExperiences?: boolean | CV$workExperiencesArgs<ExtArgs>
    _count?: boolean | CVCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CVIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CV"
    objects: {
      achievement: Prisma.$AchievementPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      cv_requirements: Prisma.$CVRequirementPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      educations: Prisma.$EducationPayload<ExtArgs>[]
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      skill: Prisma.$SkillsPayload<ExtArgs>[]
      workExperiences: Prisma.$WorkExperiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      address: string
      email: string
      gender: $Enums.Gender
      phone: string
      birth_date: Date
      social_media: string[]
      desc: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cV"]>
    composites: {}
  }

  type CVGetPayload<S extends boolean | null | undefined | CVDefaultArgs> = $Result.GetResult<Prisma.$CVPayload, S>

  type CVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CVFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CVCountAggregateInputType | true
    }

  export interface CVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CV'], meta: { name: 'CV' } }
    /**
     * Find zero or one CV that matches the filter.
     * @param {CVFindUniqueArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVFindUniqueArgs>(args: SelectSubset<T, CVFindUniqueArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CV that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CVFindUniqueOrThrowArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVFindUniqueOrThrowArgs>(args: SelectSubset<T, CVFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindFirstArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVFindFirstArgs>(args?: SelectSubset<T, CVFindFirstArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindFirstOrThrowArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVFindFirstOrThrowArgs>(args?: SelectSubset<T, CVFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVS
     * const cVS = await prisma.cV.findMany()
     * 
     * // Get first 10 CVS
     * const cVS = await prisma.cV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVWithIdOnly = await prisma.cV.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVFindManyArgs>(args?: SelectSubset<T, CVFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CV.
     * @param {CVCreateArgs} args - Arguments to create a CV.
     * @example
     * // Create one CV
     * const CV = await prisma.cV.create({
     *   data: {
     *     // ... data to create a CV
     *   }
     * })
     * 
     */
    create<T extends CVCreateArgs>(args: SelectSubset<T, CVCreateArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CVS.
     * @param {CVCreateManyArgs} args - Arguments to create many CVS.
     * @example
     * // Create many CVS
     * const cV = await prisma.cV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVCreateManyArgs>(args?: SelectSubset<T, CVCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CVS and returns the data saved in the database.
     * @param {CVCreateManyAndReturnArgs} args - Arguments to create many CVS.
     * @example
     * // Create many CVS
     * const cV = await prisma.cV.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CVS and only return the `id`
     * const cVWithIdOnly = await prisma.cV.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CVCreateManyAndReturnArgs>(args?: SelectSubset<T, CVCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CV.
     * @param {CVDeleteArgs} args - Arguments to delete one CV.
     * @example
     * // Delete one CV
     * const CV = await prisma.cV.delete({
     *   where: {
     *     // ... filter to delete one CV
     *   }
     * })
     * 
     */
    delete<T extends CVDeleteArgs>(args: SelectSubset<T, CVDeleteArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CV.
     * @param {CVUpdateArgs} args - Arguments to update one CV.
     * @example
     * // Update one CV
     * const cV = await prisma.cV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVUpdateArgs>(args: SelectSubset<T, CVUpdateArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CVS.
     * @param {CVDeleteManyArgs} args - Arguments to filter CVS to delete.
     * @example
     * // Delete a few CVS
     * const { count } = await prisma.cV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVDeleteManyArgs>(args?: SelectSubset<T, CVDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVS
     * const cV = await prisma.cV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVUpdateManyArgs>(args: SelectSubset<T, CVUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CV.
     * @param {CVUpsertArgs} args - Arguments to update or create a CV.
     * @example
     * // Update or create a CV
     * const cV = await prisma.cV.upsert({
     *   create: {
     *     // ... data to create a CV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CV we want to update
     *   }
     * })
     */
    upsert<T extends CVUpsertArgs>(args: SelectSubset<T, CVUpsertArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVCountArgs} args - Arguments to filter CVS to count.
     * @example
     * // Count the number of CVS
     * const count = await prisma.cV.count({
     *   where: {
     *     // ... the filter for the CVS we want to count
     *   }
     * })
    **/
    count<T extends CVCountArgs>(
      args?: Subset<T, CVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVAggregateArgs>(args: Subset<T, CVAggregateArgs>): Prisma.PrismaPromise<GetCVAggregateType<T>>

    /**
     * Group by CV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVGroupByArgs['orderBy'] }
        : { orderBy?: CVGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CV model
   */
  readonly fields: CVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievement<T extends CV$achievementArgs<ExtArgs> = {}>(args?: Subset<T, CV$achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cv_requirements<T extends CV$cv_requirementsArgs<ExtArgs> = {}>(args?: Subset<T, CV$cv_requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findMany"> | Null>
    certificates<T extends CV$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, CV$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany"> | Null>
    educations<T extends CV$educationsArgs<ExtArgs> = {}>(args?: Subset<T, CV$educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany"> | Null>
    experience<T extends CV$experienceArgs<ExtArgs> = {}>(args?: Subset<T, CV$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany"> | Null>
    skill<T extends CV$skillArgs<ExtArgs> = {}>(args?: Subset<T, CV$skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany"> | Null>
    workExperiences<T extends CV$workExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, CV$workExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CV model
   */ 
  interface CVFieldRefs {
    readonly id: FieldRef<"CV", 'Int'>
    readonly user_id: FieldRef<"CV", 'Int'>
    readonly name: FieldRef<"CV", 'String'>
    readonly address: FieldRef<"CV", 'String'>
    readonly email: FieldRef<"CV", 'String'>
    readonly gender: FieldRef<"CV", 'Gender'>
    readonly phone: FieldRef<"CV", 'String'>
    readonly birth_date: FieldRef<"CV", 'DateTime'>
    readonly social_media: FieldRef<"CV", 'String[]'>
    readonly desc: FieldRef<"CV", 'String'>
    readonly createdAt: FieldRef<"CV", 'DateTime'>
    readonly updatedAt: FieldRef<"CV", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CV findUnique
   */
  export type CVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV findUniqueOrThrow
   */
  export type CVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV findFirst
   */
  export type CVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVS.
     */
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV findFirstOrThrow
   */
  export type CVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVS.
     */
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV findMany
   */
  export type CVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CVS to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV create
   */
  export type CVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The data needed to create a CV.
     */
    data: XOR<CVCreateInput, CVUncheckedCreateInput>
  }

  /**
   * CV createMany
   */
  export type CVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVS.
     */
    data: CVCreateManyInput | CVCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CV createManyAndReturn
   */
  export type CVCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CVS.
     */
    data: CVCreateManyInput | CVCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CV update
   */
  export type CVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The data needed to update a CV.
     */
    data: XOR<CVUpdateInput, CVUncheckedUpdateInput>
    /**
     * Choose, which CV to update.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV updateMany
   */
  export type CVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVS.
     */
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyInput>
    /**
     * Filter which CVS to update
     */
    where?: CVWhereInput
  }

  /**
   * CV upsert
   */
  export type CVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The filter to search for the CV to update in case it exists.
     */
    where: CVWhereUniqueInput
    /**
     * In case the CV found by the `where` argument doesn't exist, create a new CV with this data.
     */
    create: XOR<CVCreateInput, CVUncheckedCreateInput>
    /**
     * In case the CV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVUpdateInput, CVUncheckedUpdateInput>
  }

  /**
   * CV delete
   */
  export type CVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter which CV to delete.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV deleteMany
   */
  export type CVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVS to delete
     */
    where?: CVWhereInput
  }

  /**
   * CV.achievement
   */
  export type CV$achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * CV.cv_requirements
   */
  export type CV$cv_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    where?: CVRequirementWhereInput
    orderBy?: CVRequirementOrderByWithRelationInput | CVRequirementOrderByWithRelationInput[]
    cursor?: CVRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVRequirementScalarFieldEnum | CVRequirementScalarFieldEnum[]
  }

  /**
   * CV.certificates
   */
  export type CV$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * CV.educations
   */
  export type CV$educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * CV.experience
   */
  export type CV$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * CV.skill
   */
  export type CV$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    cursor?: SkillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * CV.workExperiences
   */
  export type CV$workExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    cursor?: WorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * CV without action
   */
  export type CVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
  }


  /**
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    cv_id: number
    name: number
    skill: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    skill?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: number
    cv_id: number
    name: string
    skill: string[]
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    skill?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    skill?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    cv_id?: boolean
    name?: boolean
    skill?: boolean
  }

  export type SkillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type SkillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $SkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      name: string
      skill: string[]
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillsFindUniqueArgs>(args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillsFindFirstArgs>(args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillsFindManyArgs>(args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends SkillsCreateArgs>(args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillsCreateManyArgs>(args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillsCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillsCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends SkillsDeleteArgs>(args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillsUpdateArgs>(args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillsDeleteManyArgs>(args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillsUpdateManyArgs>(args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends SkillsUpsertArgs>(args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skills model
   */ 
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'Int'>
    readonly cv_id: FieldRef<"Skills", 'Int'>
    readonly name: FieldRef<"Skills", 'String'>
    readonly skill: FieldRef<"Skills", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }

  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skills createManyAndReturn
   */
  export type SkillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
  }

  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }

  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
  }

  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type AchievementSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    provider: string | null
    year: string | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    provider: string | null
    year: string | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    cv_id: number
    name: number
    provider: number
    year: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type AchievementSumAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    provider?: true
    year?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    provider?: true
    year?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    provider?: true
    year?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: number
    cv_id: number
    name: string
    provider: string
    year: string
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    provider?: boolean
    year?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    provider?: boolean
    year?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    cv_id?: boolean
    name?: boolean
    provider?: boolean
    year?: boolean
  }

  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      name: string
      provider: string
      year: string
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */ 
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'Int'>
    readonly cv_id: FieldRef<"Achievement", 'Int'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly provider: FieldRef<"Achievement", 'String'>
    readonly year: FieldRef<"Achievement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    description: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    description: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    cv_id: number
    name: number
    description: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    description?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    description?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    cv_id: number
    name: string
    description: string
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    description?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    description?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    cv_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      name: string
      description: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */ 
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly cv_id: FieldRef<"Experience", 'Int'>
    readonly name: FieldRef<"Experience", 'String'>
    readonly description: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model CVRequirement
   */

  export type AggregateCVRequirement = {
    _count: CVRequirementCountAggregateOutputType | null
    _avg: CVRequirementAvgAggregateOutputType | null
    _sum: CVRequirementSumAggregateOutputType | null
    _min: CVRequirementMinAggregateOutputType | null
    _max: CVRequirementMaxAggregateOutputType | null
  }

  export type CVRequirementAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
    requirement_id: number | null
  }

  export type CVRequirementSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
    requirement_id: number | null
  }

  export type CVRequirementMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    requirement_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CVRequirementMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    requirement_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CVRequirementCountAggregateOutputType = {
    id: number
    cv_id: number
    requirement_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CVRequirementAvgAggregateInputType = {
    id?: true
    cv_id?: true
    requirement_id?: true
  }

  export type CVRequirementSumAggregateInputType = {
    id?: true
    cv_id?: true
    requirement_id?: true
  }

  export type CVRequirementMinAggregateInputType = {
    id?: true
    cv_id?: true
    requirement_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CVRequirementMaxAggregateInputType = {
    id?: true
    cv_id?: true
    requirement_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CVRequirementCountAggregateInputType = {
    id?: true
    cv_id?: true
    requirement_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CVRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVRequirement to aggregate.
     */
    where?: CVRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVRequirements to fetch.
     */
    orderBy?: CVRequirementOrderByWithRelationInput | CVRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVRequirements
    **/
    _count?: true | CVRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CVRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CVRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVRequirementMaxAggregateInputType
  }

  export type GetCVRequirementAggregateType<T extends CVRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateCVRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCVRequirement[P]>
      : GetScalarType<T[P], AggregateCVRequirement[P]>
  }




  export type CVRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVRequirementWhereInput
    orderBy?: CVRequirementOrderByWithAggregationInput | CVRequirementOrderByWithAggregationInput[]
    by: CVRequirementScalarFieldEnum[] | CVRequirementScalarFieldEnum
    having?: CVRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVRequirementCountAggregateInputType | true
    _avg?: CVRequirementAvgAggregateInputType
    _sum?: CVRequirementSumAggregateInputType
    _min?: CVRequirementMinAggregateInputType
    _max?: CVRequirementMaxAggregateInputType
  }

  export type CVRequirementGroupByOutputType = {
    id: number
    cv_id: number
    requirement_id: number
    createdAt: Date
    updatedAt: Date
    _count: CVRequirementCountAggregateOutputType | null
    _avg: CVRequirementAvgAggregateOutputType | null
    _sum: CVRequirementSumAggregateOutputType | null
    _min: CVRequirementMinAggregateOutputType | null
    _max: CVRequirementMaxAggregateOutputType | null
  }

  type GetCVRequirementGroupByPayload<T extends CVRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], CVRequirementGroupByOutputType[P]>
        }
      >
    >


  export type CVRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    requirement_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
    requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVRequirement"]>

  export type CVRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    requirement_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
    requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVRequirement"]>

  export type CVRequirementSelectScalar = {
    id?: boolean
    cv_id?: boolean
    requirement_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CVRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
    requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }
  export type CVRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
    requirement?: boolean | RequirementDefaultArgs<ExtArgs>
  }

  export type $CVRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CVRequirement"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
      requirement: Prisma.$RequirementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      requirement_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cVRequirement"]>
    composites: {}
  }

  type CVRequirementGetPayload<S extends boolean | null | undefined | CVRequirementDefaultArgs> = $Result.GetResult<Prisma.$CVRequirementPayload, S>

  type CVRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CVRequirementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CVRequirementCountAggregateInputType | true
    }

  export interface CVRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CVRequirement'], meta: { name: 'CVRequirement' } }
    /**
     * Find zero or one CVRequirement that matches the filter.
     * @param {CVRequirementFindUniqueArgs} args - Arguments to find a CVRequirement
     * @example
     * // Get one CVRequirement
     * const cVRequirement = await prisma.cVRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVRequirementFindUniqueArgs>(args: SelectSubset<T, CVRequirementFindUniqueArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CVRequirement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CVRequirementFindUniqueOrThrowArgs} args - Arguments to find a CVRequirement
     * @example
     * // Get one CVRequirement
     * const cVRequirement = await prisma.cVRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, CVRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CVRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementFindFirstArgs} args - Arguments to find a CVRequirement
     * @example
     * // Get one CVRequirement
     * const cVRequirement = await prisma.cVRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVRequirementFindFirstArgs>(args?: SelectSubset<T, CVRequirementFindFirstArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CVRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementFindFirstOrThrowArgs} args - Arguments to find a CVRequirement
     * @example
     * // Get one CVRequirement
     * const cVRequirement = await prisma.cVRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, CVRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CVRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVRequirements
     * const cVRequirements = await prisma.cVRequirement.findMany()
     * 
     * // Get first 10 CVRequirements
     * const cVRequirements = await prisma.cVRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVRequirementWithIdOnly = await prisma.cVRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVRequirementFindManyArgs>(args?: SelectSubset<T, CVRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CVRequirement.
     * @param {CVRequirementCreateArgs} args - Arguments to create a CVRequirement.
     * @example
     * // Create one CVRequirement
     * const CVRequirement = await prisma.cVRequirement.create({
     *   data: {
     *     // ... data to create a CVRequirement
     *   }
     * })
     * 
     */
    create<T extends CVRequirementCreateArgs>(args: SelectSubset<T, CVRequirementCreateArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CVRequirements.
     * @param {CVRequirementCreateManyArgs} args - Arguments to create many CVRequirements.
     * @example
     * // Create many CVRequirements
     * const cVRequirement = await prisma.cVRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVRequirementCreateManyArgs>(args?: SelectSubset<T, CVRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CVRequirements and returns the data saved in the database.
     * @param {CVRequirementCreateManyAndReturnArgs} args - Arguments to create many CVRequirements.
     * @example
     * // Create many CVRequirements
     * const cVRequirement = await prisma.cVRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CVRequirements and only return the `id`
     * const cVRequirementWithIdOnly = await prisma.cVRequirement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CVRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, CVRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CVRequirement.
     * @param {CVRequirementDeleteArgs} args - Arguments to delete one CVRequirement.
     * @example
     * // Delete one CVRequirement
     * const CVRequirement = await prisma.cVRequirement.delete({
     *   where: {
     *     // ... filter to delete one CVRequirement
     *   }
     * })
     * 
     */
    delete<T extends CVRequirementDeleteArgs>(args: SelectSubset<T, CVRequirementDeleteArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CVRequirement.
     * @param {CVRequirementUpdateArgs} args - Arguments to update one CVRequirement.
     * @example
     * // Update one CVRequirement
     * const cVRequirement = await prisma.cVRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVRequirementUpdateArgs>(args: SelectSubset<T, CVRequirementUpdateArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CVRequirements.
     * @param {CVRequirementDeleteManyArgs} args - Arguments to filter CVRequirements to delete.
     * @example
     * // Delete a few CVRequirements
     * const { count } = await prisma.cVRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVRequirementDeleteManyArgs>(args?: SelectSubset<T, CVRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVRequirements
     * const cVRequirement = await prisma.cVRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVRequirementUpdateManyArgs>(args: SelectSubset<T, CVRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CVRequirement.
     * @param {CVRequirementUpsertArgs} args - Arguments to update or create a CVRequirement.
     * @example
     * // Update or create a CVRequirement
     * const cVRequirement = await prisma.cVRequirement.upsert({
     *   create: {
     *     // ... data to create a CVRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CVRequirement we want to update
     *   }
     * })
     */
    upsert<T extends CVRequirementUpsertArgs>(args: SelectSubset<T, CVRequirementUpsertArgs<ExtArgs>>): Prisma__CVRequirementClient<$Result.GetResult<Prisma.$CVRequirementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CVRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementCountArgs} args - Arguments to filter CVRequirements to count.
     * @example
     * // Count the number of CVRequirements
     * const count = await prisma.cVRequirement.count({
     *   where: {
     *     // ... the filter for the CVRequirements we want to count
     *   }
     * })
    **/
    count<T extends CVRequirementCountArgs>(
      args?: Subset<T, CVRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CVRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVRequirementAggregateArgs>(args: Subset<T, CVRequirementAggregateArgs>): Prisma.PrismaPromise<GetCVRequirementAggregateType<T>>

    /**
     * Group by CVRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVRequirementGroupByArgs['orderBy'] }
        : { orderBy?: CVRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CVRequirement model
   */
  readonly fields: CVRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CVRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    requirement<T extends RequirementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequirementDefaultArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CVRequirement model
   */ 
  interface CVRequirementFieldRefs {
    readonly id: FieldRef<"CVRequirement", 'Int'>
    readonly cv_id: FieldRef<"CVRequirement", 'Int'>
    readonly requirement_id: FieldRef<"CVRequirement", 'Int'>
    readonly createdAt: FieldRef<"CVRequirement", 'DateTime'>
    readonly updatedAt: FieldRef<"CVRequirement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CVRequirement findUnique
   */
  export type CVRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * Filter, which CVRequirement to fetch.
     */
    where: CVRequirementWhereUniqueInput
  }

  /**
   * CVRequirement findUniqueOrThrow
   */
  export type CVRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * Filter, which CVRequirement to fetch.
     */
    where: CVRequirementWhereUniqueInput
  }

  /**
   * CVRequirement findFirst
   */
  export type CVRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * Filter, which CVRequirement to fetch.
     */
    where?: CVRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVRequirements to fetch.
     */
    orderBy?: CVRequirementOrderByWithRelationInput | CVRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVRequirements.
     */
    cursor?: CVRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVRequirements.
     */
    distinct?: CVRequirementScalarFieldEnum | CVRequirementScalarFieldEnum[]
  }

  /**
   * CVRequirement findFirstOrThrow
   */
  export type CVRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * Filter, which CVRequirement to fetch.
     */
    where?: CVRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVRequirements to fetch.
     */
    orderBy?: CVRequirementOrderByWithRelationInput | CVRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVRequirements.
     */
    cursor?: CVRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVRequirements.
     */
    distinct?: CVRequirementScalarFieldEnum | CVRequirementScalarFieldEnum[]
  }

  /**
   * CVRequirement findMany
   */
  export type CVRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * Filter, which CVRequirements to fetch.
     */
    where?: CVRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVRequirements to fetch.
     */
    orderBy?: CVRequirementOrderByWithRelationInput | CVRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVRequirements.
     */
    cursor?: CVRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVRequirements.
     */
    skip?: number
    distinct?: CVRequirementScalarFieldEnum | CVRequirementScalarFieldEnum[]
  }

  /**
   * CVRequirement create
   */
  export type CVRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a CVRequirement.
     */
    data: XOR<CVRequirementCreateInput, CVRequirementUncheckedCreateInput>
  }

  /**
   * CVRequirement createMany
   */
  export type CVRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVRequirements.
     */
    data: CVRequirementCreateManyInput | CVRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CVRequirement createManyAndReturn
   */
  export type CVRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CVRequirements.
     */
    data: CVRequirementCreateManyInput | CVRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CVRequirement update
   */
  export type CVRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a CVRequirement.
     */
    data: XOR<CVRequirementUpdateInput, CVRequirementUncheckedUpdateInput>
    /**
     * Choose, which CVRequirement to update.
     */
    where: CVRequirementWhereUniqueInput
  }

  /**
   * CVRequirement updateMany
   */
  export type CVRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVRequirements.
     */
    data: XOR<CVRequirementUpdateManyMutationInput, CVRequirementUncheckedUpdateManyInput>
    /**
     * Filter which CVRequirements to update
     */
    where?: CVRequirementWhereInput
  }

  /**
   * CVRequirement upsert
   */
  export type CVRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the CVRequirement to update in case it exists.
     */
    where: CVRequirementWhereUniqueInput
    /**
     * In case the CVRequirement found by the `where` argument doesn't exist, create a new CVRequirement with this data.
     */
    create: XOR<CVRequirementCreateInput, CVRequirementUncheckedCreateInput>
    /**
     * In case the CVRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVRequirementUpdateInput, CVRequirementUncheckedUpdateInput>
  }

  /**
   * CVRequirement delete
   */
  export type CVRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
    /**
     * Filter which CVRequirement to delete.
     */
    where: CVRequirementWhereUniqueInput
  }

  /**
   * CVRequirement deleteMany
   */
  export type CVRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVRequirements to delete
     */
    where?: CVRequirementWhereInput
  }

  /**
   * CVRequirement without action
   */
  export type CVRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVRequirement
     */
    select?: CVRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVRequirementInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
    grade: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
    grade: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    degree: string | null
    major: string | null
    address: string | null
    start_at: Date | null
    end_at: Date | null
    grade: number | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    degree: string | null
    major: string | null
    address: string | null
    start_at: Date | null
    end_at: Date | null
    grade: number | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    cv_id: number
    name: number
    degree: number
    major: number
    address: number
    start_at: number
    end_at: number
    grade: number
    desc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
    cv_id?: true
    grade?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
    cv_id?: true
    grade?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    degree?: true
    major?: true
    address?: true
    start_at?: true
    end_at?: true
    grade?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    degree?: true
    major?: true
    address?: true
    start_at?: true
    end_at?: true
    grade?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    degree?: true
    major?: true
    address?: true
    start_at?: true
    end_at?: true
    grade?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    cv_id: number
    name: string
    degree: string
    major: string
    address: string
    start_at: Date
    end_at: Date
    grade: number
    desc: string | null
    createdAt: Date
    updatedAt: Date
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    degree?: boolean
    major?: boolean
    address?: boolean
    start_at?: boolean
    end_at?: boolean
    grade?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    degree?: boolean
    major?: boolean
    address?: boolean
    start_at?: boolean
    end_at?: boolean
    grade?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    cv_id?: boolean
    name?: boolean
    degree?: boolean
    major?: boolean
    address?: boolean
    start_at?: boolean
    end_at?: boolean
    grade?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      name: string
      degree: string
      major: string
      address: string
      start_at: Date
      end_at: Date
      grade: number
      desc: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */ 
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly cv_id: FieldRef<"Education", 'Int'>
    readonly name: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly major: FieldRef<"Education", 'String'>
    readonly address: FieldRef<"Education", 'String'>
    readonly start_at: FieldRef<"Education", 'DateTime'>
    readonly end_at: FieldRef<"Education", 'DateTime'>
    readonly grade: FieldRef<"Education", 'Float'>
    readonly desc: FieldRef<"Education", 'String'>
    readonly createdAt: FieldRef<"Education", 'DateTime'>
    readonly updatedAt: FieldRef<"Education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _avg: WorkExperienceAvgAggregateOutputType | null
    _sum: WorkExperienceSumAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type WorkExperienceSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    position: string | null
    start_at: Date | null
    end_at: Date | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    position: string | null
    start_at: Date | null
    end_at: Date | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    cv_id: number
    name: number
    position: number
    start_at: number
    end_at: number
    address: number
    createdAt: number
    updatedAt: number
    desc: number
    _all: number
  }


  export type WorkExperienceAvgAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type WorkExperienceSumAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type WorkExperienceMinAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    position?: true
    start_at?: true
    end_at?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    position?: true
    start_at?: true
    end_at?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    position?: true
    start_at?: true
    end_at?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    desc?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _avg?: WorkExperienceAvgAggregateInputType
    _sum?: WorkExperienceSumAggregateInputType
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    id: number
    cv_id: number
    name: string
    position: string
    start_at: Date
    end_at: Date
    address: string
    createdAt: Date
    updatedAt: Date
    desc: string[]
    _count: WorkExperienceCountAggregateOutputType | null
    _avg: WorkExperienceAvgAggregateOutputType | null
    _sum: WorkExperienceSumAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    position?: boolean
    start_at?: boolean
    end_at?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    desc?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    position?: boolean
    start_at?: boolean
    end_at?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    desc?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectScalar = {
    id?: boolean
    cv_id?: boolean
    name?: boolean
    position?: boolean
    start_at?: boolean
    end_at?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    desc?: boolean
  }

  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      name: string
      position: string
      start_at: Date
      end_at: Date
      address: string
      createdAt: Date
      updatedAt: Date
      desc: string[]
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperiences and returns the data saved in the database.
     * @param {WorkExperienceCreateManyAndReturnArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */ 
  interface WorkExperienceFieldRefs {
    readonly id: FieldRef<"WorkExperience", 'Int'>
    readonly cv_id: FieldRef<"WorkExperience", 'Int'>
    readonly name: FieldRef<"WorkExperience", 'String'>
    readonly position: FieldRef<"WorkExperience", 'String'>
    readonly start_at: FieldRef<"WorkExperience", 'DateTime'>
    readonly end_at: FieldRef<"WorkExperience", 'DateTime'>
    readonly address: FieldRef<"WorkExperience", 'String'>
    readonly createdAt: FieldRef<"WorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkExperience", 'DateTime'>
    readonly desc: FieldRef<"WorkExperience", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkExperience createManyAndReturn
   */
  export type WorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type CertificateSumAggregateOutputType = {
    id: number | null
    cv_id: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    image: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: number | null
    cv_id: number | null
    name: string | null
    image: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    cv_id: number
    name: number
    image: number
    desc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type CertificateSumAggregateInputType = {
    id?: true
    cv_id?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    image?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    image?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    cv_id?: true
    name?: true
    image?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: number
    cv_id: number
    name: string
    image: string
    desc: string
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    image?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cv_id?: boolean
    name?: boolean
    image?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    cv_id?: boolean
    name?: boolean
    image?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cv_id: number
      name: string
      image: string
      desc: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */ 
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'Int'>
    readonly cv_id: FieldRef<"Certificate", 'Int'>
    readonly name: FieldRef<"Certificate", 'String'>
    readonly image: FieldRef<"Certificate", 'String'>
    readonly desc: FieldRef<"Certificate", 'String'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
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

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const RequirementScalarFieldEnum: {
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

  export type RequirementScalarFieldEnum = (typeof RequirementScalarFieldEnum)[keyof typeof RequirementScalarFieldEnum]


  export const RequirementEducationScalarFieldEnum: {
    id: 'id',
    requirement_id: 'requirement_id',
    degree: 'degree',
    grade: 'grade',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    major: 'major'
  };

  export type RequirementEducationScalarFieldEnum = (typeof RequirementEducationScalarFieldEnum)[keyof typeof RequirementEducationScalarFieldEnum]


  export const JobFairScalarFieldEnum: {
    id: 'id',
    name: 'name',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobFairScalarFieldEnum = (typeof JobFairScalarFieldEnum)[keyof typeof JobFairScalarFieldEnum]


  export const StandScalarFieldEnum: {
    id: 'id',
    job_fair_id: 'job_fair_id',
    number: 'number',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StandScalarFieldEnum = (typeof StandScalarFieldEnum)[keyof typeof StandScalarFieldEnum]


  export const RentScalarFieldEnum: {
    id: 'id',
    stand_id: 'stand_id',
    company_id: 'company_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentScalarFieldEnum = (typeof RentScalarFieldEnum)[keyof typeof RentScalarFieldEnum]


  export const CVScalarFieldEnum: {
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

  export type CVScalarFieldEnum = (typeof CVScalarFieldEnum)[keyof typeof CVScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    cv_id: 'cv_id',
    name: 'name',
    skill: 'skill'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    cv_id: 'cv_id',
    name: 'name',
    provider: 'provider',
    year: 'year'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    cv_id: 'cv_id',
    name: 'name',
    description: 'description'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const CVRequirementScalarFieldEnum: {
    id: 'id',
    cv_id: 'cv_id',
    requirement_id: 'requirement_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CVRequirementScalarFieldEnum = (typeof CVRequirementScalarFieldEnum)[keyof typeof CVRequirementScalarFieldEnum]


  export const EducationScalarFieldEnum: {
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

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
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

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    cv_id: 'cv_id',
    name: 'name',
    image: 'image',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cvs?: CVListRelationFilter
    companies?: CompanyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cvs?: CVOrderByRelationAggregateInput
    companies?: CompanyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cvs?: CVListRelationFilter
    companies?: CompanyListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    user_id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    desc?: StringFilter<"Company"> | string
    social_media?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    locationStand?: StringNullableFilter<"Company"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    rents?: RentListRelationFilter
    requirements?: RequirementListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    desc?: SortOrder
    social_media?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationStand?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    rents?: RentOrderByRelationAggregateInput
    requirements?: RequirementOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    user_id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    desc?: StringFilter<"Company"> | string
    social_media?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    locationStand?: StringNullableFilter<"Company"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    rents?: RentListRelationFilter
    requirements?: RequirementListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    desc?: SortOrder
    social_media?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationStand?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    user_id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    address?: StringWithAggregatesFilter<"Company"> | string
    desc?: StringWithAggregatesFilter<"Company"> | string
    social_media?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    locationStand?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type RequirementWhereInput = {
    AND?: RequirementWhereInput | RequirementWhereInput[]
    OR?: RequirementWhereInput[]
    NOT?: RequirementWhereInput | RequirementWhereInput[]
    id?: IntFilter<"Requirement"> | number
    company_id?: IntFilter<"Requirement"> | number
    min_age?: IntFilter<"Requirement"> | number
    max_age?: IntFilter<"Requirement"> | number
    gender?: StringNullableListFilter<"Requirement">
    position?: StringFilter<"Requirement"> | string
    desc_job?: StringNullableListFilter<"Requirement">
    skill?: StringNullableListFilter<"Requirement">
    keyword?: StringNullableListFilter<"Requirement">
    createdAt?: DateTimeFilter<"Requirement"> | Date | string
    updatedAt?: DateTimeFilter<"Requirement"> | Date | string
    cv_requirements?: CVRequirementListRelationFilter
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    education?: RequirementEducationListRelationFilter
  }

  export type RequirementOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    desc_job?: SortOrder
    skill?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cv_requirements?: CVRequirementOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
    education?: RequirementEducationOrderByRelationAggregateInput
  }

  export type RequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequirementWhereInput | RequirementWhereInput[]
    OR?: RequirementWhereInput[]
    NOT?: RequirementWhereInput | RequirementWhereInput[]
    company_id?: IntFilter<"Requirement"> | number
    min_age?: IntFilter<"Requirement"> | number
    max_age?: IntFilter<"Requirement"> | number
    gender?: StringNullableListFilter<"Requirement">
    position?: StringFilter<"Requirement"> | string
    desc_job?: StringNullableListFilter<"Requirement">
    skill?: StringNullableListFilter<"Requirement">
    keyword?: StringNullableListFilter<"Requirement">
    createdAt?: DateTimeFilter<"Requirement"> | Date | string
    updatedAt?: DateTimeFilter<"Requirement"> | Date | string
    cv_requirements?: CVRequirementListRelationFilter
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    education?: RequirementEducationListRelationFilter
  }, "id">

  export type RequirementOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    desc_job?: SortOrder
    skill?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequirementCountOrderByAggregateInput
    _avg?: RequirementAvgOrderByAggregateInput
    _max?: RequirementMaxOrderByAggregateInput
    _min?: RequirementMinOrderByAggregateInput
    _sum?: RequirementSumOrderByAggregateInput
  }

  export type RequirementScalarWhereWithAggregatesInput = {
    AND?: RequirementScalarWhereWithAggregatesInput | RequirementScalarWhereWithAggregatesInput[]
    OR?: RequirementScalarWhereWithAggregatesInput[]
    NOT?: RequirementScalarWhereWithAggregatesInput | RequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Requirement"> | number
    company_id?: IntWithAggregatesFilter<"Requirement"> | number
    min_age?: IntWithAggregatesFilter<"Requirement"> | number
    max_age?: IntWithAggregatesFilter<"Requirement"> | number
    gender?: StringNullableListFilter<"Requirement">
    position?: StringWithAggregatesFilter<"Requirement"> | string
    desc_job?: StringNullableListFilter<"Requirement">
    skill?: StringNullableListFilter<"Requirement">
    keyword?: StringNullableListFilter<"Requirement">
    createdAt?: DateTimeWithAggregatesFilter<"Requirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Requirement"> | Date | string
  }

  export type RequirementEducationWhereInput = {
    AND?: RequirementEducationWhereInput | RequirementEducationWhereInput[]
    OR?: RequirementEducationWhereInput[]
    NOT?: RequirementEducationWhereInput | RequirementEducationWhereInput[]
    id?: IntFilter<"RequirementEducation"> | number
    requirement_id?: IntFilter<"RequirementEducation"> | number
    degree?: StringFilter<"RequirementEducation"> | string
    grade?: FloatFilter<"RequirementEducation"> | number
    createdAt?: DateTimeFilter<"RequirementEducation"> | Date | string
    updateAt?: DateTimeFilter<"RequirementEducation"> | Date | string
    major?: StringNullableListFilter<"RequirementEducation">
    Requirement?: XOR<RequirementRelationFilter, RequirementWhereInput>
  }

  export type RequirementEducationOrderByWithRelationInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    degree?: SortOrder
    grade?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    major?: SortOrder
    Requirement?: RequirementOrderByWithRelationInput
  }

  export type RequirementEducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequirementEducationWhereInput | RequirementEducationWhereInput[]
    OR?: RequirementEducationWhereInput[]
    NOT?: RequirementEducationWhereInput | RequirementEducationWhereInput[]
    requirement_id?: IntFilter<"RequirementEducation"> | number
    degree?: StringFilter<"RequirementEducation"> | string
    grade?: FloatFilter<"RequirementEducation"> | number
    createdAt?: DateTimeFilter<"RequirementEducation"> | Date | string
    updateAt?: DateTimeFilter<"RequirementEducation"> | Date | string
    major?: StringNullableListFilter<"RequirementEducation">
    Requirement?: XOR<RequirementRelationFilter, RequirementWhereInput>
  }, "id">

  export type RequirementEducationOrderByWithAggregationInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    degree?: SortOrder
    grade?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    major?: SortOrder
    _count?: RequirementEducationCountOrderByAggregateInput
    _avg?: RequirementEducationAvgOrderByAggregateInput
    _max?: RequirementEducationMaxOrderByAggregateInput
    _min?: RequirementEducationMinOrderByAggregateInput
    _sum?: RequirementEducationSumOrderByAggregateInput
  }

  export type RequirementEducationScalarWhereWithAggregatesInput = {
    AND?: RequirementEducationScalarWhereWithAggregatesInput | RequirementEducationScalarWhereWithAggregatesInput[]
    OR?: RequirementEducationScalarWhereWithAggregatesInput[]
    NOT?: RequirementEducationScalarWhereWithAggregatesInput | RequirementEducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequirementEducation"> | number
    requirement_id?: IntWithAggregatesFilter<"RequirementEducation"> | number
    degree?: StringWithAggregatesFilter<"RequirementEducation"> | string
    grade?: FloatWithAggregatesFilter<"RequirementEducation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RequirementEducation"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"RequirementEducation"> | Date | string
    major?: StringNullableListFilter<"RequirementEducation">
  }

  export type JobFairWhereInput = {
    AND?: JobFairWhereInput | JobFairWhereInput[]
    OR?: JobFairWhereInput[]
    NOT?: JobFairWhereInput | JobFairWhereInput[]
    id?: IntFilter<"JobFair"> | number
    name?: StringFilter<"JobFair"> | string
    start?: DateTimeFilter<"JobFair"> | Date | string
    end?: DateTimeFilter<"JobFair"> | Date | string
    createdAt?: DateTimeFilter<"JobFair"> | Date | string
    updatedAt?: DateTimeFilter<"JobFair"> | Date | string
    stands?: StandListRelationFilter
  }

  export type JobFairOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stands?: StandOrderByRelationAggregateInput
  }

  export type JobFairWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobFairWhereInput | JobFairWhereInput[]
    OR?: JobFairWhereInput[]
    NOT?: JobFairWhereInput | JobFairWhereInput[]
    name?: StringFilter<"JobFair"> | string
    start?: DateTimeFilter<"JobFair"> | Date | string
    end?: DateTimeFilter<"JobFair"> | Date | string
    createdAt?: DateTimeFilter<"JobFair"> | Date | string
    updatedAt?: DateTimeFilter<"JobFair"> | Date | string
    stands?: StandListRelationFilter
  }, "id">

  export type JobFairOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobFairCountOrderByAggregateInput
    _avg?: JobFairAvgOrderByAggregateInput
    _max?: JobFairMaxOrderByAggregateInput
    _min?: JobFairMinOrderByAggregateInput
    _sum?: JobFairSumOrderByAggregateInput
  }

  export type JobFairScalarWhereWithAggregatesInput = {
    AND?: JobFairScalarWhereWithAggregatesInput | JobFairScalarWhereWithAggregatesInput[]
    OR?: JobFairScalarWhereWithAggregatesInput[]
    NOT?: JobFairScalarWhereWithAggregatesInput | JobFairScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobFair"> | number
    name?: StringWithAggregatesFilter<"JobFair"> | string
    start?: DateTimeWithAggregatesFilter<"JobFair"> | Date | string
    end?: DateTimeWithAggregatesFilter<"JobFair"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"JobFair"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobFair"> | Date | string
  }

  export type StandWhereInput = {
    AND?: StandWhereInput | StandWhereInput[]
    OR?: StandWhereInput[]
    NOT?: StandWhereInput | StandWhereInput[]
    id?: IntFilter<"Stand"> | number
    job_fair_id?: IntFilter<"Stand"> | number
    number?: IntFilter<"Stand"> | number
    location?: StringFilter<"Stand"> | string
    createdAt?: DateTimeFilter<"Stand"> | Date | string
    updatedAt?: DateTimeFilter<"Stand"> | Date | string
    rents?: RentListRelationFilter
    jobFair?: XOR<JobFairRelationFilter, JobFairWhereInput>
  }

  export type StandOrderByWithRelationInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rents?: RentOrderByRelationAggregateInput
    jobFair?: JobFairOrderByWithRelationInput
  }

  export type StandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StandWhereInput | StandWhereInput[]
    OR?: StandWhereInput[]
    NOT?: StandWhereInput | StandWhereInput[]
    job_fair_id?: IntFilter<"Stand"> | number
    number?: IntFilter<"Stand"> | number
    location?: StringFilter<"Stand"> | string
    createdAt?: DateTimeFilter<"Stand"> | Date | string
    updatedAt?: DateTimeFilter<"Stand"> | Date | string
    rents?: RentListRelationFilter
    jobFair?: XOR<JobFairRelationFilter, JobFairWhereInput>
  }, "id">

  export type StandOrderByWithAggregationInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StandCountOrderByAggregateInput
    _avg?: StandAvgOrderByAggregateInput
    _max?: StandMaxOrderByAggregateInput
    _min?: StandMinOrderByAggregateInput
    _sum?: StandSumOrderByAggregateInput
  }

  export type StandScalarWhereWithAggregatesInput = {
    AND?: StandScalarWhereWithAggregatesInput | StandScalarWhereWithAggregatesInput[]
    OR?: StandScalarWhereWithAggregatesInput[]
    NOT?: StandScalarWhereWithAggregatesInput | StandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stand"> | number
    job_fair_id?: IntWithAggregatesFilter<"Stand"> | number
    number?: IntWithAggregatesFilter<"Stand"> | number
    location?: StringWithAggregatesFilter<"Stand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Stand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stand"> | Date | string
  }

  export type RentWhereInput = {
    AND?: RentWhereInput | RentWhereInput[]
    OR?: RentWhereInput[]
    NOT?: RentWhereInput | RentWhereInput[]
    id?: IntFilter<"Rent"> | number
    stand_id?: IntFilter<"Rent"> | number
    company_id?: IntFilter<"Rent"> | number
    createdAt?: DateTimeFilter<"Rent"> | Date | string
    updatedAt?: DateTimeFilter<"Rent"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    stand?: XOR<StandRelationFilter, StandWhereInput>
  }

  export type RentOrderByWithRelationInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    stand?: StandOrderByWithRelationInput
  }

  export type RentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RentWhereInput | RentWhereInput[]
    OR?: RentWhereInput[]
    NOT?: RentWhereInput | RentWhereInput[]
    stand_id?: IntFilter<"Rent"> | number
    company_id?: IntFilter<"Rent"> | number
    createdAt?: DateTimeFilter<"Rent"> | Date | string
    updatedAt?: DateTimeFilter<"Rent"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    stand?: XOR<StandRelationFilter, StandWhereInput>
  }, "id">

  export type RentOrderByWithAggregationInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentCountOrderByAggregateInput
    _avg?: RentAvgOrderByAggregateInput
    _max?: RentMaxOrderByAggregateInput
    _min?: RentMinOrderByAggregateInput
    _sum?: RentSumOrderByAggregateInput
  }

  export type RentScalarWhereWithAggregatesInput = {
    AND?: RentScalarWhereWithAggregatesInput | RentScalarWhereWithAggregatesInput[]
    OR?: RentScalarWhereWithAggregatesInput[]
    NOT?: RentScalarWhereWithAggregatesInput | RentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rent"> | number
    stand_id?: IntWithAggregatesFilter<"Rent"> | number
    company_id?: IntWithAggregatesFilter<"Rent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rent"> | Date | string
  }

  export type CVWhereInput = {
    AND?: CVWhereInput | CVWhereInput[]
    OR?: CVWhereInput[]
    NOT?: CVWhereInput | CVWhereInput[]
    id?: IntFilter<"CV"> | number
    user_id?: IntFilter<"CV"> | number
    name?: StringFilter<"CV"> | string
    address?: StringFilter<"CV"> | string
    email?: StringFilter<"CV"> | string
    gender?: EnumGenderFilter<"CV"> | $Enums.Gender
    phone?: StringFilter<"CV"> | string
    birth_date?: DateTimeFilter<"CV"> | Date | string
    social_media?: StringNullableListFilter<"CV">
    desc?: StringFilter<"CV"> | string
    createdAt?: DateTimeFilter<"CV"> | Date | string
    updatedAt?: DateTimeFilter<"CV"> | Date | string
    achievement?: AchievementListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    cv_requirements?: CVRequirementListRelationFilter
    certificates?: CertificateListRelationFilter
    educations?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    skill?: SkillsListRelationFilter
    workExperiences?: WorkExperienceListRelationFilter
  }

  export type CVOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birth_date?: SortOrder
    social_media?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    achievement?: AchievementOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    cv_requirements?: CVRequirementOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    educations?: EducationOrderByRelationAggregateInput
    experience?: ExperienceOrderByRelationAggregateInput
    skill?: SkillsOrderByRelationAggregateInput
    workExperiences?: WorkExperienceOrderByRelationAggregateInput
  }

  export type CVWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CVWhereInput | CVWhereInput[]
    OR?: CVWhereInput[]
    NOT?: CVWhereInput | CVWhereInput[]
    user_id?: IntFilter<"CV"> | number
    name?: StringFilter<"CV"> | string
    address?: StringFilter<"CV"> | string
    email?: StringFilter<"CV"> | string
    gender?: EnumGenderFilter<"CV"> | $Enums.Gender
    phone?: StringFilter<"CV"> | string
    birth_date?: DateTimeFilter<"CV"> | Date | string
    social_media?: StringNullableListFilter<"CV">
    desc?: StringFilter<"CV"> | string
    createdAt?: DateTimeFilter<"CV"> | Date | string
    updatedAt?: DateTimeFilter<"CV"> | Date | string
    achievement?: AchievementListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    cv_requirements?: CVRequirementListRelationFilter
    certificates?: CertificateListRelationFilter
    educations?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    skill?: SkillsListRelationFilter
    workExperiences?: WorkExperienceListRelationFilter
  }, "id">

  export type CVOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birth_date?: SortOrder
    social_media?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CVCountOrderByAggregateInput
    _avg?: CVAvgOrderByAggregateInput
    _max?: CVMaxOrderByAggregateInput
    _min?: CVMinOrderByAggregateInput
    _sum?: CVSumOrderByAggregateInput
  }

  export type CVScalarWhereWithAggregatesInput = {
    AND?: CVScalarWhereWithAggregatesInput | CVScalarWhereWithAggregatesInput[]
    OR?: CVScalarWhereWithAggregatesInput[]
    NOT?: CVScalarWhereWithAggregatesInput | CVScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CV"> | number
    user_id?: IntWithAggregatesFilter<"CV"> | number
    name?: StringWithAggregatesFilter<"CV"> | string
    address?: StringWithAggregatesFilter<"CV"> | string
    email?: StringWithAggregatesFilter<"CV"> | string
    gender?: EnumGenderWithAggregatesFilter<"CV"> | $Enums.Gender
    phone?: StringWithAggregatesFilter<"CV"> | string
    birth_date?: DateTimeWithAggregatesFilter<"CV"> | Date | string
    social_media?: StringNullableListFilter<"CV">
    desc?: StringWithAggregatesFilter<"CV"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CV"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CV"> | Date | string
  }

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: IntFilter<"Skills"> | number
    cv_id?: IntFilter<"Skills"> | number
    name?: StringFilter<"Skills"> | string
    skill?: StringNullableListFilter<"Skills">
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    skill?: SortOrder
    cv?: CVOrderByWithRelationInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    cv_id?: IntFilter<"Skills"> | number
    name?: StringFilter<"Skills"> | string
    skill?: StringNullableListFilter<"Skills">
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    skill?: SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _avg?: SkillsAvgOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
    _sum?: SkillsSumOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skills"> | number
    cv_id?: IntWithAggregatesFilter<"Skills"> | number
    name?: StringWithAggregatesFilter<"Skills"> | string
    skill?: StringNullableListFilter<"Skills">
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: IntFilter<"Achievement"> | number
    cv_id?: IntFilter<"Achievement"> | number
    name?: StringFilter<"Achievement"> | string
    provider?: StringFilter<"Achievement"> | string
    year?: StringFilter<"Achievement"> | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    year?: SortOrder
    cv?: CVOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    cv_id?: IntFilter<"Achievement"> | number
    name?: StringFilter<"Achievement"> | string
    provider?: StringFilter<"Achievement"> | string
    year?: StringFilter<"Achievement"> | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    year?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievement"> | number
    cv_id?: IntWithAggregatesFilter<"Achievement"> | number
    name?: StringWithAggregatesFilter<"Achievement"> | string
    provider?: StringWithAggregatesFilter<"Achievement"> | string
    year?: StringWithAggregatesFilter<"Achievement"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    cv_id?: IntFilter<"Experience"> | number
    name?: StringFilter<"Experience"> | string
    description?: StringFilter<"Experience"> | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cv?: CVOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    cv_id?: IntFilter<"Experience"> | number
    name?: StringFilter<"Experience"> | string
    description?: StringFilter<"Experience"> | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    cv_id?: IntWithAggregatesFilter<"Experience"> | number
    name?: StringWithAggregatesFilter<"Experience"> | string
    description?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type CVRequirementWhereInput = {
    AND?: CVRequirementWhereInput | CVRequirementWhereInput[]
    OR?: CVRequirementWhereInput[]
    NOT?: CVRequirementWhereInput | CVRequirementWhereInput[]
    id?: IntFilter<"CVRequirement"> | number
    cv_id?: IntFilter<"CVRequirement"> | number
    requirement_id?: IntFilter<"CVRequirement"> | number
    createdAt?: DateTimeFilter<"CVRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"CVRequirement"> | Date | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
    requirement?: XOR<RequirementRelationFilter, RequirementWhereInput>
  }

  export type CVRequirementOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cv?: CVOrderByWithRelationInput
    requirement?: RequirementOrderByWithRelationInput
  }

  export type CVRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CVRequirementWhereInput | CVRequirementWhereInput[]
    OR?: CVRequirementWhereInput[]
    NOT?: CVRequirementWhereInput | CVRequirementWhereInput[]
    cv_id?: IntFilter<"CVRequirement"> | number
    requirement_id?: IntFilter<"CVRequirement"> | number
    createdAt?: DateTimeFilter<"CVRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"CVRequirement"> | Date | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
    requirement?: XOR<RequirementRelationFilter, RequirementWhereInput>
  }, "id">

  export type CVRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CVRequirementCountOrderByAggregateInput
    _avg?: CVRequirementAvgOrderByAggregateInput
    _max?: CVRequirementMaxOrderByAggregateInput
    _min?: CVRequirementMinOrderByAggregateInput
    _sum?: CVRequirementSumOrderByAggregateInput
  }

  export type CVRequirementScalarWhereWithAggregatesInput = {
    AND?: CVRequirementScalarWhereWithAggregatesInput | CVRequirementScalarWhereWithAggregatesInput[]
    OR?: CVRequirementScalarWhereWithAggregatesInput[]
    NOT?: CVRequirementScalarWhereWithAggregatesInput | CVRequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CVRequirement"> | number
    cv_id?: IntWithAggregatesFilter<"CVRequirement"> | number
    requirement_id?: IntWithAggregatesFilter<"CVRequirement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CVRequirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CVRequirement"> | Date | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    cv_id?: IntFilter<"Education"> | number
    name?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    major?: StringFilter<"Education"> | string
    address?: StringFilter<"Education"> | string
    start_at?: DateTimeFilter<"Education"> | Date | string
    end_at?: DateTimeFilter<"Education"> | Date | string
    grade?: FloatFilter<"Education"> | number
    desc?: StringNullableFilter<"Education"> | string | null
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    address?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    grade?: SortOrder
    desc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cv?: CVOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    cv_id?: IntFilter<"Education"> | number
    name?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    major?: StringFilter<"Education"> | string
    address?: StringFilter<"Education"> | string
    start_at?: DateTimeFilter<"Education"> | Date | string
    end_at?: DateTimeFilter<"Education"> | Date | string
    grade?: FloatFilter<"Education"> | number
    desc?: StringNullableFilter<"Education"> | string | null
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    address?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    grade?: SortOrder
    desc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    cv_id?: IntWithAggregatesFilter<"Education"> | number
    name?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    major?: StringWithAggregatesFilter<"Education"> | string
    address?: StringWithAggregatesFilter<"Education"> | string
    start_at?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    grade?: FloatWithAggregatesFilter<"Education"> | number
    desc?: StringNullableWithAggregatesFilter<"Education"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: IntFilter<"WorkExperience"> | number
    cv_id?: IntFilter<"WorkExperience"> | number
    name?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    start_at?: DateTimeFilter<"WorkExperience"> | Date | string
    end_at?: DateTimeFilter<"WorkExperience"> | Date | string
    address?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    desc?: StringNullableListFilter<"WorkExperience">
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    desc?: SortOrder
    cv?: CVOrderByWithRelationInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    cv_id?: IntFilter<"WorkExperience"> | number
    name?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    start_at?: DateTimeFilter<"WorkExperience"> | Date | string
    end_at?: DateTimeFilter<"WorkExperience"> | Date | string
    address?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    desc?: StringNullableListFilter<"WorkExperience">
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    desc?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _avg?: WorkExperienceAvgOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
    _sum?: WorkExperienceSumOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkExperience"> | number
    cv_id?: IntWithAggregatesFilter<"WorkExperience"> | number
    name?: StringWithAggregatesFilter<"WorkExperience"> | string
    position?: StringWithAggregatesFilter<"WorkExperience"> | string
    start_at?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    address?: StringWithAggregatesFilter<"WorkExperience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    desc?: StringNullableListFilter<"WorkExperience">
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: IntFilter<"Certificate"> | number
    cv_id?: IntFilter<"Certificate"> | number
    name?: StringFilter<"Certificate"> | string
    image?: StringFilter<"Certificate"> | string
    desc?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cv?: CVOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    cv_id?: IntFilter<"Certificate"> | number
    name?: StringFilter<"Certificate"> | string
    image?: StringFilter<"Certificate"> | string
    desc?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    cv?: XOR<CVRelationFilter, CVWhereInput>
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Certificate"> | number
    cv_id?: IntWithAggregatesFilter<"Certificate"> | number
    name?: StringWithAggregatesFilter<"Certificate"> | string
    image?: StringWithAggregatesFilter<"Certificate"> | string
    desc?: StringWithAggregatesFilter<"Certificate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cvs?: CVCreateNestedManyWithoutUserInput
    companies?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cvs?: CVUncheckedCreateNestedManyWithoutUserInput
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cvs?: CVUpdateManyWithoutUserNestedInput
    companies?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cvs?: CVUncheckedUpdateManyWithoutUserNestedInput
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    user: UserCreateNestedOneWithoutCompaniesInput
    rents?: RentCreateNestedManyWithoutCompanyInput
    requirements?: RequirementCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    rents?: RentUncheckedCreateNestedManyWithoutCompanyInput
    requirements?: RequirementUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput
    rents?: RentUpdateManyWithoutCompanyNestedInput
    requirements?: RequirementUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    rents?: RentUncheckedUpdateManyWithoutCompanyNestedInput
    requirements?: RequirementUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    user_id: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequirementCreateInput = {
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementCreateNestedManyWithoutRequirementInput
    company: CompanyCreateNestedOneWithoutRequirementsInput
    education?: RequirementEducationCreateNestedManyWithoutRequirementInput
  }

  export type RequirementUncheckedCreateInput = {
    id?: number
    company_id: number
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutRequirementInput
    education?: RequirementEducationUncheckedCreateNestedManyWithoutRequirementInput
  }

  export type RequirementUpdateInput = {
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUpdateManyWithoutRequirementNestedInput
    company?: CompanyUpdateOneRequiredWithoutRequirementsNestedInput
    education?: RequirementEducationUpdateManyWithoutRequirementNestedInput
  }

  export type RequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutRequirementNestedInput
    education?: RequirementEducationUncheckedUpdateManyWithoutRequirementNestedInput
  }

  export type RequirementCreateManyInput = {
    id?: number
    company_id: number
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementUpdateManyMutationInput = {
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementEducationCreateInput = {
    degree: string
    grade: number
    createdAt?: Date | string
    updateAt?: Date | string
    major?: RequirementEducationCreatemajorInput | string[]
    Requirement: RequirementCreateNestedOneWithoutEducationInput
  }

  export type RequirementEducationUncheckedCreateInput = {
    id?: number
    requirement_id: number
    degree: string
    grade: number
    createdAt?: Date | string
    updateAt?: Date | string
    major?: RequirementEducationCreatemajorInput | string[]
  }

  export type RequirementEducationUpdateInput = {
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
    Requirement?: RequirementUpdateOneRequiredWithoutEducationNestedInput
  }

  export type RequirementEducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requirement_id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
  }

  export type RequirementEducationCreateManyInput = {
    id?: number
    requirement_id: number
    degree: string
    grade: number
    createdAt?: Date | string
    updateAt?: Date | string
    major?: RequirementEducationCreatemajorInput | string[]
  }

  export type RequirementEducationUpdateManyMutationInput = {
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
  }

  export type RequirementEducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requirement_id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
  }

  export type JobFairCreateInput = {
    name: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stands?: StandCreateNestedManyWithoutJobFairInput
  }

  export type JobFairUncheckedCreateInput = {
    id?: number
    name: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stands?: StandUncheckedCreateNestedManyWithoutJobFairInput
  }

  export type JobFairUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stands?: StandUpdateManyWithoutJobFairNestedInput
  }

  export type JobFairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stands?: StandUncheckedUpdateManyWithoutJobFairNestedInput
  }

  export type JobFairCreateManyInput = {
    id?: number
    name: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobFairUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobFairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandCreateInput = {
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rents?: RentCreateNestedManyWithoutStandInput
    jobFair: JobFairCreateNestedOneWithoutStandsInput
  }

  export type StandUncheckedCreateInput = {
    id?: number
    job_fair_id: number
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rents?: RentUncheckedCreateNestedManyWithoutStandInput
  }

  export type StandUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rents?: RentUpdateManyWithoutStandNestedInput
    jobFair?: JobFairUpdateOneRequiredWithoutStandsNestedInput
  }

  export type StandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_fair_id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rents?: RentUncheckedUpdateManyWithoutStandNestedInput
  }

  export type StandCreateManyInput = {
    id?: number
    job_fair_id: number
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_fair_id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRentsInput
    stand: StandCreateNestedOneWithoutRentsInput
  }

  export type RentUncheckedCreateInput = {
    id?: number
    stand_id: number
    company_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRentsNestedInput
    stand?: StandUpdateOneRequiredWithoutRentsNestedInput
  }

  export type RentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stand_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentCreateManyInput = {
    id?: number
    stand_id: number
    company_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stand_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVCreateInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateManyInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillsCreateInput = {
    name: string
    skill?: SkillsCreateskillInput | string[]
    cv: CVCreateNestedOneWithoutSkillInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: number
    cv_id: number
    name: string
    skill?: SkillsCreateskillInput | string[]
  }

  export type SkillsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
    cv?: CVUpdateOneRequiredWithoutSkillNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
  }

  export type SkillsCreateManyInput = {
    id?: number
    cv_id: number
    name: string
    skill?: SkillsCreateskillInput | string[]
  }

  export type SkillsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
  }

  export type AchievementCreateInput = {
    name: string
    provider: string
    year: string
    cv: CVCreateNestedOneWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: number
    cv_id: number
    name: string
    provider: string
    year: string
  }

  export type AchievementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cv?: CVUpdateOneRequiredWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementCreateManyInput = {
    id?: number
    cv_id: number
    name: string
    provider: string
    year: string
  }

  export type AchievementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    name: string
    description: string
    cv: CVCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    cv_id: number
    name: string
    description: string
  }

  export type ExperienceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cv?: CVUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: number
    cv_id: number
    name: string
    description: string
  }

  export type ExperienceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CVRequirementCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cv: CVCreateNestedOneWithoutCv_requirementsInput
    requirement: RequirementCreateNestedOneWithoutCv_requirementsInput
  }

  export type CVRequirementUncheckedCreateInput = {
    id?: number
    cv_id: number
    requirement_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVRequirementUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: CVUpdateOneRequiredWithoutCv_requirementsNestedInput
    requirement?: RequirementUpdateOneRequiredWithoutCv_requirementsNestedInput
  }

  export type CVRequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    requirement_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVRequirementCreateManyInput = {
    id?: number
    cv_id: number
    requirement_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVRequirementUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVRequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    requirement_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateInput = {
    name: string
    degree: string
    major: string
    address: string
    start_at: Date | string
    end_at: Date | string
    grade: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cv: CVCreateNestedOneWithoutEducationsInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    cv_id: number
    name: string
    degree: string
    major: string
    address: string
    start_at: Date | string
    end_at: Date | string
    grade: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: CVUpdateOneRequiredWithoutEducationsNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyInput = {
    id?: number
    cv_id: number
    name: string
    degree: string
    major: string
    address: string
    start_at: Date | string
    end_at: Date | string
    grade: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateInput = {
    name: string
    position: string
    start_at: Date | string
    end_at: Date | string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desc?: WorkExperienceCreatedescInput | string[]
    cv: CVCreateNestedOneWithoutWorkExperiencesInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: number
    cv_id: number
    name: string
    position: string
    start_at: Date | string
    end_at: Date | string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desc?: WorkExperienceCreatedescInput | string[]
  }

  export type WorkExperienceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
    cv?: CVUpdateOneRequiredWithoutWorkExperiencesNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
  }

  export type WorkExperienceCreateManyInput = {
    id?: number
    cv_id: number
    name: string
    position: string
    start_at: Date | string
    end_at: Date | string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desc?: WorkExperienceCreatedescInput | string[]
  }

  export type WorkExperienceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
  }

  export type CertificateCreateInput = {
    name: string
    image: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cv: CVCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: number
    cv_id: number
    name: string
    image: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: CVUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: number
    cv_id: number
    name: string
    image: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CVListRelationFilter = {
    every?: CVWhereInput
    some?: CVWhereInput
    none?: CVWhereInput
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type CVOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RentListRelationFilter = {
    every?: RentWhereInput
    some?: RentWhereInput
    none?: RentWhereInput
  }

  export type RequirementListRelationFilter = {
    every?: RequirementWhereInput
    some?: RequirementWhereInput
    none?: RequirementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    desc?: SortOrder
    social_media?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationStand?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    desc?: SortOrder
    social_media?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationStand?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    desc?: SortOrder
    social_media?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationStand?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CVRequirementListRelationFilter = {
    every?: CVRequirementWhereInput
    some?: CVRequirementWhereInput
    none?: CVRequirementWhereInput
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type RequirementEducationListRelationFilter = {
    every?: RequirementEducationWhereInput
    some?: RequirementEducationWhereInput
    none?: RequirementEducationWhereInput
  }

  export type CVRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequirementEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequirementCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    position?: SortOrder
    desc_job?: SortOrder
    skill?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
  }

  export type RequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RequirementRelationFilter = {
    is?: RequirementWhereInput
    isNot?: RequirementWhereInput
  }

  export type RequirementEducationCountOrderByAggregateInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    degree?: SortOrder
    grade?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    major?: SortOrder
  }

  export type RequirementEducationAvgOrderByAggregateInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    grade?: SortOrder
  }

  export type RequirementEducationMaxOrderByAggregateInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    degree?: SortOrder
    grade?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RequirementEducationMinOrderByAggregateInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    degree?: SortOrder
    grade?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RequirementEducationSumOrderByAggregateInput = {
    id?: SortOrder
    requirement_id?: SortOrder
    grade?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StandListRelationFilter = {
    every?: StandWhereInput
    some?: StandWhereInput
    none?: StandWhereInput
  }

  export type StandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobFairCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobFairAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobFairMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobFairMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobFairSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobFairRelationFilter = {
    is?: JobFairWhereInput
    isNot?: JobFairWhereInput
  }

  export type StandCountOrderByAggregateInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandAvgOrderByAggregateInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
  }

  export type StandMaxOrderByAggregateInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandMinOrderByAggregateInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandSumOrderByAggregateInput = {
    id?: SortOrder
    job_fair_id?: SortOrder
    number?: SortOrder
  }

  export type StandRelationFilter = {
    is?: StandWhereInput
    isNot?: StandWhereInput
  }

  export type RentCountOrderByAggregateInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentAvgOrderByAggregateInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
  }

  export type RentMaxOrderByAggregateInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentMinOrderByAggregateInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentSumOrderByAggregateInput = {
    id?: SortOrder
    stand_id?: SortOrder
    company_id?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type SkillsListRelationFilter = {
    every?: SkillsWhereInput
    some?: SkillsWhereInput
    none?: SkillsWhereInput
  }

  export type WorkExperienceListRelationFilter = {
    every?: WorkExperienceWhereInput
    some?: WorkExperienceWhereInput
    none?: WorkExperienceWhereInput
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birth_date?: SortOrder
    social_media?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CVMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birth_date?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birth_date?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type CVRelationFilter = {
    is?: CVWhereInput
    isNot?: CVWhereInput
  }

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    skill?: SortOrder
  }

  export type SkillsAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
  }

  export type SkillsSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    year?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    year?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    year?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type CVRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVRequirementAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
  }

  export type CVRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVRequirementSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    requirement_id?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    address?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    grade?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    grade?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    address?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    grade?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    address?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    grade?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    grade?: SortOrder
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    desc?: SortOrder
  }

  export type WorkExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    id?: SortOrder
    cv_id?: SortOrder
  }

  export type CVCreateNestedManyWithoutUserInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CVUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CVUpdateManyWithoutUserNestedInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    upsert?: CVUpsertWithWhereUniqueWithoutUserInput | CVUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    set?: CVWhereUniqueInput | CVWhereUniqueInput[]
    disconnect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    delete?: CVWhereUniqueInput | CVWhereUniqueInput[]
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    update?: CVUpdateWithWhereUniqueWithoutUserInput | CVUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CVUpdateManyWithWhereWithoutUserInput | CVUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CVScalarWhereInput | CVScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CVUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    upsert?: CVUpsertWithWhereUniqueWithoutUserInput | CVUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    set?: CVWhereUniqueInput | CVWhereUniqueInput[]
    disconnect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    delete?: CVWhereUniqueInput | CVWhereUniqueInput[]
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    update?: CVUpdateWithWhereUniqueWithoutUserInput | CVUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CVUpdateManyWithWhereWithoutUserInput | CVUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CVScalarWhereInput | CVScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput> | CompanyCreateWithoutUserInput[] | CompanyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput | CompanyCreateOrConnectWithoutUserInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutUserInput | CompanyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCreateManyUserInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutUserInput | CompanyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutUserInput | CompanyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type RentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RentCreateWithoutCompanyInput, RentUncheckedCreateWithoutCompanyInput> | RentCreateWithoutCompanyInput[] | RentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCompanyInput | RentCreateOrConnectWithoutCompanyInput[]
    createMany?: RentCreateManyCompanyInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type RequirementCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RequirementCreateWithoutCompanyInput, RequirementUncheckedCreateWithoutCompanyInput> | RequirementCreateWithoutCompanyInput[] | RequirementUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutCompanyInput | RequirementCreateOrConnectWithoutCompanyInput[]
    createMany?: RequirementCreateManyCompanyInputEnvelope
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
  }

  export type RentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RentCreateWithoutCompanyInput, RentUncheckedCreateWithoutCompanyInput> | RentCreateWithoutCompanyInput[] | RentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCompanyInput | RentCreateOrConnectWithoutCompanyInput[]
    createMany?: RentCreateManyCompanyInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type RequirementUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RequirementCreateWithoutCompanyInput, RequirementUncheckedCreateWithoutCompanyInput> | RequirementCreateWithoutCompanyInput[] | RequirementUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutCompanyInput | RequirementCreateOrConnectWithoutCompanyInput[]
    createMany?: RequirementCreateManyCompanyInputEnvelope
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput
    upsert?: UserUpsertWithoutCompaniesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompaniesInput, UserUpdateWithoutCompaniesInput>, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type RentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RentCreateWithoutCompanyInput, RentUncheckedCreateWithoutCompanyInput> | RentCreateWithoutCompanyInput[] | RentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCompanyInput | RentCreateOrConnectWithoutCompanyInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutCompanyInput | RentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RentCreateManyCompanyInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutCompanyInput | RentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RentUpdateManyWithWhereWithoutCompanyInput | RentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type RequirementUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RequirementCreateWithoutCompanyInput, RequirementUncheckedCreateWithoutCompanyInput> | RequirementCreateWithoutCompanyInput[] | RequirementUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutCompanyInput | RequirementCreateOrConnectWithoutCompanyInput[]
    upsert?: RequirementUpsertWithWhereUniqueWithoutCompanyInput | RequirementUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RequirementCreateManyCompanyInputEnvelope
    set?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    disconnect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    delete?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    update?: RequirementUpdateWithWhereUniqueWithoutCompanyInput | RequirementUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RequirementUpdateManyWithWhereWithoutCompanyInput | RequirementUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
  }

  export type RentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RentCreateWithoutCompanyInput, RentUncheckedCreateWithoutCompanyInput> | RentCreateWithoutCompanyInput[] | RentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RentCreateOrConnectWithoutCompanyInput | RentCreateOrConnectWithoutCompanyInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutCompanyInput | RentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RentCreateManyCompanyInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutCompanyInput | RentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RentUpdateManyWithWhereWithoutCompanyInput | RentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type RequirementUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RequirementCreateWithoutCompanyInput, RequirementUncheckedCreateWithoutCompanyInput> | RequirementCreateWithoutCompanyInput[] | RequirementUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutCompanyInput | RequirementCreateOrConnectWithoutCompanyInput[]
    upsert?: RequirementUpsertWithWhereUniqueWithoutCompanyInput | RequirementUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RequirementCreateManyCompanyInputEnvelope
    set?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    disconnect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    delete?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    update?: RequirementUpdateWithWhereUniqueWithoutCompanyInput | RequirementUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RequirementUpdateManyWithWhereWithoutCompanyInput | RequirementUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
  }

  export type RequirementCreategenderInput = {
    set: string[]
  }

  export type RequirementCreatedesc_jobInput = {
    set: string[]
  }

  export type RequirementCreateskillInput = {
    set: string[]
  }

  export type RequirementCreatekeywordInput = {
    set: string[]
  }

  export type CVRequirementCreateNestedManyWithoutRequirementInput = {
    create?: XOR<CVRequirementCreateWithoutRequirementInput, CVRequirementUncheckedCreateWithoutRequirementInput> | CVRequirementCreateWithoutRequirementInput[] | CVRequirementUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutRequirementInput | CVRequirementCreateOrConnectWithoutRequirementInput[]
    createMany?: CVRequirementCreateManyRequirementInputEnvelope
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<CompanyCreateWithoutRequirementsInput, CompanyUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRequirementsInput
    connect?: CompanyWhereUniqueInput
  }

  export type RequirementEducationCreateNestedManyWithoutRequirementInput = {
    create?: XOR<RequirementEducationCreateWithoutRequirementInput, RequirementEducationUncheckedCreateWithoutRequirementInput> | RequirementEducationCreateWithoutRequirementInput[] | RequirementEducationUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: RequirementEducationCreateOrConnectWithoutRequirementInput | RequirementEducationCreateOrConnectWithoutRequirementInput[]
    createMany?: RequirementEducationCreateManyRequirementInputEnvelope
    connect?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
  }

  export type CVRequirementUncheckedCreateNestedManyWithoutRequirementInput = {
    create?: XOR<CVRequirementCreateWithoutRequirementInput, CVRequirementUncheckedCreateWithoutRequirementInput> | CVRequirementCreateWithoutRequirementInput[] | CVRequirementUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutRequirementInput | CVRequirementCreateOrConnectWithoutRequirementInput[]
    createMany?: CVRequirementCreateManyRequirementInputEnvelope
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
  }

  export type RequirementEducationUncheckedCreateNestedManyWithoutRequirementInput = {
    create?: XOR<RequirementEducationCreateWithoutRequirementInput, RequirementEducationUncheckedCreateWithoutRequirementInput> | RequirementEducationCreateWithoutRequirementInput[] | RequirementEducationUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: RequirementEducationCreateOrConnectWithoutRequirementInput | RequirementEducationCreateOrConnectWithoutRequirementInput[]
    createMany?: RequirementEducationCreateManyRequirementInputEnvelope
    connect?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
  }

  export type RequirementUpdategenderInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RequirementUpdatedesc_jobInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RequirementUpdateskillInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RequirementUpdatekeywordInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CVRequirementUpdateManyWithoutRequirementNestedInput = {
    create?: XOR<CVRequirementCreateWithoutRequirementInput, CVRequirementUncheckedCreateWithoutRequirementInput> | CVRequirementCreateWithoutRequirementInput[] | CVRequirementUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutRequirementInput | CVRequirementCreateOrConnectWithoutRequirementInput[]
    upsert?: CVRequirementUpsertWithWhereUniqueWithoutRequirementInput | CVRequirementUpsertWithWhereUniqueWithoutRequirementInput[]
    createMany?: CVRequirementCreateManyRequirementInputEnvelope
    set?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    disconnect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    delete?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    update?: CVRequirementUpdateWithWhereUniqueWithoutRequirementInput | CVRequirementUpdateWithWhereUniqueWithoutRequirementInput[]
    updateMany?: CVRequirementUpdateManyWithWhereWithoutRequirementInput | CVRequirementUpdateManyWithWhereWithoutRequirementInput[]
    deleteMany?: CVRequirementScalarWhereInput | CVRequirementScalarWhereInput[]
  }

  export type CompanyUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<CompanyCreateWithoutRequirementsInput, CompanyUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRequirementsInput
    upsert?: CompanyUpsertWithoutRequirementsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRequirementsInput, CompanyUpdateWithoutRequirementsInput>, CompanyUncheckedUpdateWithoutRequirementsInput>
  }

  export type RequirementEducationUpdateManyWithoutRequirementNestedInput = {
    create?: XOR<RequirementEducationCreateWithoutRequirementInput, RequirementEducationUncheckedCreateWithoutRequirementInput> | RequirementEducationCreateWithoutRequirementInput[] | RequirementEducationUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: RequirementEducationCreateOrConnectWithoutRequirementInput | RequirementEducationCreateOrConnectWithoutRequirementInput[]
    upsert?: RequirementEducationUpsertWithWhereUniqueWithoutRequirementInput | RequirementEducationUpsertWithWhereUniqueWithoutRequirementInput[]
    createMany?: RequirementEducationCreateManyRequirementInputEnvelope
    set?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    disconnect?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    delete?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    connect?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    update?: RequirementEducationUpdateWithWhereUniqueWithoutRequirementInput | RequirementEducationUpdateWithWhereUniqueWithoutRequirementInput[]
    updateMany?: RequirementEducationUpdateManyWithWhereWithoutRequirementInput | RequirementEducationUpdateManyWithWhereWithoutRequirementInput[]
    deleteMany?: RequirementEducationScalarWhereInput | RequirementEducationScalarWhereInput[]
  }

  export type CVRequirementUncheckedUpdateManyWithoutRequirementNestedInput = {
    create?: XOR<CVRequirementCreateWithoutRequirementInput, CVRequirementUncheckedCreateWithoutRequirementInput> | CVRequirementCreateWithoutRequirementInput[] | CVRequirementUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutRequirementInput | CVRequirementCreateOrConnectWithoutRequirementInput[]
    upsert?: CVRequirementUpsertWithWhereUniqueWithoutRequirementInput | CVRequirementUpsertWithWhereUniqueWithoutRequirementInput[]
    createMany?: CVRequirementCreateManyRequirementInputEnvelope
    set?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    disconnect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    delete?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    update?: CVRequirementUpdateWithWhereUniqueWithoutRequirementInput | CVRequirementUpdateWithWhereUniqueWithoutRequirementInput[]
    updateMany?: CVRequirementUpdateManyWithWhereWithoutRequirementInput | CVRequirementUpdateManyWithWhereWithoutRequirementInput[]
    deleteMany?: CVRequirementScalarWhereInput | CVRequirementScalarWhereInput[]
  }

  export type RequirementEducationUncheckedUpdateManyWithoutRequirementNestedInput = {
    create?: XOR<RequirementEducationCreateWithoutRequirementInput, RequirementEducationUncheckedCreateWithoutRequirementInput> | RequirementEducationCreateWithoutRequirementInput[] | RequirementEducationUncheckedCreateWithoutRequirementInput[]
    connectOrCreate?: RequirementEducationCreateOrConnectWithoutRequirementInput | RequirementEducationCreateOrConnectWithoutRequirementInput[]
    upsert?: RequirementEducationUpsertWithWhereUniqueWithoutRequirementInput | RequirementEducationUpsertWithWhereUniqueWithoutRequirementInput[]
    createMany?: RequirementEducationCreateManyRequirementInputEnvelope
    set?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    disconnect?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    delete?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    connect?: RequirementEducationWhereUniqueInput | RequirementEducationWhereUniqueInput[]
    update?: RequirementEducationUpdateWithWhereUniqueWithoutRequirementInput | RequirementEducationUpdateWithWhereUniqueWithoutRequirementInput[]
    updateMany?: RequirementEducationUpdateManyWithWhereWithoutRequirementInput | RequirementEducationUpdateManyWithWhereWithoutRequirementInput[]
    deleteMany?: RequirementEducationScalarWhereInput | RequirementEducationScalarWhereInput[]
  }

  export type RequirementEducationCreatemajorInput = {
    set: string[]
  }

  export type RequirementCreateNestedOneWithoutEducationInput = {
    create?: XOR<RequirementCreateWithoutEducationInput, RequirementUncheckedCreateWithoutEducationInput>
    connectOrCreate?: RequirementCreateOrConnectWithoutEducationInput
    connect?: RequirementWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RequirementEducationUpdatemajorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RequirementUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<RequirementCreateWithoutEducationInput, RequirementUncheckedCreateWithoutEducationInput>
    connectOrCreate?: RequirementCreateOrConnectWithoutEducationInput
    upsert?: RequirementUpsertWithoutEducationInput
    connect?: RequirementWhereUniqueInput
    update?: XOR<XOR<RequirementUpdateToOneWithWhereWithoutEducationInput, RequirementUpdateWithoutEducationInput>, RequirementUncheckedUpdateWithoutEducationInput>
  }

  export type StandCreateNestedManyWithoutJobFairInput = {
    create?: XOR<StandCreateWithoutJobFairInput, StandUncheckedCreateWithoutJobFairInput> | StandCreateWithoutJobFairInput[] | StandUncheckedCreateWithoutJobFairInput[]
    connectOrCreate?: StandCreateOrConnectWithoutJobFairInput | StandCreateOrConnectWithoutJobFairInput[]
    createMany?: StandCreateManyJobFairInputEnvelope
    connect?: StandWhereUniqueInput | StandWhereUniqueInput[]
  }

  export type StandUncheckedCreateNestedManyWithoutJobFairInput = {
    create?: XOR<StandCreateWithoutJobFairInput, StandUncheckedCreateWithoutJobFairInput> | StandCreateWithoutJobFairInput[] | StandUncheckedCreateWithoutJobFairInput[]
    connectOrCreate?: StandCreateOrConnectWithoutJobFairInput | StandCreateOrConnectWithoutJobFairInput[]
    createMany?: StandCreateManyJobFairInputEnvelope
    connect?: StandWhereUniqueInput | StandWhereUniqueInput[]
  }

  export type StandUpdateManyWithoutJobFairNestedInput = {
    create?: XOR<StandCreateWithoutJobFairInput, StandUncheckedCreateWithoutJobFairInput> | StandCreateWithoutJobFairInput[] | StandUncheckedCreateWithoutJobFairInput[]
    connectOrCreate?: StandCreateOrConnectWithoutJobFairInput | StandCreateOrConnectWithoutJobFairInput[]
    upsert?: StandUpsertWithWhereUniqueWithoutJobFairInput | StandUpsertWithWhereUniqueWithoutJobFairInput[]
    createMany?: StandCreateManyJobFairInputEnvelope
    set?: StandWhereUniqueInput | StandWhereUniqueInput[]
    disconnect?: StandWhereUniqueInput | StandWhereUniqueInput[]
    delete?: StandWhereUniqueInput | StandWhereUniqueInput[]
    connect?: StandWhereUniqueInput | StandWhereUniqueInput[]
    update?: StandUpdateWithWhereUniqueWithoutJobFairInput | StandUpdateWithWhereUniqueWithoutJobFairInput[]
    updateMany?: StandUpdateManyWithWhereWithoutJobFairInput | StandUpdateManyWithWhereWithoutJobFairInput[]
    deleteMany?: StandScalarWhereInput | StandScalarWhereInput[]
  }

  export type StandUncheckedUpdateManyWithoutJobFairNestedInput = {
    create?: XOR<StandCreateWithoutJobFairInput, StandUncheckedCreateWithoutJobFairInput> | StandCreateWithoutJobFairInput[] | StandUncheckedCreateWithoutJobFairInput[]
    connectOrCreate?: StandCreateOrConnectWithoutJobFairInput | StandCreateOrConnectWithoutJobFairInput[]
    upsert?: StandUpsertWithWhereUniqueWithoutJobFairInput | StandUpsertWithWhereUniqueWithoutJobFairInput[]
    createMany?: StandCreateManyJobFairInputEnvelope
    set?: StandWhereUniqueInput | StandWhereUniqueInput[]
    disconnect?: StandWhereUniqueInput | StandWhereUniqueInput[]
    delete?: StandWhereUniqueInput | StandWhereUniqueInput[]
    connect?: StandWhereUniqueInput | StandWhereUniqueInput[]
    update?: StandUpdateWithWhereUniqueWithoutJobFairInput | StandUpdateWithWhereUniqueWithoutJobFairInput[]
    updateMany?: StandUpdateManyWithWhereWithoutJobFairInput | StandUpdateManyWithWhereWithoutJobFairInput[]
    deleteMany?: StandScalarWhereInput | StandScalarWhereInput[]
  }

  export type RentCreateNestedManyWithoutStandInput = {
    create?: XOR<RentCreateWithoutStandInput, RentUncheckedCreateWithoutStandInput> | RentCreateWithoutStandInput[] | RentUncheckedCreateWithoutStandInput[]
    connectOrCreate?: RentCreateOrConnectWithoutStandInput | RentCreateOrConnectWithoutStandInput[]
    createMany?: RentCreateManyStandInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type JobFairCreateNestedOneWithoutStandsInput = {
    create?: XOR<JobFairCreateWithoutStandsInput, JobFairUncheckedCreateWithoutStandsInput>
    connectOrCreate?: JobFairCreateOrConnectWithoutStandsInput
    connect?: JobFairWhereUniqueInput
  }

  export type RentUncheckedCreateNestedManyWithoutStandInput = {
    create?: XOR<RentCreateWithoutStandInput, RentUncheckedCreateWithoutStandInput> | RentCreateWithoutStandInput[] | RentUncheckedCreateWithoutStandInput[]
    connectOrCreate?: RentCreateOrConnectWithoutStandInput | RentCreateOrConnectWithoutStandInput[]
    createMany?: RentCreateManyStandInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type RentUpdateManyWithoutStandNestedInput = {
    create?: XOR<RentCreateWithoutStandInput, RentUncheckedCreateWithoutStandInput> | RentCreateWithoutStandInput[] | RentUncheckedCreateWithoutStandInput[]
    connectOrCreate?: RentCreateOrConnectWithoutStandInput | RentCreateOrConnectWithoutStandInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutStandInput | RentUpsertWithWhereUniqueWithoutStandInput[]
    createMany?: RentCreateManyStandInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutStandInput | RentUpdateWithWhereUniqueWithoutStandInput[]
    updateMany?: RentUpdateManyWithWhereWithoutStandInput | RentUpdateManyWithWhereWithoutStandInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type JobFairUpdateOneRequiredWithoutStandsNestedInput = {
    create?: XOR<JobFairCreateWithoutStandsInput, JobFairUncheckedCreateWithoutStandsInput>
    connectOrCreate?: JobFairCreateOrConnectWithoutStandsInput
    upsert?: JobFairUpsertWithoutStandsInput
    connect?: JobFairWhereUniqueInput
    update?: XOR<XOR<JobFairUpdateToOneWithWhereWithoutStandsInput, JobFairUpdateWithoutStandsInput>, JobFairUncheckedUpdateWithoutStandsInput>
  }

  export type RentUncheckedUpdateManyWithoutStandNestedInput = {
    create?: XOR<RentCreateWithoutStandInput, RentUncheckedCreateWithoutStandInput> | RentCreateWithoutStandInput[] | RentUncheckedCreateWithoutStandInput[]
    connectOrCreate?: RentCreateOrConnectWithoutStandInput | RentCreateOrConnectWithoutStandInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutStandInput | RentUpsertWithWhereUniqueWithoutStandInput[]
    createMany?: RentCreateManyStandInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutStandInput | RentUpdateWithWhereUniqueWithoutStandInput[]
    updateMany?: RentUpdateManyWithWhereWithoutStandInput | RentUpdateManyWithWhereWithoutStandInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutRentsInput = {
    create?: XOR<CompanyCreateWithoutRentsInput, CompanyUncheckedCreateWithoutRentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type StandCreateNestedOneWithoutRentsInput = {
    create?: XOR<StandCreateWithoutRentsInput, StandUncheckedCreateWithoutRentsInput>
    connectOrCreate?: StandCreateOrConnectWithoutRentsInput
    connect?: StandWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutRentsNestedInput = {
    create?: XOR<CompanyCreateWithoutRentsInput, CompanyUncheckedCreateWithoutRentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRentsInput
    upsert?: CompanyUpsertWithoutRentsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRentsInput, CompanyUpdateWithoutRentsInput>, CompanyUncheckedUpdateWithoutRentsInput>
  }

  export type StandUpdateOneRequiredWithoutRentsNestedInput = {
    create?: XOR<StandCreateWithoutRentsInput, StandUncheckedCreateWithoutRentsInput>
    connectOrCreate?: StandCreateOrConnectWithoutRentsInput
    upsert?: StandUpsertWithoutRentsInput
    connect?: StandWhereUniqueInput
    update?: XOR<XOR<StandUpdateToOneWithWhereWithoutRentsInput, StandUpdateWithoutRentsInput>, StandUncheckedUpdateWithoutRentsInput>
  }

  export type CVCreatesocial_mediaInput = {
    set: string[]
  }

  export type AchievementCreateNestedManyWithoutCvInput = {
    create?: XOR<AchievementCreateWithoutCvInput, AchievementUncheckedCreateWithoutCvInput> | AchievementCreateWithoutCvInput[] | AchievementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutCvInput | AchievementCreateOrConnectWithoutCvInput[]
    createMany?: AchievementCreateManyCvInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCvsInput = {
    create?: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCvsInput
    connect?: UserWhereUniqueInput
  }

  export type CVRequirementCreateNestedManyWithoutCvInput = {
    create?: XOR<CVRequirementCreateWithoutCvInput, CVRequirementUncheckedCreateWithoutCvInput> | CVRequirementCreateWithoutCvInput[] | CVRequirementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutCvInput | CVRequirementCreateOrConnectWithoutCvInput[]
    createMany?: CVRequirementCreateManyCvInputEnvelope
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutCvInput = {
    create?: XOR<CertificateCreateWithoutCvInput, CertificateUncheckedCreateWithoutCvInput> | CertificateCreateWithoutCvInput[] | CertificateUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCvInput | CertificateCreateOrConnectWithoutCvInput[]
    createMany?: CertificateCreateManyCvInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutCvInput = {
    create?: XOR<EducationCreateWithoutCvInput, EducationUncheckedCreateWithoutCvInput> | EducationCreateWithoutCvInput[] | EducationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCvInput | EducationCreateOrConnectWithoutCvInput[]
    createMany?: EducationCreateManyCvInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutCvInput = {
    create?: XOR<ExperienceCreateWithoutCvInput, ExperienceUncheckedCreateWithoutCvInput> | ExperienceCreateWithoutCvInput[] | ExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCvInput | ExperienceCreateOrConnectWithoutCvInput[]
    createMany?: ExperienceCreateManyCvInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type SkillsCreateNestedManyWithoutCvInput = {
    create?: XOR<SkillsCreateWithoutCvInput, SkillsUncheckedCreateWithoutCvInput> | SkillsCreateWithoutCvInput[] | SkillsUncheckedCreateWithoutCvInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCvInput | SkillsCreateOrConnectWithoutCvInput[]
    createMany?: SkillsCreateManyCvInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type WorkExperienceCreateNestedManyWithoutCvInput = {
    create?: XOR<WorkExperienceCreateWithoutCvInput, WorkExperienceUncheckedCreateWithoutCvInput> | WorkExperienceCreateWithoutCvInput[] | WorkExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutCvInput | WorkExperienceCreateOrConnectWithoutCvInput[]
    createMany?: WorkExperienceCreateManyCvInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<AchievementCreateWithoutCvInput, AchievementUncheckedCreateWithoutCvInput> | AchievementCreateWithoutCvInput[] | AchievementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutCvInput | AchievementCreateOrConnectWithoutCvInput[]
    createMany?: AchievementCreateManyCvInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type CVRequirementUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<CVRequirementCreateWithoutCvInput, CVRequirementUncheckedCreateWithoutCvInput> | CVRequirementCreateWithoutCvInput[] | CVRequirementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutCvInput | CVRequirementCreateOrConnectWithoutCvInput[]
    createMany?: CVRequirementCreateManyCvInputEnvelope
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<CertificateCreateWithoutCvInput, CertificateUncheckedCreateWithoutCvInput> | CertificateCreateWithoutCvInput[] | CertificateUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCvInput | CertificateCreateOrConnectWithoutCvInput[]
    createMany?: CertificateCreateManyCvInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<EducationCreateWithoutCvInput, EducationUncheckedCreateWithoutCvInput> | EducationCreateWithoutCvInput[] | EducationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCvInput | EducationCreateOrConnectWithoutCvInput[]
    createMany?: EducationCreateManyCvInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<ExperienceCreateWithoutCvInput, ExperienceUncheckedCreateWithoutCvInput> | ExperienceCreateWithoutCvInput[] | ExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCvInput | ExperienceCreateOrConnectWithoutCvInput[]
    createMany?: ExperienceCreateManyCvInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type SkillsUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<SkillsCreateWithoutCvInput, SkillsUncheckedCreateWithoutCvInput> | SkillsCreateWithoutCvInput[] | SkillsUncheckedCreateWithoutCvInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCvInput | SkillsCreateOrConnectWithoutCvInput[]
    createMany?: SkillsCreateManyCvInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type WorkExperienceUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<WorkExperienceCreateWithoutCvInput, WorkExperienceUncheckedCreateWithoutCvInput> | WorkExperienceCreateWithoutCvInput[] | WorkExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutCvInput | WorkExperienceCreateOrConnectWithoutCvInput[]
    createMany?: WorkExperienceCreateManyCvInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type CVUpdatesocial_mediaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AchievementUpdateManyWithoutCvNestedInput = {
    create?: XOR<AchievementCreateWithoutCvInput, AchievementUncheckedCreateWithoutCvInput> | AchievementCreateWithoutCvInput[] | AchievementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutCvInput | AchievementCreateOrConnectWithoutCvInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutCvInput | AchievementUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: AchievementCreateManyCvInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutCvInput | AchievementUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutCvInput | AchievementUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCvsNestedInput = {
    create?: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCvsInput
    upsert?: UserUpsertWithoutCvsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCvsInput, UserUpdateWithoutCvsInput>, UserUncheckedUpdateWithoutCvsInput>
  }

  export type CVRequirementUpdateManyWithoutCvNestedInput = {
    create?: XOR<CVRequirementCreateWithoutCvInput, CVRequirementUncheckedCreateWithoutCvInput> | CVRequirementCreateWithoutCvInput[] | CVRequirementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutCvInput | CVRequirementCreateOrConnectWithoutCvInput[]
    upsert?: CVRequirementUpsertWithWhereUniqueWithoutCvInput | CVRequirementUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: CVRequirementCreateManyCvInputEnvelope
    set?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    disconnect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    delete?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    update?: CVRequirementUpdateWithWhereUniqueWithoutCvInput | CVRequirementUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: CVRequirementUpdateManyWithWhereWithoutCvInput | CVRequirementUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: CVRequirementScalarWhereInput | CVRequirementScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutCvNestedInput = {
    create?: XOR<CertificateCreateWithoutCvInput, CertificateUncheckedCreateWithoutCvInput> | CertificateCreateWithoutCvInput[] | CertificateUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCvInput | CertificateCreateOrConnectWithoutCvInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutCvInput | CertificateUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: CertificateCreateManyCvInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutCvInput | CertificateUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutCvInput | CertificateUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutCvNestedInput = {
    create?: XOR<EducationCreateWithoutCvInput, EducationUncheckedCreateWithoutCvInput> | EducationCreateWithoutCvInput[] | EducationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCvInput | EducationCreateOrConnectWithoutCvInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutCvInput | EducationUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: EducationCreateManyCvInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutCvInput | EducationUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutCvInput | EducationUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutCvNestedInput = {
    create?: XOR<ExperienceCreateWithoutCvInput, ExperienceUncheckedCreateWithoutCvInput> | ExperienceCreateWithoutCvInput[] | ExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCvInput | ExperienceCreateOrConnectWithoutCvInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCvInput | ExperienceUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: ExperienceCreateManyCvInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCvInput | ExperienceUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCvInput | ExperienceUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type SkillsUpdateManyWithoutCvNestedInput = {
    create?: XOR<SkillsCreateWithoutCvInput, SkillsUncheckedCreateWithoutCvInput> | SkillsCreateWithoutCvInput[] | SkillsUncheckedCreateWithoutCvInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCvInput | SkillsCreateOrConnectWithoutCvInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutCvInput | SkillsUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: SkillsCreateManyCvInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutCvInput | SkillsUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutCvInput | SkillsUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type WorkExperienceUpdateManyWithoutCvNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutCvInput, WorkExperienceUncheckedCreateWithoutCvInput> | WorkExperienceCreateWithoutCvInput[] | WorkExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutCvInput | WorkExperienceCreateOrConnectWithoutCvInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutCvInput | WorkExperienceUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: WorkExperienceCreateManyCvInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutCvInput | WorkExperienceUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutCvInput | WorkExperienceUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<AchievementCreateWithoutCvInput, AchievementUncheckedCreateWithoutCvInput> | AchievementCreateWithoutCvInput[] | AchievementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutCvInput | AchievementCreateOrConnectWithoutCvInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutCvInput | AchievementUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: AchievementCreateManyCvInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutCvInput | AchievementUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutCvInput | AchievementUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type CVRequirementUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<CVRequirementCreateWithoutCvInput, CVRequirementUncheckedCreateWithoutCvInput> | CVRequirementCreateWithoutCvInput[] | CVRequirementUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CVRequirementCreateOrConnectWithoutCvInput | CVRequirementCreateOrConnectWithoutCvInput[]
    upsert?: CVRequirementUpsertWithWhereUniqueWithoutCvInput | CVRequirementUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: CVRequirementCreateManyCvInputEnvelope
    set?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    disconnect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    delete?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    connect?: CVRequirementWhereUniqueInput | CVRequirementWhereUniqueInput[]
    update?: CVRequirementUpdateWithWhereUniqueWithoutCvInput | CVRequirementUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: CVRequirementUpdateManyWithWhereWithoutCvInput | CVRequirementUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: CVRequirementScalarWhereInput | CVRequirementScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<CertificateCreateWithoutCvInput, CertificateUncheckedCreateWithoutCvInput> | CertificateCreateWithoutCvInput[] | CertificateUncheckedCreateWithoutCvInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutCvInput | CertificateCreateOrConnectWithoutCvInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutCvInput | CertificateUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: CertificateCreateManyCvInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutCvInput | CertificateUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutCvInput | CertificateUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<EducationCreateWithoutCvInput, EducationUncheckedCreateWithoutCvInput> | EducationCreateWithoutCvInput[] | EducationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCvInput | EducationCreateOrConnectWithoutCvInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutCvInput | EducationUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: EducationCreateManyCvInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutCvInput | EducationUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutCvInput | EducationUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<ExperienceCreateWithoutCvInput, ExperienceUncheckedCreateWithoutCvInput> | ExperienceCreateWithoutCvInput[] | ExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCvInput | ExperienceCreateOrConnectWithoutCvInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCvInput | ExperienceUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: ExperienceCreateManyCvInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCvInput | ExperienceUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCvInput | ExperienceUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type SkillsUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<SkillsCreateWithoutCvInput, SkillsUncheckedCreateWithoutCvInput> | SkillsCreateWithoutCvInput[] | SkillsUncheckedCreateWithoutCvInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCvInput | SkillsCreateOrConnectWithoutCvInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutCvInput | SkillsUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: SkillsCreateManyCvInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutCvInput | SkillsUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutCvInput | SkillsUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type WorkExperienceUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutCvInput, WorkExperienceUncheckedCreateWithoutCvInput> | WorkExperienceCreateWithoutCvInput[] | WorkExperienceUncheckedCreateWithoutCvInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutCvInput | WorkExperienceCreateOrConnectWithoutCvInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutCvInput | WorkExperienceUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: WorkExperienceCreateManyCvInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutCvInput | WorkExperienceUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutCvInput | WorkExperienceUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type SkillsCreateskillInput = {
    set: string[]
  }

  export type CVCreateNestedOneWithoutSkillInput = {
    create?: XOR<CVCreateWithoutSkillInput, CVUncheckedCreateWithoutSkillInput>
    connectOrCreate?: CVCreateOrConnectWithoutSkillInput
    connect?: CVWhereUniqueInput
  }

  export type SkillsUpdateskillInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CVUpdateOneRequiredWithoutSkillNestedInput = {
    create?: XOR<CVCreateWithoutSkillInput, CVUncheckedCreateWithoutSkillInput>
    connectOrCreate?: CVCreateOrConnectWithoutSkillInput
    upsert?: CVUpsertWithoutSkillInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutSkillInput, CVUpdateWithoutSkillInput>, CVUncheckedUpdateWithoutSkillInput>
  }

  export type CVCreateNestedOneWithoutAchievementInput = {
    create?: XOR<CVCreateWithoutAchievementInput, CVUncheckedCreateWithoutAchievementInput>
    connectOrCreate?: CVCreateOrConnectWithoutAchievementInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutAchievementNestedInput = {
    create?: XOR<CVCreateWithoutAchievementInput, CVUncheckedCreateWithoutAchievementInput>
    connectOrCreate?: CVCreateOrConnectWithoutAchievementInput
    upsert?: CVUpsertWithoutAchievementInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutAchievementInput, CVUpdateWithoutAchievementInput>, CVUncheckedUpdateWithoutAchievementInput>
  }

  export type CVCreateNestedOneWithoutExperienceInput = {
    create?: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CVCreateOrConnectWithoutExperienceInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CVCreateOrConnectWithoutExperienceInput
    upsert?: CVUpsertWithoutExperienceInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutExperienceInput, CVUpdateWithoutExperienceInput>, CVUncheckedUpdateWithoutExperienceInput>
  }

  export type CVCreateNestedOneWithoutCv_requirementsInput = {
    create?: XOR<CVCreateWithoutCv_requirementsInput, CVUncheckedCreateWithoutCv_requirementsInput>
    connectOrCreate?: CVCreateOrConnectWithoutCv_requirementsInput
    connect?: CVWhereUniqueInput
  }

  export type RequirementCreateNestedOneWithoutCv_requirementsInput = {
    create?: XOR<RequirementCreateWithoutCv_requirementsInput, RequirementUncheckedCreateWithoutCv_requirementsInput>
    connectOrCreate?: RequirementCreateOrConnectWithoutCv_requirementsInput
    connect?: RequirementWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutCv_requirementsNestedInput = {
    create?: XOR<CVCreateWithoutCv_requirementsInput, CVUncheckedCreateWithoutCv_requirementsInput>
    connectOrCreate?: CVCreateOrConnectWithoutCv_requirementsInput
    upsert?: CVUpsertWithoutCv_requirementsInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutCv_requirementsInput, CVUpdateWithoutCv_requirementsInput>, CVUncheckedUpdateWithoutCv_requirementsInput>
  }

  export type RequirementUpdateOneRequiredWithoutCv_requirementsNestedInput = {
    create?: XOR<RequirementCreateWithoutCv_requirementsInput, RequirementUncheckedCreateWithoutCv_requirementsInput>
    connectOrCreate?: RequirementCreateOrConnectWithoutCv_requirementsInput
    upsert?: RequirementUpsertWithoutCv_requirementsInput
    connect?: RequirementWhereUniqueInput
    update?: XOR<XOR<RequirementUpdateToOneWithWhereWithoutCv_requirementsInput, RequirementUpdateWithoutCv_requirementsInput>, RequirementUncheckedUpdateWithoutCv_requirementsInput>
  }

  export type CVCreateNestedOneWithoutEducationsInput = {
    create?: XOR<CVCreateWithoutEducationsInput, CVUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: CVCreateOrConnectWithoutEducationsInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutEducationsNestedInput = {
    create?: XOR<CVCreateWithoutEducationsInput, CVUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: CVCreateOrConnectWithoutEducationsInput
    upsert?: CVUpsertWithoutEducationsInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutEducationsInput, CVUpdateWithoutEducationsInput>, CVUncheckedUpdateWithoutEducationsInput>
  }

  export type WorkExperienceCreatedescInput = {
    set: string[]
  }

  export type CVCreateNestedOneWithoutWorkExperiencesInput = {
    create?: XOR<CVCreateWithoutWorkExperiencesInput, CVUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: CVCreateOrConnectWithoutWorkExperiencesInput
    connect?: CVWhereUniqueInput
  }

  export type WorkExperienceUpdatedescInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CVUpdateOneRequiredWithoutWorkExperiencesNestedInput = {
    create?: XOR<CVCreateWithoutWorkExperiencesInput, CVUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: CVCreateOrConnectWithoutWorkExperiencesInput
    upsert?: CVUpsertWithoutWorkExperiencesInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutWorkExperiencesInput, CVUpdateWithoutWorkExperiencesInput>, CVUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type CVCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<CVCreateWithoutCertificatesInput, CVUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: CVCreateOrConnectWithoutCertificatesInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<CVCreateWithoutCertificatesInput, CVUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: CVCreateOrConnectWithoutCertificatesInput
    upsert?: CVUpsertWithoutCertificatesInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutCertificatesInput, CVUpdateWithoutCertificatesInput>, CVUncheckedUpdateWithoutCertificatesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type CVCreateWithoutUserInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutUserInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput>
  }

  export type CVCreateManyUserInputEnvelope = {
    data: CVCreateManyUserInput | CVCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutUserInput = {
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    rents?: RentCreateNestedManyWithoutCompanyInput
    requirements?: RequirementCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    rents?: RentUncheckedCreateNestedManyWithoutCompanyInput
    requirements?: RequirementUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateManyUserInputEnvelope = {
    data: CompanyCreateManyUserInput | CompanyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CVUpsertWithWhereUniqueWithoutUserInput = {
    where: CVWhereUniqueInput
    update: XOR<CVUpdateWithoutUserInput, CVUncheckedUpdateWithoutUserInput>
    create: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput>
  }

  export type CVUpdateWithWhereUniqueWithoutUserInput = {
    where: CVWhereUniqueInput
    data: XOR<CVUpdateWithoutUserInput, CVUncheckedUpdateWithoutUserInput>
  }

  export type CVUpdateManyWithWhereWithoutUserInput = {
    where: CVScalarWhereInput
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyWithoutUserInput>
  }

  export type CVScalarWhereInput = {
    AND?: CVScalarWhereInput | CVScalarWhereInput[]
    OR?: CVScalarWhereInput[]
    NOT?: CVScalarWhereInput | CVScalarWhereInput[]
    id?: IntFilter<"CV"> | number
    user_id?: IntFilter<"CV"> | number
    name?: StringFilter<"CV"> | string
    address?: StringFilter<"CV"> | string
    email?: StringFilter<"CV"> | string
    gender?: EnumGenderFilter<"CV"> | $Enums.Gender
    phone?: StringFilter<"CV"> | string
    birth_date?: DateTimeFilter<"CV"> | Date | string
    social_media?: StringNullableListFilter<"CV">
    desc?: StringFilter<"CV"> | string
    createdAt?: DateTimeFilter<"CV"> | Date | string
    updatedAt?: DateTimeFilter<"CV"> | Date | string
  }

  export type CompanyUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateManyWithWhereWithoutUserInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    user_id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    desc?: StringFilter<"Company"> | string
    social_media?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    locationStand?: StringNullableFilter<"Company"> | string | null
  }

  export type UserCreateWithoutCompaniesInput = {
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cvs?: CVCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompaniesInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cvs?: CVUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
  }

  export type RentCreateWithoutCompanyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    stand: StandCreateNestedOneWithoutRentsInput
  }

  export type RentUncheckedCreateWithoutCompanyInput = {
    id?: number
    stand_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentCreateOrConnectWithoutCompanyInput = {
    where: RentWhereUniqueInput
    create: XOR<RentCreateWithoutCompanyInput, RentUncheckedCreateWithoutCompanyInput>
  }

  export type RentCreateManyCompanyInputEnvelope = {
    data: RentCreateManyCompanyInput | RentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type RequirementCreateWithoutCompanyInput = {
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementCreateNestedManyWithoutRequirementInput
    education?: RequirementEducationCreateNestedManyWithoutRequirementInput
  }

  export type RequirementUncheckedCreateWithoutCompanyInput = {
    id?: number
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutRequirementInput
    education?: RequirementEducationUncheckedCreateNestedManyWithoutRequirementInput
  }

  export type RequirementCreateOrConnectWithoutCompanyInput = {
    where: RequirementWhereUniqueInput
    create: XOR<RequirementCreateWithoutCompanyInput, RequirementUncheckedCreateWithoutCompanyInput>
  }

  export type RequirementCreateManyCompanyInputEnvelope = {
    data: RequirementCreateManyCompanyInput | RequirementCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompaniesInput = {
    update: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
    create: XOR<UserCreateWithoutCompaniesInput, UserUncheckedCreateWithoutCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompaniesInput, UserUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserUpdateWithoutCompaniesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cvs?: CVUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cvs?: CVUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: RentWhereUniqueInput
    update: XOR<RentUpdateWithoutCompanyInput, RentUncheckedUpdateWithoutCompanyInput>
    create: XOR<RentCreateWithoutCompanyInput, RentUncheckedCreateWithoutCompanyInput>
  }

  export type RentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: RentWhereUniqueInput
    data: XOR<RentUpdateWithoutCompanyInput, RentUncheckedUpdateWithoutCompanyInput>
  }

  export type RentUpdateManyWithWhereWithoutCompanyInput = {
    where: RentScalarWhereInput
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type RentScalarWhereInput = {
    AND?: RentScalarWhereInput | RentScalarWhereInput[]
    OR?: RentScalarWhereInput[]
    NOT?: RentScalarWhereInput | RentScalarWhereInput[]
    id?: IntFilter<"Rent"> | number
    stand_id?: IntFilter<"Rent"> | number
    company_id?: IntFilter<"Rent"> | number
    createdAt?: DateTimeFilter<"Rent"> | Date | string
    updatedAt?: DateTimeFilter<"Rent"> | Date | string
  }

  export type RequirementUpsertWithWhereUniqueWithoutCompanyInput = {
    where: RequirementWhereUniqueInput
    update: XOR<RequirementUpdateWithoutCompanyInput, RequirementUncheckedUpdateWithoutCompanyInput>
    create: XOR<RequirementCreateWithoutCompanyInput, RequirementUncheckedCreateWithoutCompanyInput>
  }

  export type RequirementUpdateWithWhereUniqueWithoutCompanyInput = {
    where: RequirementWhereUniqueInput
    data: XOR<RequirementUpdateWithoutCompanyInput, RequirementUncheckedUpdateWithoutCompanyInput>
  }

  export type RequirementUpdateManyWithWhereWithoutCompanyInput = {
    where: RequirementScalarWhereInput
    data: XOR<RequirementUpdateManyMutationInput, RequirementUncheckedUpdateManyWithoutCompanyInput>
  }

  export type RequirementScalarWhereInput = {
    AND?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
    OR?: RequirementScalarWhereInput[]
    NOT?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
    id?: IntFilter<"Requirement"> | number
    company_id?: IntFilter<"Requirement"> | number
    min_age?: IntFilter<"Requirement"> | number
    max_age?: IntFilter<"Requirement"> | number
    gender?: StringNullableListFilter<"Requirement">
    position?: StringFilter<"Requirement"> | string
    desc_job?: StringNullableListFilter<"Requirement">
    skill?: StringNullableListFilter<"Requirement">
    keyword?: StringNullableListFilter<"Requirement">
    createdAt?: DateTimeFilter<"Requirement"> | Date | string
    updatedAt?: DateTimeFilter<"Requirement"> | Date | string
  }

  export type CVRequirementCreateWithoutRequirementInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cv: CVCreateNestedOneWithoutCv_requirementsInput
  }

  export type CVRequirementUncheckedCreateWithoutRequirementInput = {
    id?: number
    cv_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVRequirementCreateOrConnectWithoutRequirementInput = {
    where: CVRequirementWhereUniqueInput
    create: XOR<CVRequirementCreateWithoutRequirementInput, CVRequirementUncheckedCreateWithoutRequirementInput>
  }

  export type CVRequirementCreateManyRequirementInputEnvelope = {
    data: CVRequirementCreateManyRequirementInput | CVRequirementCreateManyRequirementInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutRequirementsInput = {
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    user: UserCreateNestedOneWithoutCompaniesInput
    rents?: RentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRequirementsInput = {
    id?: number
    user_id: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    rents?: RentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRequirementsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRequirementsInput, CompanyUncheckedCreateWithoutRequirementsInput>
  }

  export type RequirementEducationCreateWithoutRequirementInput = {
    degree: string
    grade: number
    createdAt?: Date | string
    updateAt?: Date | string
    major?: RequirementEducationCreatemajorInput | string[]
  }

  export type RequirementEducationUncheckedCreateWithoutRequirementInput = {
    id?: number
    degree: string
    grade: number
    createdAt?: Date | string
    updateAt?: Date | string
    major?: RequirementEducationCreatemajorInput | string[]
  }

  export type RequirementEducationCreateOrConnectWithoutRequirementInput = {
    where: RequirementEducationWhereUniqueInput
    create: XOR<RequirementEducationCreateWithoutRequirementInput, RequirementEducationUncheckedCreateWithoutRequirementInput>
  }

  export type RequirementEducationCreateManyRequirementInputEnvelope = {
    data: RequirementEducationCreateManyRequirementInput | RequirementEducationCreateManyRequirementInput[]
    skipDuplicates?: boolean
  }

  export type CVRequirementUpsertWithWhereUniqueWithoutRequirementInput = {
    where: CVRequirementWhereUniqueInput
    update: XOR<CVRequirementUpdateWithoutRequirementInput, CVRequirementUncheckedUpdateWithoutRequirementInput>
    create: XOR<CVRequirementCreateWithoutRequirementInput, CVRequirementUncheckedCreateWithoutRequirementInput>
  }

  export type CVRequirementUpdateWithWhereUniqueWithoutRequirementInput = {
    where: CVRequirementWhereUniqueInput
    data: XOR<CVRequirementUpdateWithoutRequirementInput, CVRequirementUncheckedUpdateWithoutRequirementInput>
  }

  export type CVRequirementUpdateManyWithWhereWithoutRequirementInput = {
    where: CVRequirementScalarWhereInput
    data: XOR<CVRequirementUpdateManyMutationInput, CVRequirementUncheckedUpdateManyWithoutRequirementInput>
  }

  export type CVRequirementScalarWhereInput = {
    AND?: CVRequirementScalarWhereInput | CVRequirementScalarWhereInput[]
    OR?: CVRequirementScalarWhereInput[]
    NOT?: CVRequirementScalarWhereInput | CVRequirementScalarWhereInput[]
    id?: IntFilter<"CVRequirement"> | number
    cv_id?: IntFilter<"CVRequirement"> | number
    requirement_id?: IntFilter<"CVRequirement"> | number
    createdAt?: DateTimeFilter<"CVRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"CVRequirement"> | Date | string
  }

  export type CompanyUpsertWithoutRequirementsInput = {
    update: XOR<CompanyUpdateWithoutRequirementsInput, CompanyUncheckedUpdateWithoutRequirementsInput>
    create: XOR<CompanyCreateWithoutRequirementsInput, CompanyUncheckedCreateWithoutRequirementsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRequirementsInput, CompanyUncheckedUpdateWithoutRequirementsInput>
  }

  export type CompanyUpdateWithoutRequirementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput
    rents?: RentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRequirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    rents?: RentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type RequirementEducationUpsertWithWhereUniqueWithoutRequirementInput = {
    where: RequirementEducationWhereUniqueInput
    update: XOR<RequirementEducationUpdateWithoutRequirementInput, RequirementEducationUncheckedUpdateWithoutRequirementInput>
    create: XOR<RequirementEducationCreateWithoutRequirementInput, RequirementEducationUncheckedCreateWithoutRequirementInput>
  }

  export type RequirementEducationUpdateWithWhereUniqueWithoutRequirementInput = {
    where: RequirementEducationWhereUniqueInput
    data: XOR<RequirementEducationUpdateWithoutRequirementInput, RequirementEducationUncheckedUpdateWithoutRequirementInput>
  }

  export type RequirementEducationUpdateManyWithWhereWithoutRequirementInput = {
    where: RequirementEducationScalarWhereInput
    data: XOR<RequirementEducationUpdateManyMutationInput, RequirementEducationUncheckedUpdateManyWithoutRequirementInput>
  }

  export type RequirementEducationScalarWhereInput = {
    AND?: RequirementEducationScalarWhereInput | RequirementEducationScalarWhereInput[]
    OR?: RequirementEducationScalarWhereInput[]
    NOT?: RequirementEducationScalarWhereInput | RequirementEducationScalarWhereInput[]
    id?: IntFilter<"RequirementEducation"> | number
    requirement_id?: IntFilter<"RequirementEducation"> | number
    degree?: StringFilter<"RequirementEducation"> | string
    grade?: FloatFilter<"RequirementEducation"> | number
    createdAt?: DateTimeFilter<"RequirementEducation"> | Date | string
    updateAt?: DateTimeFilter<"RequirementEducation"> | Date | string
    major?: StringNullableListFilter<"RequirementEducation">
  }

  export type RequirementCreateWithoutEducationInput = {
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementCreateNestedManyWithoutRequirementInput
    company: CompanyCreateNestedOneWithoutRequirementsInput
  }

  export type RequirementUncheckedCreateWithoutEducationInput = {
    id?: number
    company_id: number
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutRequirementInput
  }

  export type RequirementCreateOrConnectWithoutEducationInput = {
    where: RequirementWhereUniqueInput
    create: XOR<RequirementCreateWithoutEducationInput, RequirementUncheckedCreateWithoutEducationInput>
  }

  export type RequirementUpsertWithoutEducationInput = {
    update: XOR<RequirementUpdateWithoutEducationInput, RequirementUncheckedUpdateWithoutEducationInput>
    create: XOR<RequirementCreateWithoutEducationInput, RequirementUncheckedCreateWithoutEducationInput>
    where?: RequirementWhereInput
  }

  export type RequirementUpdateToOneWithWhereWithoutEducationInput = {
    where?: RequirementWhereInput
    data: XOR<RequirementUpdateWithoutEducationInput, RequirementUncheckedUpdateWithoutEducationInput>
  }

  export type RequirementUpdateWithoutEducationInput = {
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUpdateManyWithoutRequirementNestedInput
    company?: CompanyUpdateOneRequiredWithoutRequirementsNestedInput
  }

  export type RequirementUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutRequirementNestedInput
  }

  export type StandCreateWithoutJobFairInput = {
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rents?: RentCreateNestedManyWithoutStandInput
  }

  export type StandUncheckedCreateWithoutJobFairInput = {
    id?: number
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rents?: RentUncheckedCreateNestedManyWithoutStandInput
  }

  export type StandCreateOrConnectWithoutJobFairInput = {
    where: StandWhereUniqueInput
    create: XOR<StandCreateWithoutJobFairInput, StandUncheckedCreateWithoutJobFairInput>
  }

  export type StandCreateManyJobFairInputEnvelope = {
    data: StandCreateManyJobFairInput | StandCreateManyJobFairInput[]
    skipDuplicates?: boolean
  }

  export type StandUpsertWithWhereUniqueWithoutJobFairInput = {
    where: StandWhereUniqueInput
    update: XOR<StandUpdateWithoutJobFairInput, StandUncheckedUpdateWithoutJobFairInput>
    create: XOR<StandCreateWithoutJobFairInput, StandUncheckedCreateWithoutJobFairInput>
  }

  export type StandUpdateWithWhereUniqueWithoutJobFairInput = {
    where: StandWhereUniqueInput
    data: XOR<StandUpdateWithoutJobFairInput, StandUncheckedUpdateWithoutJobFairInput>
  }

  export type StandUpdateManyWithWhereWithoutJobFairInput = {
    where: StandScalarWhereInput
    data: XOR<StandUpdateManyMutationInput, StandUncheckedUpdateManyWithoutJobFairInput>
  }

  export type StandScalarWhereInput = {
    AND?: StandScalarWhereInput | StandScalarWhereInput[]
    OR?: StandScalarWhereInput[]
    NOT?: StandScalarWhereInput | StandScalarWhereInput[]
    id?: IntFilter<"Stand"> | number
    job_fair_id?: IntFilter<"Stand"> | number
    number?: IntFilter<"Stand"> | number
    location?: StringFilter<"Stand"> | string
    createdAt?: DateTimeFilter<"Stand"> | Date | string
    updatedAt?: DateTimeFilter<"Stand"> | Date | string
  }

  export type RentCreateWithoutStandInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRentsInput
  }

  export type RentUncheckedCreateWithoutStandInput = {
    id?: number
    company_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentCreateOrConnectWithoutStandInput = {
    where: RentWhereUniqueInput
    create: XOR<RentCreateWithoutStandInput, RentUncheckedCreateWithoutStandInput>
  }

  export type RentCreateManyStandInputEnvelope = {
    data: RentCreateManyStandInput | RentCreateManyStandInput[]
    skipDuplicates?: boolean
  }

  export type JobFairCreateWithoutStandsInput = {
    name: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobFairUncheckedCreateWithoutStandsInput = {
    id?: number
    name: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobFairCreateOrConnectWithoutStandsInput = {
    where: JobFairWhereUniqueInput
    create: XOR<JobFairCreateWithoutStandsInput, JobFairUncheckedCreateWithoutStandsInput>
  }

  export type RentUpsertWithWhereUniqueWithoutStandInput = {
    where: RentWhereUniqueInput
    update: XOR<RentUpdateWithoutStandInput, RentUncheckedUpdateWithoutStandInput>
    create: XOR<RentCreateWithoutStandInput, RentUncheckedCreateWithoutStandInput>
  }

  export type RentUpdateWithWhereUniqueWithoutStandInput = {
    where: RentWhereUniqueInput
    data: XOR<RentUpdateWithoutStandInput, RentUncheckedUpdateWithoutStandInput>
  }

  export type RentUpdateManyWithWhereWithoutStandInput = {
    where: RentScalarWhereInput
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyWithoutStandInput>
  }

  export type JobFairUpsertWithoutStandsInput = {
    update: XOR<JobFairUpdateWithoutStandsInput, JobFairUncheckedUpdateWithoutStandsInput>
    create: XOR<JobFairCreateWithoutStandsInput, JobFairUncheckedCreateWithoutStandsInput>
    where?: JobFairWhereInput
  }

  export type JobFairUpdateToOneWithWhereWithoutStandsInput = {
    where?: JobFairWhereInput
    data: XOR<JobFairUpdateWithoutStandsInput, JobFairUncheckedUpdateWithoutStandsInput>
  }

  export type JobFairUpdateWithoutStandsInput = {
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobFairUncheckedUpdateWithoutStandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutRentsInput = {
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    user: UserCreateNestedOneWithoutCompaniesInput
    requirements?: RequirementCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRentsInput = {
    id?: number
    user_id: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
    requirements?: RequirementUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRentsInput, CompanyUncheckedCreateWithoutRentsInput>
  }

  export type StandCreateWithoutRentsInput = {
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobFair: JobFairCreateNestedOneWithoutStandsInput
  }

  export type StandUncheckedCreateWithoutRentsInput = {
    id?: number
    job_fair_id: number
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandCreateOrConnectWithoutRentsInput = {
    where: StandWhereUniqueInput
    create: XOR<StandCreateWithoutRentsInput, StandUncheckedCreateWithoutRentsInput>
  }

  export type CompanyUpsertWithoutRentsInput = {
    update: XOR<CompanyUpdateWithoutRentsInput, CompanyUncheckedUpdateWithoutRentsInput>
    create: XOR<CompanyCreateWithoutRentsInput, CompanyUncheckedCreateWithoutRentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRentsInput, CompanyUncheckedUpdateWithoutRentsInput>
  }

  export type CompanyUpdateWithoutRentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput
    requirements?: RequirementUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: RequirementUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type StandUpsertWithoutRentsInput = {
    update: XOR<StandUpdateWithoutRentsInput, StandUncheckedUpdateWithoutRentsInput>
    create: XOR<StandCreateWithoutRentsInput, StandUncheckedCreateWithoutRentsInput>
    where?: StandWhereInput
  }

  export type StandUpdateToOneWithWhereWithoutRentsInput = {
    where?: StandWhereInput
    data: XOR<StandUpdateWithoutRentsInput, StandUncheckedUpdateWithoutRentsInput>
  }

  export type StandUpdateWithoutRentsInput = {
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobFair?: JobFairUpdateOneRequiredWithoutStandsNestedInput
  }

  export type StandUncheckedUpdateWithoutRentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_fair_id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateWithoutCvInput = {
    name: string
    provider: string
    year: string
  }

  export type AchievementUncheckedCreateWithoutCvInput = {
    id?: number
    name: string
    provider: string
    year: string
  }

  export type AchievementCreateOrConnectWithoutCvInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutCvInput, AchievementUncheckedCreateWithoutCvInput>
  }

  export type AchievementCreateManyCvInputEnvelope = {
    data: AchievementCreateManyCvInput | AchievementCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCvsInput = {
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCvsInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCvsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
  }

  export type CVRequirementCreateWithoutCvInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    requirement: RequirementCreateNestedOneWithoutCv_requirementsInput
  }

  export type CVRequirementUncheckedCreateWithoutCvInput = {
    id?: number
    requirement_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVRequirementCreateOrConnectWithoutCvInput = {
    where: CVRequirementWhereUniqueInput
    create: XOR<CVRequirementCreateWithoutCvInput, CVRequirementUncheckedCreateWithoutCvInput>
  }

  export type CVRequirementCreateManyCvInputEnvelope = {
    data: CVRequirementCreateManyCvInput | CVRequirementCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutCvInput = {
    name: string
    image: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUncheckedCreateWithoutCvInput = {
    id?: number
    name: string
    image: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutCvInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutCvInput, CertificateUncheckedCreateWithoutCvInput>
  }

  export type CertificateCreateManyCvInputEnvelope = {
    data: CertificateCreateManyCvInput | CertificateCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutCvInput = {
    name: string
    degree: string
    major: string
    address: string
    start_at: Date | string
    end_at: Date | string
    grade: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUncheckedCreateWithoutCvInput = {
    id?: number
    name: string
    degree: string
    major: string
    address: string
    start_at: Date | string
    end_at: Date | string
    grade: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateOrConnectWithoutCvInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutCvInput, EducationUncheckedCreateWithoutCvInput>
  }

  export type EducationCreateManyCvInputEnvelope = {
    data: EducationCreateManyCvInput | EducationCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutCvInput = {
    name: string
    description: string
  }

  export type ExperienceUncheckedCreateWithoutCvInput = {
    id?: number
    name: string
    description: string
  }

  export type ExperienceCreateOrConnectWithoutCvInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutCvInput, ExperienceUncheckedCreateWithoutCvInput>
  }

  export type ExperienceCreateManyCvInputEnvelope = {
    data: ExperienceCreateManyCvInput | ExperienceCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type SkillsCreateWithoutCvInput = {
    name: string
    skill?: SkillsCreateskillInput | string[]
  }

  export type SkillsUncheckedCreateWithoutCvInput = {
    id?: number
    name: string
    skill?: SkillsCreateskillInput | string[]
  }

  export type SkillsCreateOrConnectWithoutCvInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutCvInput, SkillsUncheckedCreateWithoutCvInput>
  }

  export type SkillsCreateManyCvInputEnvelope = {
    data: SkillsCreateManyCvInput | SkillsCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type WorkExperienceCreateWithoutCvInput = {
    name: string
    position: string
    start_at: Date | string
    end_at: Date | string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desc?: WorkExperienceCreatedescInput | string[]
  }

  export type WorkExperienceUncheckedCreateWithoutCvInput = {
    id?: number
    name: string
    position: string
    start_at: Date | string
    end_at: Date | string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desc?: WorkExperienceCreatedescInput | string[]
  }

  export type WorkExperienceCreateOrConnectWithoutCvInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutCvInput, WorkExperienceUncheckedCreateWithoutCvInput>
  }

  export type WorkExperienceCreateManyCvInputEnvelope = {
    data: WorkExperienceCreateManyCvInput | WorkExperienceCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type AchievementUpsertWithWhereUniqueWithoutCvInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutCvInput, AchievementUncheckedUpdateWithoutCvInput>
    create: XOR<AchievementCreateWithoutCvInput, AchievementUncheckedCreateWithoutCvInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutCvInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutCvInput, AchievementUncheckedUpdateWithoutCvInput>
  }

  export type AchievementUpdateManyWithWhereWithoutCvInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutCvInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: IntFilter<"Achievement"> | number
    cv_id?: IntFilter<"Achievement"> | number
    name?: StringFilter<"Achievement"> | string
    provider?: StringFilter<"Achievement"> | string
    year?: StringFilter<"Achievement"> | string
  }

  export type UserUpsertWithoutCvsInput = {
    update: XOR<UserUpdateWithoutCvsInput, UserUncheckedUpdateWithoutCvsInput>
    create: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCvsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCvsInput, UserUncheckedUpdateWithoutCvsInput>
  }

  export type UserUpdateWithoutCvsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCvsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CVRequirementUpsertWithWhereUniqueWithoutCvInput = {
    where: CVRequirementWhereUniqueInput
    update: XOR<CVRequirementUpdateWithoutCvInput, CVRequirementUncheckedUpdateWithoutCvInput>
    create: XOR<CVRequirementCreateWithoutCvInput, CVRequirementUncheckedCreateWithoutCvInput>
  }

  export type CVRequirementUpdateWithWhereUniqueWithoutCvInput = {
    where: CVRequirementWhereUniqueInput
    data: XOR<CVRequirementUpdateWithoutCvInput, CVRequirementUncheckedUpdateWithoutCvInput>
  }

  export type CVRequirementUpdateManyWithWhereWithoutCvInput = {
    where: CVRequirementScalarWhereInput
    data: XOR<CVRequirementUpdateManyMutationInput, CVRequirementUncheckedUpdateManyWithoutCvInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutCvInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutCvInput, CertificateUncheckedUpdateWithoutCvInput>
    create: XOR<CertificateCreateWithoutCvInput, CertificateUncheckedCreateWithoutCvInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutCvInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutCvInput, CertificateUncheckedUpdateWithoutCvInput>
  }

  export type CertificateUpdateManyWithWhereWithoutCvInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutCvInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: IntFilter<"Certificate"> | number
    cv_id?: IntFilter<"Certificate"> | number
    name?: StringFilter<"Certificate"> | string
    image?: StringFilter<"Certificate"> | string
    desc?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type EducationUpsertWithWhereUniqueWithoutCvInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutCvInput, EducationUncheckedUpdateWithoutCvInput>
    create: XOR<EducationCreateWithoutCvInput, EducationUncheckedCreateWithoutCvInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutCvInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutCvInput, EducationUncheckedUpdateWithoutCvInput>
  }

  export type EducationUpdateManyWithWhereWithoutCvInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutCvInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: IntFilter<"Education"> | number
    cv_id?: IntFilter<"Education"> | number
    name?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    major?: StringFilter<"Education"> | string
    address?: StringFilter<"Education"> | string
    start_at?: DateTimeFilter<"Education"> | Date | string
    end_at?: DateTimeFilter<"Education"> | Date | string
    grade?: FloatFilter<"Education"> | number
    desc?: StringNullableFilter<"Education"> | string | null
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutCvInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutCvInput, ExperienceUncheckedUpdateWithoutCvInput>
    create: XOR<ExperienceCreateWithoutCvInput, ExperienceUncheckedCreateWithoutCvInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutCvInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutCvInput, ExperienceUncheckedUpdateWithoutCvInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutCvInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutCvInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: IntFilter<"Experience"> | number
    cv_id?: IntFilter<"Experience"> | number
    name?: StringFilter<"Experience"> | string
    description?: StringFilter<"Experience"> | string
  }

  export type SkillsUpsertWithWhereUniqueWithoutCvInput = {
    where: SkillsWhereUniqueInput
    update: XOR<SkillsUpdateWithoutCvInput, SkillsUncheckedUpdateWithoutCvInput>
    create: XOR<SkillsCreateWithoutCvInput, SkillsUncheckedCreateWithoutCvInput>
  }

  export type SkillsUpdateWithWhereUniqueWithoutCvInput = {
    where: SkillsWhereUniqueInput
    data: XOR<SkillsUpdateWithoutCvInput, SkillsUncheckedUpdateWithoutCvInput>
  }

  export type SkillsUpdateManyWithWhereWithoutCvInput = {
    where: SkillsScalarWhereInput
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyWithoutCvInput>
  }

  export type SkillsScalarWhereInput = {
    AND?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    OR?: SkillsScalarWhereInput[]
    NOT?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    id?: IntFilter<"Skills"> | number
    cv_id?: IntFilter<"Skills"> | number
    name?: StringFilter<"Skills"> | string
    skill?: StringNullableListFilter<"Skills">
  }

  export type WorkExperienceUpsertWithWhereUniqueWithoutCvInput = {
    where: WorkExperienceWhereUniqueInput
    update: XOR<WorkExperienceUpdateWithoutCvInput, WorkExperienceUncheckedUpdateWithoutCvInput>
    create: XOR<WorkExperienceCreateWithoutCvInput, WorkExperienceUncheckedCreateWithoutCvInput>
  }

  export type WorkExperienceUpdateWithWhereUniqueWithoutCvInput = {
    where: WorkExperienceWhereUniqueInput
    data: XOR<WorkExperienceUpdateWithoutCvInput, WorkExperienceUncheckedUpdateWithoutCvInput>
  }

  export type WorkExperienceUpdateManyWithWhereWithoutCvInput = {
    where: WorkExperienceScalarWhereInput
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyWithoutCvInput>
  }

  export type WorkExperienceScalarWhereInput = {
    AND?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    OR?: WorkExperienceScalarWhereInput[]
    NOT?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    id?: IntFilter<"WorkExperience"> | number
    cv_id?: IntFilter<"WorkExperience"> | number
    name?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    start_at?: DateTimeFilter<"WorkExperience"> | Date | string
    end_at?: DateTimeFilter<"WorkExperience"> | Date | string
    address?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    desc?: StringNullableListFilter<"WorkExperience">
  }

  export type CVCreateWithoutSkillInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutSkillInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutSkillInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutSkillInput, CVUncheckedCreateWithoutSkillInput>
  }

  export type CVUpsertWithoutSkillInput = {
    update: XOR<CVUpdateWithoutSkillInput, CVUncheckedUpdateWithoutSkillInput>
    create: XOR<CVCreateWithoutSkillInput, CVUncheckedCreateWithoutSkillInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutSkillInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutSkillInput, CVUncheckedUpdateWithoutSkillInput>
  }

  export type CVUpdateWithoutSkillInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateWithoutAchievementInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutAchievementInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutAchievementInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutAchievementInput, CVUncheckedCreateWithoutAchievementInput>
  }

  export type CVUpsertWithoutAchievementInput = {
    update: XOR<CVUpdateWithoutAchievementInput, CVUncheckedUpdateWithoutAchievementInput>
    create: XOR<CVCreateWithoutAchievementInput, CVUncheckedCreateWithoutAchievementInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutAchievementInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutAchievementInput, CVUncheckedUpdateWithoutAchievementInput>
  }

  export type CVUpdateWithoutAchievementInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateWithoutExperienceInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutExperienceInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutExperienceInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
  }

  export type CVUpsertWithoutExperienceInput = {
    update: XOR<CVUpdateWithoutExperienceInput, CVUncheckedUpdateWithoutExperienceInput>
    create: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutExperienceInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutExperienceInput, CVUncheckedUpdateWithoutExperienceInput>
  }

  export type CVUpdateWithoutExperienceInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateWithoutCv_requirementsInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutCv_requirementsInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutCv_requirementsInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutCv_requirementsInput, CVUncheckedCreateWithoutCv_requirementsInput>
  }

  export type RequirementCreateWithoutCv_requirementsInput = {
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRequirementsInput
    education?: RequirementEducationCreateNestedManyWithoutRequirementInput
  }

  export type RequirementUncheckedCreateWithoutCv_requirementsInput = {
    id?: number
    company_id: number
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: RequirementEducationUncheckedCreateNestedManyWithoutRequirementInput
  }

  export type RequirementCreateOrConnectWithoutCv_requirementsInput = {
    where: RequirementWhereUniqueInput
    create: XOR<RequirementCreateWithoutCv_requirementsInput, RequirementUncheckedCreateWithoutCv_requirementsInput>
  }

  export type CVUpsertWithoutCv_requirementsInput = {
    update: XOR<CVUpdateWithoutCv_requirementsInput, CVUncheckedUpdateWithoutCv_requirementsInput>
    create: XOR<CVCreateWithoutCv_requirementsInput, CVUncheckedCreateWithoutCv_requirementsInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutCv_requirementsInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutCv_requirementsInput, CVUncheckedUpdateWithoutCv_requirementsInput>
  }

  export type CVUpdateWithoutCv_requirementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutCv_requirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type RequirementUpsertWithoutCv_requirementsInput = {
    update: XOR<RequirementUpdateWithoutCv_requirementsInput, RequirementUncheckedUpdateWithoutCv_requirementsInput>
    create: XOR<RequirementCreateWithoutCv_requirementsInput, RequirementUncheckedCreateWithoutCv_requirementsInput>
    where?: RequirementWhereInput
  }

  export type RequirementUpdateToOneWithWhereWithoutCv_requirementsInput = {
    where?: RequirementWhereInput
    data: XOR<RequirementUpdateWithoutCv_requirementsInput, RequirementUncheckedUpdateWithoutCv_requirementsInput>
  }

  export type RequirementUpdateWithoutCv_requirementsInput = {
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRequirementsNestedInput
    education?: RequirementEducationUpdateManyWithoutRequirementNestedInput
  }

  export type RequirementUncheckedUpdateWithoutCv_requirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: RequirementEducationUncheckedUpdateManyWithoutRequirementNestedInput
  }

  export type CVCreateWithoutEducationsInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutEducationsInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutEducationsInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutEducationsInput, CVUncheckedCreateWithoutEducationsInput>
  }

  export type CVUpsertWithoutEducationsInput = {
    update: XOR<CVUpdateWithoutEducationsInput, CVUncheckedUpdateWithoutEducationsInput>
    create: XOR<CVCreateWithoutEducationsInput, CVUncheckedCreateWithoutEducationsInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutEducationsInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutEducationsInput, CVUncheckedUpdateWithoutEducationsInput>
  }

  export type CVUpdateWithoutEducationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutEducationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateWithoutWorkExperiencesInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    certificates?: CertificateCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutWorkExperiencesInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutWorkExperiencesInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutWorkExperiencesInput, CVUncheckedCreateWithoutWorkExperiencesInput>
  }

  export type CVUpsertWithoutWorkExperiencesInput = {
    update: XOR<CVUpdateWithoutWorkExperiencesInput, CVUncheckedUpdateWithoutWorkExperiencesInput>
    create: XOR<CVCreateWithoutWorkExperiencesInput, CVUncheckedCreateWithoutWorkExperiencesInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutWorkExperiencesInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutWorkExperiencesInput, CVUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type CVUpdateWithoutWorkExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutWorkExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateWithoutCertificatesInput = {
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementCreateNestedManyWithoutCvInput
    user: UserCreateNestedOneWithoutCvsInput
    cv_requirements?: CVRequirementCreateNestedManyWithoutCvInput
    educations?: EducationCreateNestedManyWithoutCvInput
    experience?: ExperienceCreateNestedManyWithoutCvInput
    skill?: SkillsCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutCertificatesInput = {
    id?: number
    user_id: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement?: AchievementUncheckedCreateNestedManyWithoutCvInput
    cv_requirements?: CVRequirementUncheckedCreateNestedManyWithoutCvInput
    educations?: EducationUncheckedCreateNestedManyWithoutCvInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCvInput
    skill?: SkillsUncheckedCreateNestedManyWithoutCvInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutCertificatesInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutCertificatesInput, CVUncheckedCreateWithoutCertificatesInput>
  }

  export type CVUpsertWithoutCertificatesInput = {
    update: XOR<CVUpdateWithoutCertificatesInput, CVUncheckedUpdateWithoutCertificatesInput>
    create: XOR<CVCreateWithoutCertificatesInput, CVUncheckedCreateWithoutCertificatesInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutCertificatesInput, CVUncheckedUpdateWithoutCertificatesInput>
  }

  export type CVUpdateWithoutCertificatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutCertificatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateManyUserInput = {
    id?: number
    name: string
    address: string
    email: string
    gender: $Enums.Gender
    phone: string
    birth_date: Date | string
    social_media?: CVCreatesocial_mediaInput | string[]
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateManyUserInput = {
    id?: number
    name: string
    address: string
    desc: string
    social_media: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locationStand?: string | null
  }

  export type CVUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUpdateManyWithoutCvNestedInput
    certificates?: CertificateUpdateManyWithoutCvNestedInput
    educations?: EducationUpdateManyWithoutCvNestedInput
    experience?: ExperienceUpdateManyWithoutCvNestedInput
    skill?: SkillsUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUncheckedUpdateManyWithoutCvNestedInput
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutCvNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutCvNestedInput
    educations?: EducationUncheckedUpdateManyWithoutCvNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCvNestedInput
    skill?: SkillsUncheckedUpdateManyWithoutCvNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    social_media?: CVUpdatesocial_mediaInput | string[]
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    rents?: RentUpdateManyWithoutCompanyNestedInput
    requirements?: RequirementUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
    rents?: RentUncheckedUpdateManyWithoutCompanyNestedInput
    requirements?: RequirementUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    social_media?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationStand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentCreateManyCompanyInput = {
    id?: number
    stand_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementCreateManyCompanyInput = {
    id?: number
    min_age: number
    max_age: number
    gender?: RequirementCreategenderInput | string[]
    position: string
    desc_job?: RequirementCreatedesc_jobInput | string[]
    skill?: RequirementCreateskillInput | string[]
    keyword?: RequirementCreatekeywordInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentUpdateWithoutCompanyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stand?: StandUpdateOneRequiredWithoutRentsNestedInput
  }

  export type RentUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stand_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stand_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementUpdateWithoutCompanyInput = {
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUpdateManyWithoutRequirementNestedInput
    education?: RequirementEducationUpdateManyWithoutRequirementNestedInput
  }

  export type RequirementUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv_requirements?: CVRequirementUncheckedUpdateManyWithoutRequirementNestedInput
    education?: RequirementEducationUncheckedUpdateManyWithoutRequirementNestedInput
  }

  export type RequirementUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: RequirementUpdategenderInput | string[]
    position?: StringFieldUpdateOperationsInput | string
    desc_job?: RequirementUpdatedesc_jobInput | string[]
    skill?: RequirementUpdateskillInput | string[]
    keyword?: RequirementUpdatekeywordInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVRequirementCreateManyRequirementInput = {
    id?: number
    cv_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementEducationCreateManyRequirementInput = {
    id?: number
    degree: string
    grade: number
    createdAt?: Date | string
    updateAt?: Date | string
    major?: RequirementEducationCreatemajorInput | string[]
  }

  export type CVRequirementUpdateWithoutRequirementInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: CVUpdateOneRequiredWithoutCv_requirementsNestedInput
  }

  export type CVRequirementUncheckedUpdateWithoutRequirementInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVRequirementUncheckedUpdateManyWithoutRequirementInput = {
    id?: IntFieldUpdateOperationsInput | number
    cv_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementEducationUpdateWithoutRequirementInput = {
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
  }

  export type RequirementEducationUncheckedUpdateWithoutRequirementInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
  }

  export type RequirementEducationUncheckedUpdateManyWithoutRequirementInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: RequirementEducationUpdatemajorInput | string[]
  }

  export type StandCreateManyJobFairInput = {
    id?: number
    number: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandUpdateWithoutJobFairInput = {
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rents?: RentUpdateManyWithoutStandNestedInput
  }

  export type StandUncheckedUpdateWithoutJobFairInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rents?: RentUncheckedUpdateManyWithoutStandNestedInput
  }

  export type StandUncheckedUpdateManyWithoutJobFairInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentCreateManyStandInput = {
    id?: number
    company_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentUpdateWithoutStandInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRentsNestedInput
  }

  export type RentUncheckedUpdateWithoutStandInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentUncheckedUpdateManyWithoutStandInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateManyCvInput = {
    id?: number
    name: string
    provider: string
    year: string
  }

  export type CVRequirementCreateManyCvInput = {
    id?: number
    requirement_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyCvInput = {
    id?: number
    name: string
    image: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateManyCvInput = {
    id?: number
    name: string
    degree: string
    major: string
    address: string
    start_at: Date | string
    end_at: Date | string
    grade: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceCreateManyCvInput = {
    id?: number
    name: string
    description: string
  }

  export type SkillsCreateManyCvInput = {
    id?: number
    name: string
    skill?: SkillsCreateskillInput | string[]
  }

  export type WorkExperienceCreateManyCvInput = {
    id?: number
    name: string
    position: string
    start_at: Date | string
    end_at: Date | string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desc?: WorkExperienceCreatedescInput | string[]
  }

  export type AchievementUpdateWithoutCvInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type CVRequirementUpdateWithoutCvInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: RequirementUpdateOneRequiredWithoutCv_requirementsNestedInput
  }

  export type CVRequirementUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    requirement_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVRequirementUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    requirement_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutCvInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutCvInput = {
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUpdateWithoutCvInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsUpdateWithoutCvInput = {
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
  }

  export type SkillsUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
  }

  export type SkillsUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    skill?: SkillsUpdateskillInput | string[]
  }

  export type WorkExperienceUpdateWithoutCvInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
  }

  export type WorkExperienceUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
  }

  export type WorkExperienceUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: WorkExperienceUpdatedescInput | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequirementCountOutputTypeDefaultArgs instead
     */
    export type RequirementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequirementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobFairCountOutputTypeDefaultArgs instead
     */
    export type JobFairCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobFairCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StandCountOutputTypeDefaultArgs instead
     */
    export type StandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CVCountOutputTypeDefaultArgs instead
     */
    export type CVCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CVCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequirementDefaultArgs instead
     */
    export type RequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequirementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequirementEducationDefaultArgs instead
     */
    export type RequirementEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequirementEducationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobFairDefaultArgs instead
     */
    export type JobFairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobFairDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StandDefaultArgs instead
     */
    export type StandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentDefaultArgs instead
     */
    export type RentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CVDefaultArgs instead
     */
    export type CVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CVDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillsDefaultArgs instead
     */
    export type SkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementDefaultArgs instead
     */
    export type AchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExperienceDefaultArgs instead
     */
    export type ExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExperienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CVRequirementDefaultArgs instead
     */
    export type CVRequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CVRequirementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EducationDefaultArgs instead
     */
    export type EducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EducationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkExperienceDefaultArgs instead
     */
    export type WorkExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkExperienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CertificateDefaultArgs instead
     */
    export type CertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CertificateDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}