export interface HttpResponse<T> {
  statusCode: number
  body: T
}

export interface HttpRequest<B> {
  params?: any
  headers?: any
  body?: B
  query?: {
    search?: string | number
    limit?: string | number
    page?: string | number
  }
}
