export class HttpUtils {
  public static transform(value: any): any {
    let params: any = {};
    for (let key in value) if (value[key] != undefined || value[key] != null) params[key] = value[key];
    return params;
  }
}
