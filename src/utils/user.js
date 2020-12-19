/**
 * 判断是否在权限列表
 * @param {String} role
 * @param {Array} roleList
 */
export function inRoleList (role, roleList) {
  if (role in roleList) {
    return true
  } else {
    return false
  }
}
