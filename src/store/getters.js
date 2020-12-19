const getters = {
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  role: state => state.user.role,
  // permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters