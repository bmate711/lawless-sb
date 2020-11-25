/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface IAuthClient {
  /**
   * Login the user
   * @param body (optional)
   * @return successful operation
   */
  login(body: LoginReq | null | undefined): Promise<LoginResp>;
  /**
   * Get the user
   * @return successful operation
   */
  me(): Promise<UserResp>;
  /**
   * Register a user
   * @param body (optional)
   * @return successful operation
   */
  register(body: RegisterReq | null | undefined): Promise<RegisterResp>;
}

export class AuthClient implements IAuthClient {
  private http: {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  };
  private baseUrl: string;
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;

  constructor(
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    this.http = http ? http : <any>window;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  /**
   * Login the user
   * @param body (optional)
   * @return successful operation
   */
  login = (
    body: LoginReq | null | undefined,
    signal?: AbortSignal | undefined
  ): Promise<LoginResp> => {
    let url_ = this.baseUrl + "/api/auth/login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
      body: content_,
      method: "POST",
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processLogin(_response);
    });
  };

  protected processLogin(response: Response): Promise<LoginResp> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = LoginResp.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<LoginResp>(<any>null);
  }

  /**
   * Get the user
   * @return successful operation
   */
  me = (signal?: AbortSignal | undefined): Promise<UserResp> => {
    let url_ = this.baseUrl + "/api/auth/me";
    url_ = url_.replace(/[?&]$/, "");

    let options_ = <RequestInit>{
      method: "GET",
      signal,
      headers: {
        Accept: "application/json",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processMe(_response);
    });
  };

  protected processMe(response: Response): Promise<UserResp> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserResp.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<UserResp>(<any>null);
  }

  /**
   * Register a user
   * @param body (optional)
   * @return successful operation
   */
  register = (
    body: RegisterReq | null | undefined,
    signal?: AbortSignal | undefined
  ): Promise<RegisterResp> => {
    let url_ = this.baseUrl + "/api/auth/register";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
      body: content_,
      method: "POST",
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processRegister(_response);
    });
  };

  protected processRegister(response: Response): Promise<RegisterResp> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RegisterResp.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<RegisterResp>(<any>null);
  }
}

export interface ICaffClient {
  /**
   * Create and process caff
   * @param body (optional)
   * @return successful operation
   */
  create(body: CreateCaffReq | null | undefined): Promise<CreateCaffResp>;
}

export class CaffClient implements ICaffClient {
  private http: {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  };
  private baseUrl: string;
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;

  constructor(
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    this.http = http ? http : <any>window;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  /**
   * Create and process caff
   * @param body (optional)
   * @return successful operation
   */
  create = (
    body: CreateCaffReq | null | undefined,
    signal?: AbortSignal | undefined
  ): Promise<CreateCaffResp> => {
    let url_ = this.baseUrl + "/api/caff/create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
      body: content_,
      method: "POST",
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processCreate(_response);
    });
  };

  protected processCreate(response: Response): Promise<CreateCaffResp> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = CreateCaffResp.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<CreateCaffResp>(<any>null);
  }
}

export class CreateCaffReq implements ICreateCaffReq {
  name?: string | undefined;
  description?: string | undefined;
  price?: number | undefined;
  caffFile?: any | undefined;

  constructor(data?: ICreateCaffReq) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.description = _data["description"];
      this.price = _data["price"];
      this.caffFile = _data["caffFile"];
    }
  }

  static fromJS(data: any): CreateCaffReq {
    data = typeof data === "object" ? data : {};
    let result = new CreateCaffReq();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["name"] = this.name;
    data["description"] = this.description;
    data["price"] = this.price;
    data["caffFile"] = this.caffFile;
    return data;
  }
}

export interface ICreateCaffReq {
  name?: string | undefined;
  description?: string | undefined;
  price?: number | undefined;
  caffFile?: any | undefined;
}

export class CreateCaffResp implements ICreateCaffResp {
  id?: number | undefined;

  constructor(data?: ICreateCaffResp) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
    }
  }

  static fromJS(data: any): CreateCaffResp {
    data = typeof data === "object" ? data : {};
    let result = new CreateCaffResp();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["id"] = this.id;
    return data;
  }
}

export interface ICreateCaffResp {
  id?: number | undefined;
}

export class LoginReq implements ILoginReq {
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;

  constructor(data?: ILoginReq) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.username = _data["username"];
      this.email = _data["email"];
      this.password = _data["password"];
    }
  }

  static fromJS(data: any): LoginReq {
    data = typeof data === "object" ? data : {};
    let result = new LoginReq();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["username"] = this.username;
    data["email"] = this.email;
    data["password"] = this.password;
    return data;
  }
}

