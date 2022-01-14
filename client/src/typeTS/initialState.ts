
export interface AuthType {
  userId: null | number,
  email: string,
  isAuth: boolean
}
export interface PostType {
  isLoading: boolean,
  posts: [],
  error: null | string,
}
export interface OrderType {
  name: string,
  status: boolean,
  service_id: null | number,
  user_id: null | number,
  master_id: null | number,
  error: null | string,
}

export interface State {
  auth: AuthType,
  post: PostType,
  order: OrderType,
}
