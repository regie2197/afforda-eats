
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
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model StoreHours
 * 
 */
export type StoreHours = $Result.DefaultSelection<Prisma.$StoreHoursPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  STORE_OWNER: 'STORE_OWNER'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeHours`: Exposes CRUD operations for the **StoreHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreHours
    * const storeHours = await prisma.storeHours.findMany()
    * ```
    */
  get storeHours(): Prisma.StoreHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Store: 'Store',
    Location: 'Location',
    Food: 'Food',
    Review: 'Review',
    StoreHours: 'StoreHours',
    Guest: 'Guest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "store" | "location" | "food" | "review" | "storeHours" | "guest"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      StoreHours: {
        payload: Prisma.$StoreHoursPayload<ExtArgs>
        fields: Prisma.StoreHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>
          }
          findFirst: {
            args: Prisma.StoreHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>
          }
          findMany: {
            args: Prisma.StoreHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>[]
          }
          create: {
            args: Prisma.StoreHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>
          }
          createMany: {
            args: Prisma.StoreHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>[]
          }
          delete: {
            args: Prisma.StoreHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>
          }
          update: {
            args: Prisma.StoreHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>
          }
          deleteMany: {
            args: Prisma.StoreHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>[]
          }
          upsert: {
            args: Prisma.StoreHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreHoursPayload>
          }
          aggregate: {
            args: Prisma.StoreHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreHours>
          }
          groupBy: {
            args: Prisma.StoreHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreHoursCountArgs<ExtArgs>
            result: $Utils.Optional<StoreHoursCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    store?: StoreOmit
    location?: LocationOmit
    food?: FoodOmit
    review?: ReviewOmit
    storeHours?: StoreHoursOmit
    guest?: GuestOmit
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
    | 'updateManyAndReturn'
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
    reviews: number
    stores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    stores?: boolean | UserCountOutputTypeCountStoresArgs
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
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    foods: number
    reviews: number
    storeHours: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | StoreCountOutputTypeCountFoodsArgs
    reviews?: boolean | StoreCountOutputTypeCountReviewsArgs
    storeHours?: boolean | StoreCountOutputTypeCountStoreHoursArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountStoreHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreHoursWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    reviews: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | FoodCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
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
    storeId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    storeId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    accountType: $Enums.AccountType | null
    createdAt: Date | null
    updatedAt: Date | null
    storeId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    accountType: $Enums.AccountType | null
    createdAt: Date | null
    updatedAt: Date | null
    storeId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    firstName: number
    lastName: number
    accountType: number
    createdAt: number
    updatedAt: number
    storeId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    storeId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    storeId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
    storeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
    storeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
    storeId?: true
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
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt: Date
    updatedAt: Date
    storeId: number | null
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
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storeId?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    stores?: boolean | User$storesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storeId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storeId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storeId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "firstName" | "lastName" | "accountType" | "createdAt" | "updatedAt" | "storeId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    stores?: boolean | User$storesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      stores: Prisma.$StorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      firstName: string
      lastName: string
      accountType: $Enums.AccountType
      createdAt: Date
      updatedAt: Date
      storeId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends User$storesArgs<ExtArgs> = {}>(args?: Subset<T, User$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly accountType: FieldRef<"User", 'AccountType'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly storeId: FieldRef<"User", 'Int'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.stores
   */
  export type User$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    ownerId: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    ownerId: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    name: string | null
    locationId: number | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    locationId: number | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    locationId: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    locationId?: true
    ownerId?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    locationId?: true
    ownerId?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    locationId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    locationId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    locationId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    name: string
    locationId: number
    ownerId: number
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | Store$foodsArgs<ExtArgs>
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    storeHours?: boolean | Store$storeHoursArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    locationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "locationId" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Store$foodsArgs<ExtArgs>
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    storeHours?: boolean | Store$storeHoursArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      location: Prisma.$LocationPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      storeHours: Prisma.$StoreHoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      locationId: number
      ownerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends Store$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Store$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Store$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Store$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    storeHours<T extends Store$storeHoursArgs<ExtArgs> = {}>(args?: Subset<T, Store$storeHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly name: FieldRef<"Store", 'String'>
    readonly locationId: FieldRef<"Store", 'Int'>
    readonly ownerId: FieldRef<"Store", 'Int'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.foods
   */
  export type Store$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Store.reviews
   */
  export type Store$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Store.storeHours
   */
  export type Store$storeHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    where?: StoreHoursWhereInput
    orderBy?: StoreHoursOrderByWithRelationInput | StoreHoursOrderByWithRelationInput[]
    cursor?: StoreHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreHoursScalarFieldEnum | StoreHoursScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    streetNumber: string | null
    streetName: string | null
    city: string | null
    zipcode: string | null
    country: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    streetNumber: string | null
    streetName: string | null
    city: string | null
    zipcode: string | null
    country: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    streetNumber: number
    streetName: number
    city: number
    zipcode: number
    country: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    streetNumber?: true
    streetName?: true
    city?: true
    zipcode?: true
    country?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    streetNumber?: true
    streetName?: true
    city?: true
    zipcode?: true
    country?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    streetNumber?: true
    streetName?: true
    city?: true
    zipcode?: true
    country?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    streetNumber: string | null
    streetName: string
    city: string
    zipcode: string
    country: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetNumber?: boolean
    streetName?: boolean
    city?: boolean
    zipcode?: boolean
    country?: boolean
    store?: boolean | Location$storeArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetNumber?: boolean
    streetName?: boolean
    city?: boolean
    zipcode?: boolean
    country?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetNumber?: boolean
    streetName?: boolean
    city?: boolean
    zipcode?: boolean
    country?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    streetNumber?: boolean
    streetName?: boolean
    city?: boolean
    zipcode?: boolean
    country?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "streetNumber" | "streetName" | "city" | "zipcode" | "country", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | Location$storeArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      store: Prisma.$StorePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      streetNumber: string | null
      streetName: string
      city: string
      zipcode: string
      country: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends Location$storeArgs<ExtArgs> = {}>(args?: Subset<T, Location$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly streetNumber: FieldRef<"Location", 'String'>
    readonly streetName: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly zipcode: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.store
   */
  export type Location$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    price: number | null
    storeId: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    price: number | null
    storeId: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    storeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    price?: true
    storeId?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    price?: true
    storeId?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    name: string
    price: number
    description: string
    storeId: number
    createdAt: Date
    updatedAt: Date
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    reviews?: boolean | Food$reviewsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "storeId" | "createdAt" | "updatedAt", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    reviews?: boolean | Food$reviewsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      description: string
      storeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
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
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Food$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Food$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly name: FieldRef<"Food", 'String'>
    readonly price: FieldRef<"Food", 'Float'>
    readonly description: FieldRef<"Food", 'String'>
    readonly storeId: FieldRef<"Food", 'Int'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Food", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food.reviews
   */
  export type Food$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    foodId: number | null
    storeId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    foodId: number | null
    storeId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    content: string | null
    rating: number | null
    userId: number | null
    foodId: number | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    content: string | null
    rating: number | null
    userId: number | null
    foodId: number | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    content: number
    rating: number
    userId: number
    foodId: number
    storeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    foodId?: true
    storeId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    foodId?: true
    storeId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    userId?: true
    foodId?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    userId?: true
    foodId?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    content?: true
    rating?: true
    userId?: true
    foodId?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    content: string
    rating: number
    userId: number
    foodId: number
    storeId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    userId?: boolean
    foodId?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    userId?: boolean
    foodId?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    rating?: boolean
    userId?: boolean
    foodId?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    content?: boolean
    rating?: boolean
    userId?: boolean
    foodId?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "rating" | "userId" | "foodId" | "storeId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      rating: number
      userId: number
      foodId: number
      storeId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends Review$storeArgs<ExtArgs> = {}>(args?: Subset<T, Review$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly foodId: FieldRef<"Review", 'Int'>
    readonly storeId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.store
   */
  export type Review$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model StoreHours
   */

  export type AggregateStoreHours = {
    _count: StoreHoursCountAggregateOutputType | null
    _avg: StoreHoursAvgAggregateOutputType | null
    _sum: StoreHoursSumAggregateOutputType | null
    _min: StoreHoursMinAggregateOutputType | null
    _max: StoreHoursMaxAggregateOutputType | null
  }

  export type StoreHoursAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
  }

  export type StoreHoursSumAggregateOutputType = {
    id: number | null
    storeId: number | null
  }

  export type StoreHoursMinAggregateOutputType = {
    id: number | null
    day: string | null
    openTime: string | null
    closeTime: string | null
    storeId: number | null
  }

  export type StoreHoursMaxAggregateOutputType = {
    id: number | null
    day: string | null
    openTime: string | null
    closeTime: string | null
    storeId: number | null
  }

  export type StoreHoursCountAggregateOutputType = {
    id: number
    day: number
    openTime: number
    closeTime: number
    storeId: number
    _all: number
  }


  export type StoreHoursAvgAggregateInputType = {
    id?: true
    storeId?: true
  }

  export type StoreHoursSumAggregateInputType = {
    id?: true
    storeId?: true
  }

  export type StoreHoursMinAggregateInputType = {
    id?: true
    day?: true
    openTime?: true
    closeTime?: true
    storeId?: true
  }

  export type StoreHoursMaxAggregateInputType = {
    id?: true
    day?: true
    openTime?: true
    closeTime?: true
    storeId?: true
  }

  export type StoreHoursCountAggregateInputType = {
    id?: true
    day?: true
    openTime?: true
    closeTime?: true
    storeId?: true
    _all?: true
  }

  export type StoreHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreHours to aggregate.
     */
    where?: StoreHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreHours to fetch.
     */
    orderBy?: StoreHoursOrderByWithRelationInput | StoreHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreHours
    **/
    _count?: true | StoreHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreHoursMaxAggregateInputType
  }

  export type GetStoreHoursAggregateType<T extends StoreHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreHours[P]>
      : GetScalarType<T[P], AggregateStoreHours[P]>
  }




  export type StoreHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreHoursWhereInput
    orderBy?: StoreHoursOrderByWithAggregationInput | StoreHoursOrderByWithAggregationInput[]
    by: StoreHoursScalarFieldEnum[] | StoreHoursScalarFieldEnum
    having?: StoreHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreHoursCountAggregateInputType | true
    _avg?: StoreHoursAvgAggregateInputType
    _sum?: StoreHoursSumAggregateInputType
    _min?: StoreHoursMinAggregateInputType
    _max?: StoreHoursMaxAggregateInputType
  }

  export type StoreHoursGroupByOutputType = {
    id: number
    day: string
    openTime: string
    closeTime: string
    storeId: number
    _count: StoreHoursCountAggregateOutputType | null
    _avg: StoreHoursAvgAggregateOutputType | null
    _sum: StoreHoursSumAggregateOutputType | null
    _min: StoreHoursMinAggregateOutputType | null
    _max: StoreHoursMaxAggregateOutputType | null
  }

  type GetStoreHoursGroupByPayload<T extends StoreHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreHoursGroupByOutputType[P]>
            : GetScalarType<T[P], StoreHoursGroupByOutputType[P]>
        }
      >
    >


  export type StoreHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    storeId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeHours"]>

  export type StoreHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    storeId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeHours"]>

  export type StoreHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    storeId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeHours"]>

  export type StoreHoursSelectScalar = {
    id?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    storeId?: boolean
  }

  export type StoreHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "openTime" | "closeTime" | "storeId", ExtArgs["result"]["storeHours"]>
  export type StoreHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreHoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $StoreHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreHours"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: string
      openTime: string
      closeTime: string
      storeId: number
    }, ExtArgs["result"]["storeHours"]>
    composites: {}
  }

  type StoreHoursGetPayload<S extends boolean | null | undefined | StoreHoursDefaultArgs> = $Result.GetResult<Prisma.$StoreHoursPayload, S>

  type StoreHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreHoursCountAggregateInputType | true
    }

  export interface StoreHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreHours'], meta: { name: 'StoreHours' } }
    /**
     * Find zero or one StoreHours that matches the filter.
     * @param {StoreHoursFindUniqueArgs} args - Arguments to find a StoreHours
     * @example
     * // Get one StoreHours
     * const storeHours = await prisma.storeHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreHoursFindUniqueArgs>(args: SelectSubset<T, StoreHoursFindUniqueArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreHoursFindUniqueOrThrowArgs} args - Arguments to find a StoreHours
     * @example
     * // Get one StoreHours
     * const storeHours = await prisma.storeHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursFindFirstArgs} args - Arguments to find a StoreHours
     * @example
     * // Get one StoreHours
     * const storeHours = await prisma.storeHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreHoursFindFirstArgs>(args?: SelectSubset<T, StoreHoursFindFirstArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursFindFirstOrThrowArgs} args - Arguments to find a StoreHours
     * @example
     * // Get one StoreHours
     * const storeHours = await prisma.storeHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreHours
     * const storeHours = await prisma.storeHours.findMany()
     * 
     * // Get first 10 StoreHours
     * const storeHours = await prisma.storeHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeHoursWithIdOnly = await prisma.storeHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreHoursFindManyArgs>(args?: SelectSubset<T, StoreHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreHours.
     * @param {StoreHoursCreateArgs} args - Arguments to create a StoreHours.
     * @example
     * // Create one StoreHours
     * const StoreHours = await prisma.storeHours.create({
     *   data: {
     *     // ... data to create a StoreHours
     *   }
     * })
     * 
     */
    create<T extends StoreHoursCreateArgs>(args: SelectSubset<T, StoreHoursCreateArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreHours.
     * @param {StoreHoursCreateManyArgs} args - Arguments to create many StoreHours.
     * @example
     * // Create many StoreHours
     * const storeHours = await prisma.storeHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreHoursCreateManyArgs>(args?: SelectSubset<T, StoreHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreHours and returns the data saved in the database.
     * @param {StoreHoursCreateManyAndReturnArgs} args - Arguments to create many StoreHours.
     * @example
     * // Create many StoreHours
     * const storeHours = await prisma.storeHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreHours and only return the `id`
     * const storeHoursWithIdOnly = await prisma.storeHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreHours.
     * @param {StoreHoursDeleteArgs} args - Arguments to delete one StoreHours.
     * @example
     * // Delete one StoreHours
     * const StoreHours = await prisma.storeHours.delete({
     *   where: {
     *     // ... filter to delete one StoreHours
     *   }
     * })
     * 
     */
    delete<T extends StoreHoursDeleteArgs>(args: SelectSubset<T, StoreHoursDeleteArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreHours.
     * @param {StoreHoursUpdateArgs} args - Arguments to update one StoreHours.
     * @example
     * // Update one StoreHours
     * const storeHours = await prisma.storeHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreHoursUpdateArgs>(args: SelectSubset<T, StoreHoursUpdateArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreHours.
     * @param {StoreHoursDeleteManyArgs} args - Arguments to filter StoreHours to delete.
     * @example
     * // Delete a few StoreHours
     * const { count } = await prisma.storeHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreHoursDeleteManyArgs>(args?: SelectSubset<T, StoreHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreHours
     * const storeHours = await prisma.storeHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreHoursUpdateManyArgs>(args: SelectSubset<T, StoreHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreHours and returns the data updated in the database.
     * @param {StoreHoursUpdateManyAndReturnArgs} args - Arguments to update many StoreHours.
     * @example
     * // Update many StoreHours
     * const storeHours = await prisma.storeHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreHours and only return the `id`
     * const storeHoursWithIdOnly = await prisma.storeHours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreHours.
     * @param {StoreHoursUpsertArgs} args - Arguments to update or create a StoreHours.
     * @example
     * // Update or create a StoreHours
     * const storeHours = await prisma.storeHours.upsert({
     *   create: {
     *     // ... data to create a StoreHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreHours we want to update
     *   }
     * })
     */
    upsert<T extends StoreHoursUpsertArgs>(args: SelectSubset<T, StoreHoursUpsertArgs<ExtArgs>>): Prisma__StoreHoursClient<$Result.GetResult<Prisma.$StoreHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursCountArgs} args - Arguments to filter StoreHours to count.
     * @example
     * // Count the number of StoreHours
     * const count = await prisma.storeHours.count({
     *   where: {
     *     // ... the filter for the StoreHours we want to count
     *   }
     * })
    **/
    count<T extends StoreHoursCountArgs>(
      args?: Subset<T, StoreHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreHoursAggregateArgs>(args: Subset<T, StoreHoursAggregateArgs>): Prisma.PrismaPromise<GetStoreHoursAggregateType<T>>

    /**
     * Group by StoreHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreHoursGroupByArgs} args - Group by arguments.
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
      T extends StoreHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreHoursGroupByArgs['orderBy'] }
        : { orderBy?: StoreHoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreHours model
   */
  readonly fields: StoreHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoreHours model
   */
  interface StoreHoursFieldRefs {
    readonly id: FieldRef<"StoreHours", 'Int'>
    readonly day: FieldRef<"StoreHours", 'String'>
    readonly openTime: FieldRef<"StoreHours", 'String'>
    readonly closeTime: FieldRef<"StoreHours", 'String'>
    readonly storeId: FieldRef<"StoreHours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StoreHours findUnique
   */
  export type StoreHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * Filter, which StoreHours to fetch.
     */
    where: StoreHoursWhereUniqueInput
  }

  /**
   * StoreHours findUniqueOrThrow
   */
  export type StoreHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * Filter, which StoreHours to fetch.
     */
    where: StoreHoursWhereUniqueInput
  }

  /**
   * StoreHours findFirst
   */
  export type StoreHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * Filter, which StoreHours to fetch.
     */
    where?: StoreHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreHours to fetch.
     */
    orderBy?: StoreHoursOrderByWithRelationInput | StoreHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreHours.
     */
    cursor?: StoreHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreHours.
     */
    distinct?: StoreHoursScalarFieldEnum | StoreHoursScalarFieldEnum[]
  }

  /**
   * StoreHours findFirstOrThrow
   */
  export type StoreHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * Filter, which StoreHours to fetch.
     */
    where?: StoreHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreHours to fetch.
     */
    orderBy?: StoreHoursOrderByWithRelationInput | StoreHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreHours.
     */
    cursor?: StoreHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreHours.
     */
    distinct?: StoreHoursScalarFieldEnum | StoreHoursScalarFieldEnum[]
  }

  /**
   * StoreHours findMany
   */
  export type StoreHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * Filter, which StoreHours to fetch.
     */
    where?: StoreHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreHours to fetch.
     */
    orderBy?: StoreHoursOrderByWithRelationInput | StoreHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreHours.
     */
    cursor?: StoreHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreHours.
     */
    skip?: number
    distinct?: StoreHoursScalarFieldEnum | StoreHoursScalarFieldEnum[]
  }

  /**
   * StoreHours create
   */
  export type StoreHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreHours.
     */
    data: XOR<StoreHoursCreateInput, StoreHoursUncheckedCreateInput>
  }

  /**
   * StoreHours createMany
   */
  export type StoreHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreHours.
     */
    data: StoreHoursCreateManyInput | StoreHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreHours createManyAndReturn
   */
  export type StoreHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * The data used to create many StoreHours.
     */
    data: StoreHoursCreateManyInput | StoreHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreHours update
   */
  export type StoreHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreHours.
     */
    data: XOR<StoreHoursUpdateInput, StoreHoursUncheckedUpdateInput>
    /**
     * Choose, which StoreHours to update.
     */
    where: StoreHoursWhereUniqueInput
  }

  /**
   * StoreHours updateMany
   */
  export type StoreHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreHours.
     */
    data: XOR<StoreHoursUpdateManyMutationInput, StoreHoursUncheckedUpdateManyInput>
    /**
     * Filter which StoreHours to update
     */
    where?: StoreHoursWhereInput
    /**
     * Limit how many StoreHours to update.
     */
    limit?: number
  }

  /**
   * StoreHours updateManyAndReturn
   */
  export type StoreHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * The data used to update StoreHours.
     */
    data: XOR<StoreHoursUpdateManyMutationInput, StoreHoursUncheckedUpdateManyInput>
    /**
     * Filter which StoreHours to update
     */
    where?: StoreHoursWhereInput
    /**
     * Limit how many StoreHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreHours upsert
   */
  export type StoreHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreHours to update in case it exists.
     */
    where: StoreHoursWhereUniqueInput
    /**
     * In case the StoreHours found by the `where` argument doesn't exist, create a new StoreHours with this data.
     */
    create: XOR<StoreHoursCreateInput, StoreHoursUncheckedCreateInput>
    /**
     * In case the StoreHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreHoursUpdateInput, StoreHoursUncheckedUpdateInput>
  }

  /**
   * StoreHours delete
   */
  export type StoreHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
    /**
     * Filter which StoreHours to delete.
     */
    where: StoreHoursWhereUniqueInput
  }

  /**
   * StoreHours deleteMany
   */
  export type StoreHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreHours to delete
     */
    where?: StoreHoursWhereInput
    /**
     * Limit how many StoreHours to delete.
     */
    limit?: number
  }

  /**
   * StoreHours without action
   */
  export type StoreHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreHours
     */
    select?: StoreHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreHours
     */
    omit?: StoreHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreHoursInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestAvgAggregateOutputType = {
    id: number | null
  }

  export type GuestSumAggregateOutputType = {
    id: number | null
  }

  export type GuestMinAggregateOutputType = {
    id: number | null
    sessionId: string | null
    createdAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: number | null
    sessionId: string | null
    createdAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    sessionId: number
    createdAt: number
    _all: number
  }


  export type GuestAvgAggregateInputType = {
    id?: true
  }

  export type GuestSumAggregateInputType = {
    id?: true
  }

  export type GuestMinAggregateInputType = {
    id?: true
    sessionId?: true
    createdAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    sessionId?: true
    createdAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    sessionId?: true
    createdAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _avg?: GuestAvgAggregateInputType
    _sum?: GuestSumAggregateInputType
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: number
    sessionId: string
    createdAt: Date
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    sessionId?: boolean
    createdAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "createdAt", ExtArgs["result"]["guest"]>

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: string
      createdAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
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
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'Int'>
    readonly sessionId: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
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
    email: 'email',
    username: 'username',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    accountType: 'accountType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    storeId: 'storeId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    locationId: 'locationId',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    streetNumber: 'streetNumber',
    streetName: 'streetName',
    city: 'city',
    zipcode: 'zipcode',
    country: 'country'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    storeId: 'storeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    rating: 'rating',
    userId: 'userId',
    foodId: 'foodId',
    storeId: 'storeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const StoreHoursScalarFieldEnum: {
    id: 'id',
    day: 'day',
    openTime: 'openTime',
    closeTime: 'closeTime',
    storeId: 'storeId'
  };

  export type StoreHoursScalarFieldEnum = (typeof StoreHoursScalarFieldEnum)[keyof typeof StoreHoursScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    createdAt: 'createdAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


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
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    accountType?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    storeId?: IntNullableFilter<"User"> | number | null
    reviews?: ReviewListRelationFilter
    stores?: StoreListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrderInput | SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    stores?: StoreOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    accountType?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    storeId?: IntNullableFilter<"User"> | number | null
    reviews?: ReviewListRelationFilter
    stores?: StoreListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    accountType?: EnumAccountTypeWithAggregatesFilter<"User"> | $Enums.AccountType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    storeId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    locationId?: IntFilter<"Store"> | number
    ownerId?: IntFilter<"Store"> | number
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    foods?: FoodListRelationFilter
    reviews?: ReviewListRelationFilter
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    storeHours?: StoreHoursListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: FoodOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    location?: LocationOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    storeHours?: StoreHoursOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    locationId?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    ownerId?: IntFilter<"Store"> | number
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    foods?: FoodListRelationFilter
    reviews?: ReviewListRelationFilter
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    storeHours?: StoreHoursListRelationFilter
  }, "id" | "locationId">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    name?: StringWithAggregatesFilter<"Store"> | string
    locationId?: IntWithAggregatesFilter<"Store"> | number
    ownerId?: IntWithAggregatesFilter<"Store"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    streetNumber?: StringNullableFilter<"Location"> | string | null
    streetName?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    zipcode?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    streetNumber?: SortOrderInput | SortOrder
    streetName?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    streetNumber?: StringNullableFilter<"Location"> | string | null
    streetName?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    zipcode?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    streetNumber?: SortOrderInput | SortOrder
    streetName?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    streetNumber?: StringNullableWithAggregatesFilter<"Location"> | string | null
    streetName?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    zipcode?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    price?: FloatFilter<"Food"> | number
    description?: StringFilter<"Food"> | string
    storeId?: IntFilter<"Food"> | number
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    price?: FloatFilter<"Food"> | number
    description?: StringFilter<"Food"> | string
    storeId?: IntFilter<"Food"> | number
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    name?: StringWithAggregatesFilter<"Food"> | string
    price?: FloatWithAggregatesFilter<"Food"> | number
    description?: StringWithAggregatesFilter<"Food"> | string
    storeId?: IntWithAggregatesFilter<"Food"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    foodId?: IntFilter<"Review"> | number
    storeId?: IntNullableFilter<"Review"> | number | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food?: FoodOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    foodId?: IntFilter<"Review"> | number
    storeId?: IntNullableFilter<"Review"> | number | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    foodId?: IntWithAggregatesFilter<"Review"> | number
    storeId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type StoreHoursWhereInput = {
    AND?: StoreHoursWhereInput | StoreHoursWhereInput[]
    OR?: StoreHoursWhereInput[]
    NOT?: StoreHoursWhereInput | StoreHoursWhereInput[]
    id?: IntFilter<"StoreHours"> | number
    day?: StringFilter<"StoreHours"> | string
    openTime?: StringFilter<"StoreHours"> | string
    closeTime?: StringFilter<"StoreHours"> | string
    storeId?: IntFilter<"StoreHours"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type StoreHoursOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    storeId?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type StoreHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreHoursWhereInput | StoreHoursWhereInput[]
    OR?: StoreHoursWhereInput[]
    NOT?: StoreHoursWhereInput | StoreHoursWhereInput[]
    day?: StringFilter<"StoreHours"> | string
    openTime?: StringFilter<"StoreHours"> | string
    closeTime?: StringFilter<"StoreHours"> | string
    storeId?: IntFilter<"StoreHours"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type StoreHoursOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    storeId?: SortOrder
    _count?: StoreHoursCountOrderByAggregateInput
    _avg?: StoreHoursAvgOrderByAggregateInput
    _max?: StoreHoursMaxOrderByAggregateInput
    _min?: StoreHoursMinOrderByAggregateInput
    _sum?: StoreHoursSumOrderByAggregateInput
  }

  export type StoreHoursScalarWhereWithAggregatesInput = {
    AND?: StoreHoursScalarWhereWithAggregatesInput | StoreHoursScalarWhereWithAggregatesInput[]
    OR?: StoreHoursScalarWhereWithAggregatesInput[]
    NOT?: StoreHoursScalarWhereWithAggregatesInput | StoreHoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreHours"> | number
    day?: StringWithAggregatesFilter<"StoreHours"> | string
    openTime?: StringWithAggregatesFilter<"StoreHours"> | string
    closeTime?: StringWithAggregatesFilter<"StoreHours"> | string
    storeId?: IntWithAggregatesFilter<"StoreHours"> | number
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: IntFilter<"Guest"> | number
    sessionId?: StringFilter<"Guest"> | string
    createdAt?: DateTimeFilter<"Guest"> | Date | string
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    sessionId?: StringFilter<"Guest"> | string
    createdAt?: DateTimeFilter<"Guest"> | Date | string
  }, "id">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _avg?: GuestAvgOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
    _sum?: GuestSumOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guest"> | number
    sessionId?: StringWithAggregatesFilter<"Guest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
    reviews?: ReviewCreateNestedManyWithoutUserInput
    stores?: StoreCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    stores?: StoreUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    stores?: StoreUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    stores?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StoreCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    location: LocationCreateNestedOneWithoutStoreInput
    owner: UserCreateNestedOneWithoutStoresInput
    storeHours?: StoreHoursCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    name: string
    locationId: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeHours?: StoreHoursUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    location?: LocationUpdateOneRequiredWithoutStoreNestedInput
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    storeHours?: StoreHoursUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeHours?: StoreHoursUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    name: string
    locationId: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    streetNumber?: string | null
    streetName: string
    city: string
    zipcode: string
    country: string
    store?: StoreCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    streetNumber?: string | null
    streetName: string
    city: string
    zipcode: string
    country: string
    store?: StoreUncheckedCreateNestedOneWithoutLocationInput
  }

  export type LocationUpdateInput = {
    streetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    streetName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    streetName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    store?: StoreUncheckedUpdateOneWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    streetNumber?: string | null
    streetName: string
    city: string
    zipcode: string
    country: string
  }

  export type LocationUpdateManyMutationInput = {
    streetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    streetName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    streetName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutFoodsInput
    reviews?: ReviewCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    description: string
    storeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutFoodsNestedInput
    reviews?: ReviewUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: number
    name: string
    price: number
    description: string
    storeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutReviewsInput
    store?: StoreCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    content: string
    rating: number
    userId: number
    foodId: number
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutReviewsNestedInput
    store?: StoreUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    content: string
    rating: number
    userId: number
    foodId: number
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreHoursCreateInput = {
    day: string
    openTime: string
    closeTime: string
    store: StoreCreateNestedOneWithoutStoreHoursInput
  }

  export type StoreHoursUncheckedCreateInput = {
    id?: number
    day: string
    openTime: string
    closeTime: string
    storeId: number
  }

  export type StoreHoursUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneRequiredWithoutStoreHoursNestedInput
  }

  export type StoreHoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreHoursCreateManyInput = {
    id?: number
    day: string
    openTime: string
    closeTime: string
    storeId: number
  }

  export type StoreHoursUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
  }

  export type StoreHoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type GuestCreateInput = {
    sessionId: string
    createdAt?: Date | string
  }

  export type GuestUncheckedCreateInput = {
    id?: number
    sessionId: string
    createdAt?: Date | string
  }

  export type GuestUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateManyInput = {
    id?: number
    sessionId: string
    createdAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
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

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StoreHoursListRelationFilter = {
    every?: StoreHoursWhereInput
    some?: StoreHoursWhereInput
    none?: StoreHoursWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    ownerId?: SortOrder
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

  export type StoreNullableScalarRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    country?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
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

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreHoursCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    storeId?: SortOrder
  }

  export type StoreHoursAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
  }

  export type StoreHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    storeId?: SortOrder
  }

  export type StoreHoursMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    storeId?: SortOrder
  }

  export type StoreHoursSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type StoreUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutOwnerInput | StoreUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutOwnerInput | StoreUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutOwnerInput | StoreUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput> | StoreCreateWithoutOwnerInput[] | StoreUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutOwnerInput | StoreCreateOrConnectWithoutOwnerInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutOwnerInput | StoreUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoreCreateManyOwnerInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutOwnerInput | StoreUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutOwnerInput | StoreUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutStoreInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type LocationCreateNestedOneWithoutStoreInput = {
    create?: XOR<LocationCreateWithoutStoreInput, LocationUncheckedCreateWithoutStoreInput>
    connectOrCreate?: LocationCreateOrConnectWithoutStoreInput
    connect?: LocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStoresInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    connect?: UserWhereUniqueInput
  }

  export type StoreHoursCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreHoursCreateWithoutStoreInput, StoreHoursUncheckedCreateWithoutStoreInput> | StoreHoursCreateWithoutStoreInput[] | StoreHoursUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreHoursCreateOrConnectWithoutStoreInput | StoreHoursCreateOrConnectWithoutStoreInput[]
    createMany?: StoreHoursCreateManyStoreInputEnvelope
    connect?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StoreHoursUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreHoursCreateWithoutStoreInput, StoreHoursUncheckedCreateWithoutStoreInput> | StoreHoursCreateWithoutStoreInput[] | StoreHoursUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreHoursCreateOrConnectWithoutStoreInput | StoreHoursCreateOrConnectWithoutStoreInput[]
    createMany?: StoreHoursCreateManyStoreInputEnvelope
    connect?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutStoreNestedInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutStoreInput | FoodUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutStoreInput | FoodUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutStoreInput | FoodUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LocationUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<LocationCreateWithoutStoreInput, LocationUncheckedCreateWithoutStoreInput>
    connectOrCreate?: LocationCreateOrConnectWithoutStoreInput
    upsert?: LocationUpsertWithoutStoreInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutStoreInput, LocationUpdateWithoutStoreInput>, LocationUncheckedUpdateWithoutStoreInput>
  }

  export type UserUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    upsert?: UserUpsertWithoutStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoresInput, UserUpdateWithoutStoresInput>, UserUncheckedUpdateWithoutStoresInput>
  }

  export type StoreHoursUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreHoursCreateWithoutStoreInput, StoreHoursUncheckedCreateWithoutStoreInput> | StoreHoursCreateWithoutStoreInput[] | StoreHoursUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreHoursCreateOrConnectWithoutStoreInput | StoreHoursCreateOrConnectWithoutStoreInput[]
    upsert?: StoreHoursUpsertWithWhereUniqueWithoutStoreInput | StoreHoursUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreHoursCreateManyStoreInputEnvelope
    set?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    disconnect?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    delete?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    connect?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    update?: StoreHoursUpdateWithWhereUniqueWithoutStoreInput | StoreHoursUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreHoursUpdateManyWithWhereWithoutStoreInput | StoreHoursUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreHoursScalarWhereInput | StoreHoursScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutStoreInput | FoodUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutStoreInput | FoodUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutStoreInput | FoodUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type StoreHoursUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreHoursCreateWithoutStoreInput, StoreHoursUncheckedCreateWithoutStoreInput> | StoreHoursCreateWithoutStoreInput[] | StoreHoursUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreHoursCreateOrConnectWithoutStoreInput | StoreHoursCreateOrConnectWithoutStoreInput[]
    upsert?: StoreHoursUpsertWithWhereUniqueWithoutStoreInput | StoreHoursUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreHoursCreateManyStoreInputEnvelope
    set?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    disconnect?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    delete?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    connect?: StoreHoursWhereUniqueInput | StoreHoursWhereUniqueInput[]
    update?: StoreHoursUpdateWithWhereUniqueWithoutStoreInput | StoreHoursUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreHoursUpdateManyWithWhereWithoutStoreInput | StoreHoursUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreHoursScalarWhereInput | StoreHoursScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutLocationInput = {
    create?: XOR<StoreCreateWithoutLocationInput, StoreUncheckedCreateWithoutLocationInput>
    connectOrCreate?: StoreCreateOrConnectWithoutLocationInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUncheckedCreateNestedOneWithoutLocationInput = {
    create?: XOR<StoreCreateWithoutLocationInput, StoreUncheckedCreateWithoutLocationInput>
    connectOrCreate?: StoreCreateOrConnectWithoutLocationInput
    connect?: StoreWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StoreUpdateOneWithoutLocationNestedInput = {
    create?: XOR<StoreCreateWithoutLocationInput, StoreUncheckedCreateWithoutLocationInput>
    connectOrCreate?: StoreCreateOrConnectWithoutLocationInput
    upsert?: StoreUpsertWithoutLocationInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutLocationInput, StoreUpdateWithoutLocationInput>, StoreUncheckedUpdateWithoutLocationInput>
  }

  export type StoreUncheckedUpdateOneWithoutLocationNestedInput = {
    create?: XOR<StoreCreateWithoutLocationInput, StoreUncheckedCreateWithoutLocationInput>
    connectOrCreate?: StoreCreateOrConnectWithoutLocationInput
    upsert?: StoreUpsertWithoutLocationInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutLocationInput, StoreUpdateWithoutLocationInput>, StoreUncheckedUpdateWithoutLocationInput>
  }

  export type StoreCreateNestedOneWithoutFoodsInput = {
    create?: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodsInput
    connect?: StoreWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutFoodInput = {
    create?: XOR<ReviewCreateWithoutFoodInput, ReviewUncheckedCreateWithoutFoodInput> | ReviewCreateWithoutFoodInput[] | ReviewUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFoodInput | ReviewCreateOrConnectWithoutFoodInput[]
    createMany?: ReviewCreateManyFoodInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<ReviewCreateWithoutFoodInput, ReviewUncheckedCreateWithoutFoodInput> | ReviewCreateWithoutFoodInput[] | ReviewUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFoodInput | ReviewCreateOrConnectWithoutFoodInput[]
    createMany?: ReviewCreateManyFoodInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoreUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodsInput
    upsert?: StoreUpsertWithoutFoodsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutFoodsInput, StoreUpdateWithoutFoodsInput>, StoreUncheckedUpdateWithoutFoodsInput>
  }

  export type ReviewUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ReviewCreateWithoutFoodInput, ReviewUncheckedCreateWithoutFoodInput> | ReviewCreateWithoutFoodInput[] | ReviewUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFoodInput | ReviewCreateOrConnectWithoutFoodInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutFoodInput | ReviewUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ReviewCreateManyFoodInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutFoodInput | ReviewUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutFoodInput | ReviewUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ReviewCreateWithoutFoodInput, ReviewUncheckedCreateWithoutFoodInput> | ReviewCreateWithoutFoodInput[] | ReviewUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFoodInput | ReviewCreateOrConnectWithoutFoodInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutFoodInput | ReviewUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ReviewCreateManyFoodInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutFoodInput | ReviewUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutFoodInput | ReviewUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutReviewsInput = {
    create?: XOR<FoodCreateWithoutReviewsInput, FoodUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutReviewsInput
    connect?: FoodWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutReviewsInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<FoodCreateWithoutReviewsInput, FoodUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutReviewsInput
    upsert?: FoodUpsertWithoutReviewsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutReviewsInput, FoodUpdateWithoutReviewsInput>, FoodUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    upsert?: StoreUpsertWithoutReviewsInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutReviewsInput, StoreUpdateWithoutReviewsInput>, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreCreateNestedOneWithoutStoreHoursInput = {
    create?: XOR<StoreCreateWithoutStoreHoursInput, StoreUncheckedCreateWithoutStoreHoursInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreHoursInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutStoreHoursNestedInput = {
    create?: XOR<StoreCreateWithoutStoreHoursInput, StoreUncheckedCreateWithoutStoreHoursInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreHoursInput
    upsert?: StoreUpsertWithoutStoreHoursInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStoreHoursInput, StoreUpdateWithoutStoreHoursInput>, StoreUncheckedUpdateWithoutStoreHoursInput>
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

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
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

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ReviewCreateWithoutUserInput = {
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutReviewsInput
    store?: StoreCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    rating: number
    foodId: number
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutOwnerInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    location: LocationCreateNestedOneWithoutStoreInput
    storeHours?: StoreHoursCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeHours?: StoreHoursUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput>
  }

  export type StoreCreateManyOwnerInputEnvelope = {
    data: StoreCreateManyOwnerInput | StoreCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    foodId?: IntFilter<"Review"> | number
    storeId?: IntNullableFilter<"Review"> | number | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type StoreUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutOwnerInput, StoreUncheckedUpdateWithoutOwnerInput>
    create: XOR<StoreCreateWithoutOwnerInput, StoreUncheckedCreateWithoutOwnerInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutOwnerInput, StoreUncheckedUpdateWithoutOwnerInput>
  }

  export type StoreUpdateManyWithWhereWithoutOwnerInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    locationId?: IntFilter<"Store"> | number
    ownerId?: IntFilter<"Store"> | number
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
  }

  export type FoodCreateWithoutStoreInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutStoreInput = {
    id?: number
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutStoreInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput>
  }

  export type FoodCreateManyStoreInputEnvelope = {
    data: FoodCreateManyStoreInput | FoodCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutStoreInput = {
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutStoreInput = {
    id?: number
    content: string
    rating: number
    userId: number
    foodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewCreateManyStoreInputEnvelope = {
    data: ReviewCreateManyStoreInput | ReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutStoreInput = {
    streetNumber?: string | null
    streetName: string
    city: string
    zipcode: string
    country: string
  }

  export type LocationUncheckedCreateWithoutStoreInput = {
    id?: number
    streetNumber?: string | null
    streetName: string
    city: string
    zipcode: string
    country: string
  }

  export type LocationCreateOrConnectWithoutStoreInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutStoreInput, LocationUncheckedCreateWithoutStoreInput>
  }

  export type UserCreateWithoutStoresInput = {
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoresInput = {
    id?: number
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
  }

  export type StoreHoursCreateWithoutStoreInput = {
    day: string
    openTime: string
    closeTime: string
  }

  export type StoreHoursUncheckedCreateWithoutStoreInput = {
    id?: number
    day: string
    openTime: string
    closeTime: string
  }

  export type StoreHoursCreateOrConnectWithoutStoreInput = {
    where: StoreHoursWhereUniqueInput
    create: XOR<StoreHoursCreateWithoutStoreInput, StoreHoursUncheckedCreateWithoutStoreInput>
  }

  export type StoreHoursCreateManyStoreInputEnvelope = {
    data: StoreHoursCreateManyStoreInput | StoreHoursCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type FoodUpsertWithWhereUniqueWithoutStoreInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutStoreInput, FoodUncheckedUpdateWithoutStoreInput>
    create: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutStoreInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutStoreInput, FoodUncheckedUpdateWithoutStoreInput>
  }

  export type FoodUpdateManyWithWhereWithoutStoreInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutStoreInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    price?: FloatFilter<"Food"> | number
    description?: StringFilter<"Food"> | string
    storeId?: IntFilter<"Food"> | number
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStoreInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type LocationUpsertWithoutStoreInput = {
    update: XOR<LocationUpdateWithoutStoreInput, LocationUncheckedUpdateWithoutStoreInput>
    create: XOR<LocationCreateWithoutStoreInput, LocationUncheckedCreateWithoutStoreInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutStoreInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutStoreInput, LocationUncheckedUpdateWithoutStoreInput>
  }

  export type LocationUpdateWithoutStoreInput = {
    streetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    streetName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    streetName?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutStoresInput = {
    update: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserUpdateWithoutStoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreHoursUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreHoursWhereUniqueInput
    update: XOR<StoreHoursUpdateWithoutStoreInput, StoreHoursUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreHoursCreateWithoutStoreInput, StoreHoursUncheckedCreateWithoutStoreInput>
  }

  export type StoreHoursUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreHoursWhereUniqueInput
    data: XOR<StoreHoursUpdateWithoutStoreInput, StoreHoursUncheckedUpdateWithoutStoreInput>
  }

  export type StoreHoursUpdateManyWithWhereWithoutStoreInput = {
    where: StoreHoursScalarWhereInput
    data: XOR<StoreHoursUpdateManyMutationInput, StoreHoursUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreHoursScalarWhereInput = {
    AND?: StoreHoursScalarWhereInput | StoreHoursScalarWhereInput[]
    OR?: StoreHoursScalarWhereInput[]
    NOT?: StoreHoursScalarWhereInput | StoreHoursScalarWhereInput[]
    id?: IntFilter<"StoreHours"> | number
    day?: StringFilter<"StoreHours"> | string
    openTime?: StringFilter<"StoreHours"> | string
    closeTime?: StringFilter<"StoreHours"> | string
    storeId?: IntFilter<"StoreHours"> | number
  }

  export type StoreCreateWithoutLocationInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    owner: UserCreateNestedOneWithoutStoresInput
    storeHours?: StoreHoursCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeHours?: StoreHoursUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutLocationInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutLocationInput, StoreUncheckedCreateWithoutLocationInput>
  }

  export type StoreUpsertWithoutLocationInput = {
    update: XOR<StoreUpdateWithoutLocationInput, StoreUncheckedUpdateWithoutLocationInput>
    create: XOR<StoreCreateWithoutLocationInput, StoreUncheckedCreateWithoutLocationInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutLocationInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutLocationInput, StoreUncheckedUpdateWithoutLocationInput>
  }

  export type StoreUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    storeHours?: StoreHoursUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeHours?: StoreHoursUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutFoodsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    location: LocationCreateNestedOneWithoutStoreInput
    owner: UserCreateNestedOneWithoutStoresInput
    storeHours?: StoreHoursCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutFoodsInput = {
    id?: number
    name: string
    locationId: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeHours?: StoreHoursUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutFoodsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
  }

  export type ReviewCreateWithoutFoodInput = {
    content: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    store?: StoreCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutFoodInput = {
    id?: number
    content: string
    rating: number
    userId: number
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutFoodInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutFoodInput, ReviewUncheckedCreateWithoutFoodInput>
  }

  export type ReviewCreateManyFoodInputEnvelope = {
    data: ReviewCreateManyFoodInput | ReviewCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutFoodsInput = {
    update: XOR<StoreUpdateWithoutFoodsInput, StoreUncheckedUpdateWithoutFoodsInput>
    create: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutFoodsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutFoodsInput, StoreUncheckedUpdateWithoutFoodsInput>
  }

  export type StoreUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    location?: LocationUpdateOneRequiredWithoutStoreNestedInput
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    storeHours?: StoreHoursUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeHours?: StoreHoursUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutFoodInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutFoodInput, ReviewUncheckedUpdateWithoutFoodInput>
    create: XOR<ReviewCreateWithoutFoodInput, ReviewUncheckedCreateWithoutFoodInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutFoodInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutFoodInput, ReviewUncheckedUpdateWithoutFoodInput>
  }

  export type ReviewUpdateManyWithWhereWithoutFoodInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodCreateWithoutReviewsInput = {
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    price: number
    description: string
    storeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCreateOrConnectWithoutReviewsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutReviewsInput, FoodUncheckedCreateWithoutReviewsInput>
  }

  export type StoreCreateWithoutReviewsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutStoreInput
    location: LocationCreateNestedOneWithoutStoreInput
    owner: UserCreateNestedOneWithoutStoresInput
    storeHours?: StoreHoursCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    locationId: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
    storeHours?: StoreHoursUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutReviewsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
    stores?: StoreCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    username: string
    password: string
    firstName: string
    lastName: string
    accountType: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    storeId?: number | null
    stores?: StoreUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type FoodUpsertWithoutReviewsInput = {
    update: XOR<FoodUpdateWithoutReviewsInput, FoodUncheckedUpdateWithoutReviewsInput>
    create: XOR<FoodCreateWithoutReviewsInput, FoodUncheckedCreateWithoutReviewsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutReviewsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutReviewsInput, FoodUncheckedUpdateWithoutReviewsInput>
  }

  export type FoodUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpsertWithoutReviewsInput = {
    update: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutReviewsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutStoreNestedInput
    location?: LocationUpdateOneRequiredWithoutStoreNestedInput
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
    storeHours?: StoreHoursUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
    storeHours?: StoreHoursUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    stores?: StoreUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    stores?: StoreUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type StoreCreateWithoutStoreHoursInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    location: LocationCreateNestedOneWithoutStoreInput
    owner: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutStoreHoursInput = {
    id?: number
    name: string
    locationId: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutStoreHoursInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStoreHoursInput, StoreUncheckedCreateWithoutStoreHoursInput>
  }

  export type StoreUpsertWithoutStoreHoursInput = {
    update: XOR<StoreUpdateWithoutStoreHoursInput, StoreUncheckedUpdateWithoutStoreHoursInput>
    create: XOR<StoreCreateWithoutStoreHoursInput, StoreUncheckedCreateWithoutStoreHoursInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStoreHoursInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStoreHoursInput, StoreUncheckedUpdateWithoutStoreHoursInput>
  }

  export type StoreUpdateWithoutStoreHoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    location?: LocationUpdateOneRequiredWithoutStoreNestedInput
    owner?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutStoreHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    content: string
    rating: number
    foodId: number
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreCreateManyOwnerInput = {
    id?: number
    name: string
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutReviewsNestedInput
    store?: StoreUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    location?: LocationUpdateOneRequiredWithoutStoreNestedInput
    storeHours?: StoreHoursUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeHours?: StoreHoursUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyStoreInput = {
    id?: number
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyStoreInput = {
    id?: number
    content: string
    rating: number
    userId: number
    foodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreHoursCreateManyStoreInput = {
    id?: number
    day: string
    openTime: string
    closeTime: string
  }

  export type FoodUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutStoreInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreHoursUpdateWithoutStoreInput = {
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
  }

  export type StoreHoursUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
  }

  export type StoreHoursUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyFoodInput = {
    id?: number
    content: string
    rating: number
    userId: number
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutFoodInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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