export interface ILoginReq {
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
}

export class LoginResp implements ILoginResp {
  token?: string | undefined;
  userPersonalData?: UserPersonalData | undefined;
  roles?: Role[] | undefined;

  constructor(data?: ILoginResp) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.token = _data["token"];
      this.userPersonalData = _data["userPersonalData"]
        ? UserPersonalData.fromJS(_data["userPersonalData"])
        : <any>undefined;
      if (Array.isArray(_data["roles"])) {
        this.roles = [] as any;
        for (let item of _data["roles"]) this.roles!.push(Role.fromJS(item));
      }
    }
  }

  static fromJS(data: any): LoginResp {
    data = typeof data === "object" ? data : {};
    let result = new LoginResp();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["token"] = this.token;
    data["userPersonalData"] = this.userPersonalData
      ? this.userPersonalData.toJSON()
      : <any>undefined;
    if (Array.isArray(this.roles)) {
      data["roles"] = [];
      for (let item of this.roles) data["roles"].push(item.toJSON());
    }
    return data;
  }
}

export interface ILoginResp {
  token?: string | undefined;
  userPersonalData?: UserPersonalData | undefined;
  roles?: Role[] | undefined;
}

export class RegisterReq implements IRegisterReq {
  userPersonalData?: UserPersonalData | undefined;
  password?: string | undefined;

  constructor(data?: IRegisterReq) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userPersonalData = _data["userPersonalData"]
        ? UserPersonalData.fromJS(_data["userPersonalData"])
        : <any>undefined;
      this.password = _data["password"];
    }
  }

  static fromJS(data: any): RegisterReq {
    data = typeof data === "object" ? data : {};
    let result = new RegisterReq();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["userPersonalData"] = this.userPersonalData
      ? this.userPersonalData.toJSON()
      : <any>undefined;
    data["password"] = this.password;
    return data;
  }
}

export interface IRegisterReq {
  userPersonalData?: UserPersonalData | undefined;
  password?: string | undefined;
}

export class RegisterResp implements IRegisterResp {
  value?: string | undefined;

  constructor(data?: IRegisterResp) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.value = _data["value"];
    }
  }

  static fromJS(data: any): RegisterResp {
    data = typeof data === "object" ? data : {};
    let result = new RegisterResp();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["value"] = this.value;
    return data;
  }
}

export interface IRegisterResp {
  value?: string | undefined;
}

export class Role implements IRole {
  name?: RoleName | undefined;

  constructor(data?: IRole) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
    }
  }

  static fromJS(data: any): Role {
    data = typeof data === "object" ? data : {};
    let result = new Role();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["name"] = this.name;
    return data;
  }
}

export interface IRole {
  name?: RoleName | undefined;
}

export class UserPersonalData implements IUserPersonalData {
  username?: string | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;

  constructor(data?: IUserPersonalData) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.username = _data["username"];
      this.email = _data["email"];
      this.firstName = _data["firstName"];
      this.lastName = _data["lastName"];
    }
  }

  static fromJS(data: any): UserPersonalData {
    data = typeof data === "object" ? data : {};
    let result = new UserPersonalData();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["username"] = this.username;
    data["email"] = this.email;
    data["firstName"] = this.firstName;
    data["lastName"] = this.lastName;
    return data;
  }
}

export interface IUserPersonalData {
  username?: string | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

export class UserResp implements IUserResp {
  userPersonalData?: UserPersonalData | undefined;
  roles?: Role[] | undefined;

  constructor(data?: IUserResp) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userPersonalData = _data["userPersonalData"]
        ? UserPersonalData.fromJS(_data["userPersonalData"])
        : <any>undefined;
      if (Array.isArray(_data["roles"])) {
        this.roles = [] as any;
        for (let item of _data["roles"]) this.roles!.push(Role.fromJS(item));
      }
    }
  }

  static fromJS(data: any): UserResp {
    data = typeof data === "object" ? data : {};
    let result = new UserResp();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["userPersonalData"] = this.userPersonalData
      ? this.userPersonalData.toJSON()
      : <any>undefined;
    if (Array.isArray(this.roles)) {
      data["roles"] = [];
      for (let item of this.roles) data["roles"].push(item.toJSON());
    }
    return data;
  }
}

export interface IUserResp {
  userPersonalData?: UserPersonalData | undefined;
  roles?: Role[] | undefined;
}

export enum RoleName {
  ROLE_USER = "ROLE_USER",
  ROLE_ADMIN = "ROLE_ADMIN",
}

export class LawlessException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isLawlessException = true;

  static isLawlessException(obj: any): obj is LawlessException {
    return obj.isLawlessException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new LawlessException(message, status, response, headers, null);
}
