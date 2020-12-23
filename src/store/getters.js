const getters = {
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
<<<<<<< HEAD
  role: state => state.user.role,
  // permission_routes: state => state.permission.routes,
=======
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
  errorLogs: state => state.errorLog.logs
}
export default getters
