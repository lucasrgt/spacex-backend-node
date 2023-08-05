import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<HttpMessage>>
}
